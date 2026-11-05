'use strict';
(function(){
// Gera relatórios semanais por turma a partir da Avaliação das Turmas.
// Uso: `node backend/relatorios.js` (chamado por cron/agendador). Sem dependências externas.
const NODE=typeof module!=='undefined'&&!!module.exports,fs=NODE?require('fs'):null,path=NODE?require('path'):null;

const CFG={minRespostas:(NODE&&+process.env.MIN_RESPOSTAS)||5,saida:NODE?path.join(__dirname,'saida'):'',dados:NODE?path.join(__dirname,'dados','respostas.jsonl'):'',tz:'America/Sao_Paulo'};
const ITENS=[['clima','Clima geral'],['respeito','Respeito entre colegas'],['acolhimento','Acolhimento'],['convivencia','Convivência e colaboração'],['participacao','Participação nas atividades'],['dificuldades','Dificuldades de aprendizagem percebidas'],['seguranca','Sensação de segurança']];
const ESCALA=['Sempre','Na maioria das vezes','Às vezes','Raramente'];
const SUGESTOES={clima:'Conversar com a turma sobre o clima da sala e combinar acordos de convivência.',respeito:'Retomar combinados de respeito em sala e acompanhar situações de conflito.',acolhimento:'Planejar atividades de integração e acolhimento da turma.',convivencia:'Propor trabalhos colaborativos com mediação dos professores.',participacao:'Variar as formas de participação nas aulas.',dificuldades:'Avaliar reforço ou monitoria e revisar o ritmo dos conteúdos.',seguranca:'Rever com a equipe os espaços e momentos em que os estudantes se sentem menos seguros.'};
const NEGATIVO=new Set(['dificuldades']);

const iso=d=>d.toLocaleDateString('en-CA',{timeZone:CFG.tz});
function inicioDaSemana(d=new Date()){const x=new Date(iso(d)+'T12:00:00');x.setDate(x.getDate()-((x.getDay()+6)%7));return iso(x)}

// Substitua por uma consulta ao banco: respostas da semana, sem identificação do aluno.
function carregarRespostas(semana){
  if(!fs.existsSync(CFG.dados))return[];
  return fs.readFileSync(CFG.dados,'utf8').split('\n').filter(Boolean).map(l=>JSON.parse(l)).filter(r=>r.semana===semana);
}

function distribuicao(lista,i){
  const c=ESCALA.map(o=>lista.filter(r=>r.respostas[i]===o).length),t=c.reduce((a,b)=>a+b,0);
  return{total:t,contagem:Object.fromEntries(ESCALA.map((o,k)=>[o,c[k]])),percentual:Object.fromEntries(ESCALA.map((o,k)=>[o,t?Math.round(100*c[k]/t):null]))};
}

function gerarRelatorio({turma,semana,respostas,matriculados},agora=new Date()){
  const validas=respostas.filter(r=>Array.isArray(r.respostas)&&r.respostas.length===ITENS.length&&r.respostas.some(v=>ESCALA.includes(v)));
  const base={id:`${turma}-${semana}`.replace(/[^\w-]+/g,'_'),turma,semana,geradoEm:agora.toISOString()};
  if(validas.length<CFG.minRespostas)return{...base,suprimido:true,motivo:`Menos de ${CFG.minRespostas} respostas válidas; resultados omitidos para evitar identificação indireta.`};
  const fim=new Date(semana+'T12:00:00');fim.setDate(fim.getDate()+6);
  const itens=ITENS.map(([k,nome],i)=>({chave:k,nome,...distribuicao(validas,i)}));
  const atencao=itens.filter(it=>it.total>=CFG.minRespostas).filter(it=>{
    const p=it.percentual,pos=(p['Sempre']||0)+(p['Na maioria das vezes']||0),neg=(p['Raramente']||0)+(p['Às vezes']||0);
    return NEGATIVO.has(it.chave)?pos>=40:neg>=50}).map(it=>it.chave);
  const nomes=atencao.map(k=>ITENS.find(i=>i[0]===k)[1]);
  return{...base,suprimido:false,periodo:{inicio:semana,fim:iso(fim)},respostasValidas:validas.length,
    participacao:matriculados>=validas.length&&matriculados>0?Math.round(100*validas.length/matriculados):null,
    itens,pontosDeAtencao:nomes,sugestoesDeMelhoria:atencao.map(k=>SUGESTOES[k]),limitacoes:['Reflete apenas os estudantes que responderam, não toda a turma.','Resultados de uma única semana não indicam tendência.',matriculados>0?'Participação calculada com o número de matriculados cadastrado.':'Participação não calculada: número de matriculados não cadastrado.'],
    resumo:atencao.length?`Aspectos que merecem atenção nesta semana: ${nomes.join('; ')}. Os dados refletem a percepção dos estudantes que responderam e não são um diagnóstico.`:'Nenhum aspecto ultrapassou os limites de atenção nesta semana. Os dados refletem a percepção dos estudantes que responderam.',
    sugestoes:{recebidas:validas.filter(r=>r.sugestao).length,nota:'Textos abertos exigem revisão humana antes de qualquer divulgação.'}};
}

function executar(agora=new Date(),matriculadosPorTurma={}){
  const semana=inicioDaSemana(agora),todas=carregarRespostas(semana),porTurma={};
  todas.forEach(r=>(porTurma[r.turma]=porTurma[r.turma]||[]).push(r));
  fs.mkdirSync(CFG.saida,{recursive:true});
  return Object.entries(porTurma).map(([turma,respostas])=>{
    const rel=gerarRelatorio({turma,semana,respostas,matriculados:matriculadosPorTurma[turma]},agora),f=path.join(CFG.saida,rel.id+'.json');
    if(!fs.existsSync(f))fs.writeFileSync(f,JSON.stringify(rel,null,2));
    return rel;
  });
}
const paraCSV=r=>r.suprimido?'turma,semana,observacao\n'+[r.turma,r.semana,r.motivo].map(v=>JSON.stringify(v)).join(',')+'\n':'aspecto,'+Object.keys(r.itens[0].contagem).join(',')+',total\n'+r.itens.map(i=>[JSON.stringify(i.nome),...Object.values(i.contagem),i.total].join(',')).join('\n')+'\n';
if(NODE){module.exports={CFG,gerarRelatorio,executar,inicioDaSemana,paraCSV};
if(require.main===module)console.log(`${executar().length} relatório(s) processado(s).`)}
else window.Relatorios={CFG,gerarRelatorio,inicioDaSemana,paraCSV};
})();
