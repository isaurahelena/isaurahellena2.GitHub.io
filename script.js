'use strict';
const P = {
  home: '<path d="M3 11l9-8 9 8v10H3z"/>',
  book: '<path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/>',
  mega: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14a5 5 0 0 1 5 5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  file: '<path d="M6 2h9l5 5v15H6z"/><path d="M9 13h8M9 17h8M9 9h3"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
  chev: '<path d="M9 6l6 6-6 6"/>', arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>', left: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
  chat: '<path d="M4 4h16v12H8l-4 4z"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/>',
  flask: '<path d="M9 3h6M10 3v6l-6 10a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-10V3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  pin: '<path d="M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  heart: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6-8 11-8 11z"/>', lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>', more: '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>', bar: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>', send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>', clip: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9zM9 12h6M9 16h4"/>', roda: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M12 3v5.5M12 15.5V21M3 12h5.5M15.5 12H21"/>'
};
const ic = n => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const NAV = [['materias', 'Matérias', 'book'], ['comunicados', 'Comunicados', 'mega'], ['horarios', 'Horários', 'clock'], ['professores', 'Professores', 'users'], ['direcao', 'Direção', 'user']];
const AREAS = [
  {
    id: 'ling', n: 'Linguagens', i: 'chat', d: 'Língua Portuguesa, Inglês e Artes: leitura, escrita e expressão.', s: [
      { n: 'Língua Portuguesa', c: ['Interpretação de textos', 'Gêneros textuais', 'Concordância verbal'], a: 'Produção de resenha crítica (1 página).', m: 'Apostila 3 e lista de leituras do bimestre.', t: 'Entregar a resenha até 10/08.' },
      { n: 'Inglês', c: ['Simple Past', 'Vocabulário de trabalho', 'Leitura de notícias'], a: 'Diálogo em duplas sobre entrevista de emprego.', m: 'Slides da aula e glossário em PDF.', t: 'Exercícios 1 a 8 da unidade 4.' }]
  },
  {
    id: 'mat', n: 'Matemática', i: 'calc', d: 'Álgebra, geometria e estatística aplicadas ao dia a dia.', s: [
      { n: 'Álgebra', c: ['Funções do 1º grau', 'Equações do 2º grau', 'Sistemas lineares'], a: 'Lista de 15 problemas contextualizados.', m: 'Videoaulas e formulário resumido.', t: 'Resolver a lista até quinta-feira.' },
      { n: 'Geometria', c: ['Áreas e volumes', 'Semelhança de triângulos', 'Trigonometria básica'], a: 'Medição de ambientes da escola em grupo.', m: 'Caderno de exercícios, capítulo 5.', t: 'Relatório da medição com croqui.' }]
  },
  {
    id: 'nat', n: 'Ciências da Natureza', i: 'flask', d: 'Biologia, Química e Física para entender o mundo ao redor.', s: [
      { n: 'Biologia', c: ['Ecologia', 'Genética básica', 'Saúde e prevenção'], a: 'Mapa mental sobre cadeias alimentares.', m: 'Texto de apoio e atlas digital.', t: 'Pesquisar uma espécie local.' },
      { n: 'Química', c: ['Tabela periódica', 'Ligações químicas', 'Soluções'], a: 'Experimento guiado de misturas (laboratório).', m: 'Roteiro de aula prática em PDF.', t: 'Relatório do experimento.' }]
  },
  {
    id: 'hum', n: 'Ciências Humanas', i: 'globe', d: 'História, Geografia e Sociologia para pensar a sociedade.', s: [
      { n: 'História', c: ['Era Vargas', 'Ditadura militar', 'Redemocratização'], a: 'Linha do tempo ilustrada em grupo.', m: 'Mapas históricos e documentário indicado.', t: 'Resumo do capítulo 7.' },
      { n: 'Geografia', c: ['Urbanização', 'Fontes de energia', 'Cartografia'], a: 'Leitura de mapas temáticos.', m: 'Atlas escolar e planilha de dados do IBGE.', t: 'Ficha sobre energia renovável.' }]
  }
];
const NEWS = [
  { cat: 'Importante', ic: 'cal', hot: 1, t: 'Início das aulas', d: '29 de julho de 2025', x: 'Informamos que o início das aulas será no dia 05 de agosto. Contamos com a presença de todos.', more: 'Os portões abrem às 7h. Alunos novos devem comparecer ao auditório para a recepção.' },
  { cat: 'Atividades', ic: 'file', t: 'Entrega de atividades', d: '28 de julho de 2025', x: 'As atividades avaliativas devem ser entregues até o dia 10/08, conforme combinado com os professores.', more: 'Trabalhos em grupo podem ser entregues por um representante, com a lista de integrantes.' },
  { cat: 'Aviso', ic: 'alert', hot: 1, t: 'Recesso escolar', d: '12 de julho de 2025', x: 'Informamos que haverá recesso escolar no dia 15 de julho. Aproveite para descansar.', more: 'As atividades presenciais e a secretaria retornam normalmente no dia seguinte.' },
  { cat: 'Reunião', ic: 'users', t: 'Reunião de pais e responsáveis', d: '10 de julho de 2025', x: 'A reunião será realizada no dia 15 de agosto, às 19h, no auditório da escola.', more: 'Haverá atendimento individual com os professores após a apresentação geral.' },
  { cat: 'Aviso', ic: 'book', t: 'Biblioteca com novo horário', d: '05 de julho de 2025', x: 'A biblioteca passa a funcionar das 8h às 17h, de segunda a sexta.', more: 'O empréstimo de livros continua por até 15 dias, com uma renovação.' }
];
const PER = ['07:30–08:20', '08:20–09:10', '09:10–09:30', '09:30–10:20', '10:20–11:10', '11:10–12:00', '12:00–12:50'];
const GRADE = [['Port.', 'Mat.', 'Bio.', 'Hist.', 'Ing.'], ['Mat.', 'Port.', 'Quím.', 'Geo.', 'Artes'], null, ['Hist.', 'Geo.', 'Mat.', 'Port.', 'Mat.'], ['Ing.', 'Fís.', 'Ed. Fís.', 'Quím.', 'Bio.'], ['Geo.', 'Artes', 'Port.', 'Fís.', 'Hist.'], ['Fís.', 'Ing.', 'Hist.', 'Mat.', 'Port.']];

const WELL = [['humor', 'Meu Humor', 'heart'], ['semana', 'Minha Semana', 'clip'], ['roda', 'Roda da Vida Escolar', 'roda'], ['apoio', 'Apoio Escolar', 'chat'], ['contato', 'Contato com Professores', 'users'], ['turmas', 'Avaliação das Turmas', 'bar'], ['relatorios', 'Relatórios Semanais', 'file']];
let state = { area: null, sub: 0, q: '', cat: 'Todos', open: {} };
const $ = s => document.querySelector(s), app = $('#app');

const views = {
  home: () => `<section class="home">
  <div class="welcome"><h1><span>Bem-vindo(a),</span>${esc(SESS.nome)}</h1>
   <p>Aqui você encontra tudo o que precisa para o seu dia a dia na escola.</p></div>
  <nav class="tiles" aria-label="Atalhos">${NAV.map(([id, t, i]) => `<a class="tile" href="#/${id}">${ic(i)}<span>${t}${ic('arrow')}</span></a>`).join('')}</nav>
  <h2 class="svc-h">${SESS.role === 'aluno' ? 'Também no portal' : 'Sua área'}</h2>
  <nav class="svc" aria-label="${SESS.role === 'aluno' ? 'Serviços' : 'Área da equipe'}">${WELLR().map(([id, t, i]) => `<a href="#/${id}">${ic(i)}${t}</a>`).join('')}</nav></section>`,

  materias: () => {
    const a = AREAS.find(x => x.id === state.area);
    if (!a) return `<h1 class="t">Matérias</h1><p class="sub">Escolha uma área para ver conteúdos, atividades e tarefas.</p>
   <div class="areas">${AREAS.map(a => `<button class="area" data-area="${a.id}"><b>${a.n}</b><span>${a.d}</span>${ic('arrow')}</button>`).join('')}</div>`;
    const s = a.s[state.sub];
    return `<button class="back" data-area="">${ic('left')} Todas as áreas</button><h1 class="t">${a.n}</h1><p class="sub">${a.d}</p>
   <div class="chips" role="tablist">${a.s.map((x, i) => `<button class="chip ${i === state.sub ? 'on' : ''}" role="tab" aria-selected="${i === state.sub}" data-sub="${i}">${x.n}</button>`).join('')}</div>
   <div class="panel"><div><h4>Conteúdos</h4><ul>${s.c.map(c => `<li>${c}</li>`).join('')}</ul></div>
    <div><h4>Atividades</h4><p>${s.a}</p></div><div><h4>Materiais de estudo</h4><p>${s.m}</p></div><div><h4>Tarefas</h4><p>${s.t}</p></div></div>`;
  },

  comunicados: () => `<h1 class="t">Comunicados</h1><p class="sub">Avisos da escola, com data e categoria.</p>
  <label class="search">${ic('search')}<input id="q" type="search" placeholder="Pesquisar comunicados" aria-label="Pesquisar comunicados" value="${esc(state.q)}"></label>
  <div class="chips" id="cats">${['Todos', ...new Set(NEWS.map(n => n.cat))].map(c => `<button class="chip ${c === state.cat ? 'on' : ''}" data-cat="${c}">${c}</button>`).join('')}</div>
  <div id="news"></div>`,

  horarios: () => `<h1 class="t">Horários</h1><p class="sub">Grade semanal da manhã.</p>
  <div class="tw"><table><caption class="skip">Grade de horários</caption><thead><tr><th scope="col">Horário</th>${['Seg', 'Ter', 'Qua', 'Qui', 'Sex'].map(d => `<th scope="col">${d}</th>`).join('')}</tr></thead><tbody>
  ${PER.map((p, r) => GRADE[r] ? `<tr><td class="h">${p}</td>${GRADE[r].map(x => `<td>${x}</td>`).join('')}</tr>` : `<tr class="brk"><td class="h">${p}</td><td colspan="5">Intervalo</td></tr>`).join('')}</tbody></table></div>`,

};
const titles = { home: 'Início', materias: 'Matérias', comunicados: 'Comunicados', horarios: 'Horários', professores: 'Professores', direcao: 'Direção' };

function drawNews() {
  const q = state.q.toLowerCase(), box = $('#news'); if (!box) return;
  const r = NEWS.map((n, i) => ({ ...n, i })).filter(n => (state.cat === 'Todos' || n.cat === state.cat) && (n.t + n.x).toLowerCase().includes(q));
  // A data vira a margem do aviso: "29 de julho de 2025" → 29 / jul. 2025
  const day = d => { const [dd, mm, yy] = d.split(' de '); return `<div class="day" aria-hidden="true"><b>${+dd}</b><span>${mm.slice(0, 3)}. ${yy}</span></div>` };
  box.innerHTML = r.length ? r.map(n => `<article class="news ${n.hot ? 'hot' : ''}">${day(n.d)}<div>
   <span class="tag">${n.cat}</span><h3>${n.t}</h3><p>${n.x}${state.open[n.i] ? ' ' + n.more : ''}</p>
   <div class="meta"><span>${ic('cal')} ${n.d}</span><button data-more="${n.i}" aria-expanded="${!!state.open[n.i]}">${state.open[n.i] ? 'Ver menos' : 'Ver mais'} ›</button></div></div></article>`).join('') : `<p class="empty">Nenhum comunicado encontrado. Tente outra palavra ou categoria.</p>`;
}

// ===== Acesso demonstrativo do aluno =====
// ATENÇÃO: login DEMONSTRATIVO, executado só no navegador. NÃO é seguro nem adequado para dados reais:
// qualquer pessoa pode ler as credenciais abaixo no código-fonte e contornar a verificação.
// Com um backend, mova a autenticação para o servidor (cookies HttpOnly, senha com hash, limite de tentativas)
// e apague esta lista. A senha nunca é gravada no navegador: a sessão guarda só o id do perfil, em sessionStorage.
const USERS = [
  { id: 'aluno', tipo: 'aluno', role: 'aluno', nome: 'Aluno(a) Demo', email: 'jaelysilva66@gmail.com', senha: 'alunosenac' }
];
const LOGO = `<a class="logo" href="#/" aria-label="SENAC Escola – início"><img src="imagens/senac-negativo.svg" alt="SENAC" width="653" height="383"><small>Escola</small></a>`;
const WELL_ALUNO = ['humor', 'semana', 'roda', 'apoio', 'contato', 'turmas', 'relatorios'];
// Áreas de cada perfil da equipe: cada um vê só o que lhe cabe.
const STAFF = { psi: [['caixa', 'Conversas', 'chat']], prof: [['caixa', 'Conversas', 'chat']], ped: [['caixa', 'Conversas', 'chat'], ['painel', 'Avaliação das Turmas', 'bar'], ['relatorios', 'Relatórios Semanais', 'file']] };
const WELLR = () => !SESS ? [] : SESS.role === 'aluno' ? WELL.filter(w => WELL_ALUNO.includes(w[0])) : STAFF[SESS.role];
const can = r => r === 'home' || NAV.some(n => n[0] === r) || WELLR().some(w => w[0] === r);
const LP_NAV = [['rotina', 'Rotina'], ['bem-estar', 'Bem-estar'], ['apoio-lp', 'Apoio']];
let navKey = null;
function buildNav() {
  const w = WELLR(), al = !!SESS && SESS.role === 'aluno',
    bot = !SESS ? [] : al ? [['home', 'Início', 'home'], ['materias', 'Matérias', 'book'], ['humor', 'Meu Humor', 'heart'], ['apoio', 'Apoio', 'chat']] : [['home', 'Início', 'home'], ['materias', 'Matérias', 'book'], ...w.slice(0, 2)], ids = bot.map(x => x[0]);
  $('#topbar').innerHTML = LOGO + (!SESS ? `<nav class="lp-nav" aria-label="Seções da apresentação">${LP_NAV.map(([id, t]) => `<a href="#/" data-scroll="${id}">${t}</a>`).join('')}</nav><div class="acct"><a class="acct-btn" href="#/login">Entrar</a></div>` : SESS ? `<nav class="menu" aria-label="Menu principal">${NAV.map(([id, t, i]) => `<a href="#/${id}" data-nav="${id}">${ic(i)}<span>${t}</span></a>`).join('')}<div class="dd"><button class="dd-b" aria-haspopup="true" aria-expanded="false">${ic('clip')}<span>${al ? 'Serviços' : 'Equipe'}</span></button><ul class="dd-m">${w.map(([id, t, i]) => `<li><a href="#/${id}" data-nav="${id}">${ic(i)}${t}</a></li>`).join('')}</ul></div></nav><div class="acct"><span>${esc(SESS.nome)}</span><button type="button" data-act="sair">Sair</button></div>` : '');
  $('#bottom').innerHTML = SESS ? bot.map(([id, t, i]) => `<a href="#/${id === 'home' ? '' : id}" data-nav="${id}">${ic(i)}<span>${t}</span></a>`).join('') + `<button data-sheet aria-expanded="false">${ic('more')}<span>Mais</span></button>` : '';
  $('#sheet').innerHTML = SESS ? [...NAV, ...w].filter(x => !ids.includes(x[0])).map(([id, t, i]) => `<a href="#/${id}" data-nav="${id}">${ic(i)}${t}</a>`).join('') : '';
}

function route() {
  let r = location.hash.replace(/^#\/?/, '') || 'home';
  if (!SESS) r = r === 'login' ? 'login' : 'landing'; else if (!views[r] || !can(r)) r = 'home';
  if (SESS && (location.hash === '#/login' || location.hash === '#/landing')) history.replaceState(null, '', '#/');
  const nk = SESS ? SESS.id : ''; if (nk !== navKey) { navKey = nk; buildNav() }
  document.body.dataset.route = r;
  app.innerHTML = views[r]();
  document.querySelectorAll('[data-nav]').forEach(a => { const on = a.dataset.nav === r; a.classList.toggle('on', on); on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current') });
  document.title = `${titles[r]} – SENAC Escola`;
  if (r === 'comunicados') drawNews();
  if (window.afterRoute) afterRoute(r);
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', () => { state.area = null; state.sub = 0; route() });

document.addEventListener('click', e => {
  const b = e.target.closest('[data-area],[data-sub],[data-cat],[data-more]'); if (!b) return;
  const d = b.dataset;
  if ('area' in d) { state.area = d.area || null; state.sub = 0; route(); return }
  if ('sub' in d) { state.sub = +d.sub; route(); return }
  if ('cat' in d) { state.cat = d.cat; $('#cats').querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c.dataset.cat === d.cat)); drawNews(); return }
  if ('more' in d) { state.open[d.more] = !state.open[d.more]; drawNews() }
});
document.addEventListener('input', e => { if (e.target.id === 'q') { state.q = e.target.value; drawNews() } });
// Modo demonstração: sem CONFIG.API_URL, perfis e registros ficam no localStorage deste navegador (dados fictícios, sem autenticação real).
// Para uso real, preencha CONFIG.API_URL e implemente o backend (backend/README.md).
const CONFIG = { API_URL: '', MIN_RESPOSTAS: 5, RELATORIO: { dia: 'sexta-feira', hora: '18:30' }, MATERIAS: {}, CONTATO: { telefone: '(84) 4005-1000', email: 'senac.rn@gmail.com', endereco: 'Rua Doutor João Marcelino, 867 – Nova Betânia – CEP 59612‑012, ', atendimento: 'Segunda a sexta, das 7h às 17h' } };
let SESS = null;
// Registros pessoais são separados por perfil; só sessão, caixa de conversas e avaliações de turma (sem vínculo com conta) são compartilhados.
const SHARED = ['sess', 'inbox', 'turmaAval'], pk = k => SHARED.includes(k) || !SESS ? k : SESS.id + '.' + k;
const ld = (k, d) => { try { return JSON.parse(localStorage.getItem('senac.' + pk(k))) ?? d } catch { return d } };
const sv = (k, v) => { try { localStorage.setItem('senac.' + pk(k), JSON.stringify(v)); return true } catch { return false } };
const SESS_KEY = 'senac.sess';
{ let s = null; try { s = JSON.parse(sessionStorage.getItem(SESS_KEY)) } catch { } SESS = USERS.find(u => s && u.id === s.id) || null }
const saveSess = u => { try { u ? sessionStorage.setItem(SESS_KEY, JSON.stringify({ id: u.id })) : sessionStorage.removeItem(SESS_KEY) } catch { } };
const pad = n => String(n).padStart(2, '0');
const dk = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const wk = (d = new Date()) => { const x = new Date(d); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return dk(x) };
const br = k => k.split('-').reverse().join('/');
const fdt = t => new Date(t).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
// [boca da carinha (SVG), rótulo, cor]. As carinhas são desenhadas, no mesmo traço dos ícones.
const MOODS = [['M9.5 17.5q6.5 7.5 13 0', 'Muito feliz', '#8fd3a8'], ['M10.5 19q5.5 4 11 0', 'Bem', '#bfe3a6'], ['M11 20.5h10', 'Mais ou menos', '#f3e3a4'], ['M10.5 22q5.5-4 11 0', 'Triste', '#f5c9a3'], ['M10 23.5q6-6.5 12 0', 'Muito mal', '#eab0b0']];
const face = i => `<svg class="face" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13.5" fill="${MOODS[i][2]}" stroke="currentColor" stroke-width="1.6"/><circle cx="11.5" cy="13" r="1.7" fill="currentColor"/><circle cx="20.5" cy="13" r="1.7" fill="currentColor"/><path d="${MOODS[i][0]}" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`;
const OPT = ['Sempre', 'Na maioria das vezes', 'Às vezes', 'Raramente', 'Prefiro não responder'];
const LOCAL = `<p class="note">${ic('lock')}<span>Registro pessoal: só o seu perfil acessa estas informações.</span></p>`;
const radios = (n, o) => `<div class="opts" role="radiogroup">${o.map(x => `<label><input type="radio" name="${n}" value="${esc(x)}"><span>${x}</span></label>`).join('')}</div>`;
Object.assign(titles, { landing: 'Portal Escolar', login: 'Entrar', caixa: 'Conversas recebidas', painel: 'Avaliação das Turmas', humor: 'Meu Humor', apoio: 'Apoio Escolar', contato: 'Contato com Professores', semana: 'Minha Semana', turmas: 'Avaliação das Turmas', relatorios: 'Relatórios Semanais', roda: 'Roda da Vida Escolar' });

function humorHist() {
  const h = ld('humor', {}), ks = Object.keys(h).sort().reverse();
  if (!ks.length) return `<p class="empty">Você ainda não registrou nenhum dia. Quando registrar, seu histórico aparece aqui.</p>`;
  const days = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - 6 + i); return [d, h[dk(d)]] }), rec = days.filter(x => x[1]), c = [0, 0, 0, 0, 0]; rec.forEach(x => c[x[1].m]++);
  return `<div class="bars" role="img" aria-label="Humor dos últimos 7 dias">${days.map(([d, r]) => `<div><i style="height:${r ? (4 - r.m) * 20 + 28 : 8}px;background:${r ? MOODS[r.m][2] : '#dfe4eb'}"></i><span>${r ? face(r.m) : '–'}</span><small>${d.toLocaleDateString('pt-BR', { weekday: 'short' })}</small></div>`).join('')}</div>
  <p class="p">Últimos 7 dias: ${rec.length} registro(s). ${MOODS.map((m, i) => c[i] ? `${m[1]}: ${c[i]}` : '').filter(Boolean).join(' · ')}</p>
  <ul class="hist">${ks.slice(0, 14).map(k => `<li>${face(h[k].m)} <b>${br(k)}</b> ${MOODS[h[k].m][1]}${h[k].note ? ` — “${esc(h[k].note)}”` : ''}</li>`).join('')}</ul>`;
}
views.humor = () => {
  const r = ld('humor', {})[dk()];
  return `<h1 class="t">Meu Humor</h1><p class="sub">Como foi o seu dia na escola? Não existe resposta certa ou errada. Um lembrete aparece todos os dias a partir das 18h20.</p>${LOCAL}
 <section class="panel one"><h2 class="h2">${r ? 'Registro de hoje salvo.' : 'Como foi seu dia hoje?'}</h2>
 ${r ? `<p>Hoje você registrou ${face(r.m)} <b>${MOODS[r.m][1]}</b>. Se quiser conversar com alguém, o <a class="lnk" href="#/apoio">Apoio Escolar</a> está aqui.</p><button class="btn" data-act="redo">Alterar o registro de hoje</button>` :
      `<div class="moods" role="radiogroup" aria-label="Humor de hoje">${MOODS.map((m, i) => `<button type="button" class="mood" role="radio" aria-checked="false" data-mood="${i}" style="--c:${m[2]}">${face(i)}${m[1]}</button>`).join('')}</div>
 <label class="lbl">O que contribuiu para esse sentimento? (opcional)<textarea id="hn" rows="3" maxlength="300"></textarea></label>
 <button class="btn" id="hb" data-act="reg" disabled>Registrar meu humor</button><p id="hm" class="err" role="alert"></p>`}</section>
 <h2 class="h2">Meu histórico</h2>${humorHist()}`
};

const PROFS = [['alex', 'Alex'], ['jade', 'Jade'], ['jarnomio', 'Jarnomio'], ['daniel', 'Daniel'], ['mikael', 'Mikael'], ['jessica', 'Jessica'], ['yasmin', 'Yasmin'], ['jackson', 'Jackson'], ['victor-clynton', 'Victor Clynton'], ['thaina', 'Thainá'], ['lorena', 'Lorena']];
const PEOPLE = { psi: { nome: 'Sandy', cargo: 'Psicóloga escolar', funcao: 'Apoio psicológico e emocional aos estudantes no ambiente escolar.' }, ped: { nome: 'Evandilson', cargo: 'Pedagogo', funcao: 'Apoio pedagógico: aprendizagem, estudos e rotina escolar.' } };
const PRIV = 'Só você e o profissional desta conversa devem ter acesso às mensagens. A escola pode precisar agir se houver risco à sua segurança ou à de outras pessoas.';
const isProf = k => k.startsWith('prof:');
const who = k => isProf(k) ? { nome: PROFS.find(p => p[0] === k.slice(5))[1], cargo: 'Professor(a)' } : PEOPLE[k];
const materia = id => CONFIG.MATERIAS[id] || '—';
let chat = null;

function chatView() {
  const p = who(chat), turma = ld('turma', ''), back = `<button class="back" data-chat="">${ic('left')} Voltar</button>`;
  if (!turma) return `${back}<h1 class="t">Conversa com ${p.nome}</h1><div class="panel one"><p>Para começar, informe só a sua turma. Não pedimos nome completo, e-mail nem telefone.</p><p class="note">${ic('lock')}<span>${PRIV}</span></p><label class="lbl">Sua turma<input id="tu" maxlength="20" placeholder="Ex.: 2º ano A"></label><button class="btn" data-act="turma">Iniciar conversa</button><p id="hm" class="err" role="alert"></p></div>`;
  const ms = ld('chat.' + chat, []), abertura = isProf(chat) ? `Escreva sua dúvida para ${p.nome}: aulas, atividades ou tarefas.` : 'Olá! Este é um espaço de acolhimento. Você pode compartilhar sua dúvida ou contar o que está acontecendo no seu dia.';
  return `${back}<div class="chatbox"><div class="chh"><div><b>${p.nome} · ${p.cargo}</b><small>Conversa com a escola · Turma: ${esc(turma)} · <button class="lnk" data-act="troca">alterar turma</button></small></div></div>
 <div class="msgs" id="msgs" aria-live="polite"><div class="bub sys"><p>${abertura}</p><small>Mensagem automática do sistema</small></div>
 ${ms.map(m => `<div class="bub me"><p>${esc(m.t)}</p><small>${fdt(m.ts)} · ${m.st === 'sent' ? 'Enviada' : 'Registrada (demonstração)'}</small></div>`).join('')}
</div>
 <div class="send"><input id="mi" maxlength="500" placeholder="Escreva sua mensagem" aria-label="Mensagem"><button class="btn" data-act="send" aria-label="Enviar mensagem">${ic('send')}</button></div><p id="hm" class="err" role="alert"></p></div>`
}

views.apoio = () => chat && !isProf(chat) ? chatView() : `<h1 class="t">Apoio Escolar</h1><p class="sub">Escolha com quem você quer conversar. Você não precisa explicar o motivo antes.</p><div class="duo">${['psi', 'ped'].map(k => `<article><h2 class="h2">${PEOPLE[k].nome}</h2><p class="pn">${PEOPLE[k].cargo}</p><p>${PEOPLE[k].funcao}</p><button class="btn" data-chat="${k}">Conversar</button></article>`).join('')}</div>`;
views.contato = () => chat && isProf(chat) ? chatView() : `<h1 class="t">Contato com Professores</h1><p class="sub">Converse direto com cada professor sobre aulas, atividades e tarefas, sem passar pela coordenação.</p><table class="dir"><thead><tr><th scope="col">Professor(a)</th><th scope="col">Matéria</th><td></td></tr></thead><tbody>${PROFS.map(([id, n]) => `<tr><th scope="row">${n}</th><td>${materia(id)}</td><td><button class="btn" data-chat="prof:${id}">Conversar</button></td></tr>`).join('')}</tbody></table>`;
views.professores = () => `<h1 class="t">Professores</h1><p class="sub">Corpo docente da escola.</p><table class="dir"><thead><tr><th scope="col">Professor(a)</th><th scope="col">Matéria</th><td></td></tr></thead><tbody>${PROFS.map(([id, n]) => `<tr><th scope="row">${n}</th><td>${materia(id)}</td><td>${SESS.role === 'aluno' ? `<button class="lnk" data-go="prof:${id}">Conversar</button>` : ''}</td></tr>`).join('')}</tbody></table>`;
views.direcao = () => {
  const c = CONFIG.CONTATO, v = x => esc(x || 'Não cadastrado');
  return `<h1 class="t">Direção e equipe</h1><p class="sub">Coordenação e profissionais de apoio.</p>
 <table class="dir"><tbody><tr><th scope="row">Coordenadora</th><td>Tayna</td></tr><tr><th scope="row">Psicóloga escolar</th><td>Sandy</td></tr><tr><th scope="row">Pedagogo</th><td>Evandilson</td></tr><tr><th scope="row">Direção geral</th><td>—</td></tr></tbody></table>
 <h2 class="h2">Contato da escola</h2><ul class="contact"><li>${ic('phone')}${v(c.telefone)}</li><li>${ic('mail')}${v(c.email)}</li><li>${ic('pin')}${v(c.endereco)}</li><li>${ic('clock')}${v(c.atendimento)}</li></ul>`
};

async function sendMsg() {
  const i = $('#mi'), t = i.value.trim(); if (!t) return; const k = 'chat.' + chat, ms = ld(k, []), m = { t, ts: Date.now(), st: 'local' };
  if (CONFIG.API_URL) {
    const bt = $('[data-act=send]'); bt.disabled = true; bt.textContent = 'Enviando…';
    try { const r = await fetch(`${CONFIG.API_URL}/chats/${isProf(chat) ? 'prof/' + chat.slice(5) : chat}/messages`, { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ turma: ld('turma', ''), text: t }) }); if (!r.ok) throw 0; m.st = 'sent' }
    catch { bt.disabled = false; bt.innerHTML = ic('send'); return msg('Não foi possível enviar agora. Tente novamente.') }
  }
  ms.push(m); sv(k, ms);
  if (!CONFIG.API_URL) { const ib = ld('inbox', []); ib.push({ id: m.ts, canal: chat, turma: ld('turma', ''), t, ts: m.ts }); sv('inbox', ib) }
  route(); flash('Mensagem registrada.'); const x = $('#msgs'); x.scrollTop = x.scrollHeight; $('#mi').focus()
}

const SQ = [['Como você se sentiu na escola durante esta semana?', ['Muito bem', 'Bem', 'Mais ou menos', 'Mal', 'Muito mal', 'Prefiro não responder']], ['Você se sentiu acolhido pelos colegas?', OPT], ['Você se sentiu respeitado pelos professores e demais profissionais?', OPT], ['Você conseguiu acompanhar as atividades escolares?', OPT], ['Você teve dificuldades para fazer amizades ou participar das atividades?', OPT], ['Você se sentiu seguro e confortável no ambiente escolar?', OPT], ['O que poderia melhorar na sua próxima semana? (opcional)', null], ['Existe algo sobre o qual você gostaria de conversar com a psicóloga ou com o pedagogo?', ['Sim', 'Não', 'Prefiro não responder']]];
views.semana = () => {
  const s = ld('semana', {}), w = wk(), hs = Object.keys(s).sort().reverse();
  return `<h1 class="t">Minha Semana</h1><p class="sub">Um momento para pensar sobre a sua semana na escola. Só você vê estas respostas.</p>${LOCAL}
 <section class="panel one">${s[w] ? `<h2 class="h2">Avaliação desta semana enviada. Obrigado!</h2><p>Volte na próxima semana para responder de novo.${s[w].a[7] === 'Sim' ? ` Você marcou que quer conversar: <a class="lnk" href="#/apoio">abrir o Apoio Escolar</a>.` : ''}</p>` :
      `<h2 class="h2">Semana de ${br(w)}</h2>${SQ.map((q, i) => `<fieldset class="q"><legend>${i + 1}. ${q[0]}</legend>${q[1] ? radios('q' + i, q[1]) : `<textarea name="q${i}" rows="3" maxlength="400"></textarea>`}</fieldset>`).join('')}
 <p class="note">${ic('lock')}<span>Para falar com alguém da equipe, use o Apoio Escolar.</span></p><button class="btn" data-act="sem">Enviar avaliação semanal</button><p id="hm" class="err" role="alert"></p>`}</section>
 <h2 class="h2">Semanas anteriores</h2>${hs.length ? hs.map(k => `<details class="wk"><summary>Semana de ${br(k)}</summary><ul>${SQ.map((q, i) => `<li><b>${q[0]}</b><br>${esc(s[k].a[i] || 'Não respondida')}</li>`).join('')}</ul></details>`).join('') : `<p class="empty">Nenhuma avaliação enviada ainda.</p>`}`
};

const TQ = ['Como está o clima geral da sua turma?', 'Há respeito entre os colegas?', 'Você sente acolhimento na turma?', 'A convivência e a colaboração funcionam bem?', 'Você participa das atividades da turma?', 'Você percebe dificuldades de aprendizagem na turma?', 'Você se sente seguro no ambiente escolar?'];
views.turmas = () => `<h1 class="t">Avaliação das Turmas</h1><p class="sub">Ajude a escola a entender como a sua turma está. Você informa só a turma, não o nome.</p>
 <section class="panel one"><h2 class="h2">Responder pela minha turma</h2>
 <p class="note">${ic('lock')}<span>Esta resposta é separada do seu humor, da sua semana e das conversas de apoio. A equipe só vê resultados agregados da turma.</span></p>
 <label class="lbl">Sua turma<input id="tu" maxlength="20" placeholder="Ex.: 2º ano A" value="${esc(ld('turma', ''))}"></label>
 ${TQ.map((q, i) => `<fieldset class="q"><legend>${i + 1}. ${q}</legend>${radios('t' + i, OPT)}</fieldset>`).join('')}
 <label class="lbl">Sugestões de melhoria para a turma (opcional, não escreva nomes)<textarea id="ts" rows="3" maxlength="400"></textarea></label>
 <button class="btn" data-act="turmas">Enviar avaliação da turma</button><p id="hm" class="err" role="alert"></p></section>`;


let REL = [];
const ESC4 = OPT.slice(0, 4), COR = ['#16406a', '#4f7ba8', '#f3b27a', '#e07b1a'];
views.relatorios = () => `<h1 class="t">Relatórios Semanais</h1><p class="sub">Relatórios por turma e semana, a partir da Avaliação das Turmas (referência: ${CONFIG.RELATORIO.dia}, ${CONFIG.RELATORIO.hora}). Não incluem conversas nem registros individuais de humor.</p>
 <div class="filters"><label class="lbl">Turma<select id="ft"><option value="">Todas</option></select></label><label class="lbl">Semana<select id="fs"><option value="">Todas</option></select></label></div><div id="rel"><p class="p">Carregando…</p></div><div id="reld"></div>`;
async function loadReports() {
  const box = $('#rel');
  try {
    if (CONFIG.API_URL) {
      const x = await fetch(`${CONFIG.API_URL}/relatorios`, { credentials: 'include' });
      if (x.status === 401 || x.status === 403) return box.innerHTML = '<p class="err">Faça login como equipe autorizada para ver os relatórios.</p>'; if (!x.ok) throw 0;
      REL = await x.json()
    } else REL = localReports(); const fill = (id, vals) => $(id).insertAdjacentHTML('beforeend', [...new Set(vals)].sort().map(v => `<option>${esc(v)}</option>`).join(''));
    fill('#ft', REL.map(r => r.turma)); fill('#fs', REL.map(r => r.semana)); $('#ft').onchange = $('#fs').onchange = drawReports; drawReports()
  }
  catch { box.innerHTML = '<p class="err">Não foi possível carregar os relatórios.</p>' }
}
function drawReports() {
  const t = $('#ft').value, w = $('#fs').value, l = REL.filter(r => (!t || r.turma === t) && (!w || r.semana === w));
  $('#rel').innerHTML = l.length ? `<table class="dir"><thead><tr><th>Turma</th><th>Semana de</th><th>Respostas válidas</th><th>Gerado em</th><td></td></tr></thead><tbody>${l.map(r => `<tr><th scope="row">${esc(r.turma)}${r.exemplo ? ' <span class="tag">Exemplo</span>' : ''}</th><td>${br(r.semana)}</td><td>${r.suprimido ? 'Insuficientes' : r.respostasValidas}</td><td>${fdt(r.geradoEm)}</td><td><button class="lnk" data-rel="${esc(r.id)}">Abrir</button></td></tr>`).join('')}</tbody></table>` : '<p class="empty">Nenhum relatório para este filtro.</p>'
}
async function openReport(id) {
  const d = $('#reld'); d.innerHTML = '<p class="p">Carregando…</p>';
  try {
    let r; if (CONFIG.API_URL) { const x = await fetch(`${CONFIG.API_URL}/relatorios/${encodeURIComponent(id)}`, { credentials: 'include' }); if (!x.ok) throw 0; r = await x.json() } else r = REL.find(q => q.id === id); if (!r) throw 0;
    if (r.suprimido) { d.innerHTML = `<h2 class="h2">${esc(r.turma)}</h2><p class="note warn">${ic('alert')}<span>${esc(r.motivo)}</span></p>`; return }
    d.innerHTML = `<h2 class="h2">${r.exemplo ? '<span class="tag">Exemplo fictício</span><br>' : ''}Turma ${esc(r.turma)}: semana de ${br(r.periodo.inicio)} a ${br(r.periodo.fim)}</h2>
  <p class="p">Gerado em ${fdt(r.geradoEm)} · ${r.respostasValidas} respostas válidas · Participação: ${r.participacao == null ? 'não calculada' : r.participacao + '%'}</p>
  <p>${esc(r.resumo)}</p>
  <table class="dir"><thead><tr><th>Aspecto</th><th>Distribuição das respostas</th><th>Respostas</th></tr></thead><tbody>${r.itens.map(it => `<tr><th scope="row">${esc(it.nome)}</th><td><div class="stack" role="img" aria-label="${ESC4.map(o => o + ' ' + (it.percentual[o] ?? 0) + '%').join(', ')}">${ESC4.map((o, i) => `<i style="width:${it.percentual[o] || 0}%;background:${COR[i]}"></i>`).join('')}</div></td><td>${it.total}</td></tr>`).join('')}</tbody></table>
  <p class="legend">${ESC4.map((o, i) => `<span><b style="background:${COR[i]}"></b>${o}</span>`).join('')}</p>
  ${r.sugestoesDeMelhoria.length ? `<h3 class="h3">Sugestões para avaliação da equipe</h3><ul class="bul">${r.sugestoesDeMelhoria.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
  <h3 class="h3">Limitações</h3><ul class="bul">${r.limitacoes.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
  <p>${CONFIG.API_URL ? `<a class="lnk" href="${CONFIG.API_URL}/relatorios/${encodeURIComponent(id)}?formato=csv">Exportar CSV</a>` : `<button class="lnk" data-csv="${esc(id)}">Exportar CSV</button>`} · <button class="lnk" onclick="window.print()">Imprimir</button></p>`
  }
  catch { d.innerHTML = '<p class="err">Não foi possível abrir o relatório.</p>' }
}
let sel = null;
const msg = t => { const e = $('#hm'); if (e) e.textContent = t };
document.addEventListener('click', async e => {
  const b = e.target.closest('[data-mood],[data-act],[data-chat],[data-go],[data-rel],[data-csv],[data-tipo],[data-sheet],.dd-b'); if (!b) return; const d = b.dataset;
  if (b.classList.contains('dd-b')) { const o = b.parentNode.classList.toggle('open'); b.setAttribute('aria-expanded', o); return }
  if ('sheet' in d) { const o = $('#sheet').classList.toggle('open'); b.setAttribute('aria-expanded', o); return }
  if ('rel' in d) { openReport(d.rel); return }
  if ('tipo' in d) { loginTipo = d.tipo; route(); return }
  if ('csv' in d) { const r = REL.find(q => q.id === d.csv); if (r) { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['\ufeff' + Relatorios.paraCSV(r)], { type: 'text/csv' })); a.download = r.id + '.csv'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); flash('CSV gerado.') } return }
  if ('go' in d) { chat = d.go; if (location.hash === '#/contato') route(); else location.hash = '#/contato'; return }
  if ('chat' in d) { chat = d.chat || null; route(); return }
  if ('mood' in d) { sel = +d.mood; document.querySelectorAll('.mood').forEach(x => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-checked', on) }); $('#hb').disabled = false; return }
  switch (d.act) {
    case 'reg': { const h = ld('humor', {}); h[dk()] = { m: sel, note: $('#hn').value.trim(), ts: Date.now() }; if (!sv('humor', h)) return msg('Não foi possível salvar neste navegador.'); $('#toast').hidden = true; route(); flash('Humor de hoje registrado.'); break }
    case 'redo': { const h = ld('humor', {}); delete h[dk()]; sv('humor', h); route(); break }
    case 'turma': { const v = $('#tu').value.trim(); if (!v) return msg('Informe a sua turma para continuar.'); sv('turma', v); route(); break }
    case 'troca': sv('turma', ''); route(); break;
    case 'sair': { SESS = null; saveSess(null); chat = null; roda.v = RODA_AREAS.map(() => RODA_INICIO); roda.done = false; location.hash = '#/login'; route(); flash('Você saiu da conta.'); break }
    case 'send': sendMsg(); break;
    case 'sem': {
      const a = SQ.map((q, i) => q[1] ? (document.querySelector(`input[name=q${i}]:checked`) || {}).value || '' : document.querySelector(`[name=q${i}]`).value.trim());
      if (!a.some(Boolean)) return msg('Responda pelo menos uma pergunta, ou volte quando preferir.'); const s = ld('semana', {}); s[wk()] = { a, ts: Date.now() }; sv('semana', s); route(); flash('Avaliação semanal salva.'); break
    }
    case 'turmas': {
      const tu = $('#tu').value.trim(), r = TQ.map((q, i) => (document.querySelector(`input[name=t${i}]:checked`) || {}).value || '');
      if (!tu) return msg('Informe a turma.'); if (!r.some(Boolean)) return msg('Responda pelo menos uma pergunta.');
      const rec = { turma: tu, semana: wk(), respostas: r, sugestao: $('#ts').value.trim() }; sv('turma', tu);
      const ok = () => { $('.panel.one').innerHTML = '<h2 class="h2">Avaliação registrada. Obrigado por ajudar a sua turma!</h2><p>Sua resposta não leva o seu nome.</p>'; flash('Avaliação da turma registrada.') };
      if (!CONFIG.API_URL) { const l = ld('turmaAval', []); l.push({ ...rec, ts: Date.now() }); if (!sv('turmaAval', l)) return msg('Não foi possível salvar neste navegador.'); ok(); break }
      try { const x = await fetch(`${CONFIG.API_URL}/turmas/avaliacoes`, { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(rec) }); if (!x.ok) throw 0; ok() } catch { msg('Não foi possível enviar agora. Tente novamente.') }
    }
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.id === 'mi') { e.preventDefault(); sendMsg() } if (e.key === 'Escape') { document.querySelectorAll('.dd.open').forEach(x => x.classList.remove('open')); $('#sheet').classList.remove('open') } });

document.body.insertAdjacentHTML('beforeend', `<div id="toast" class="toast" role="status" hidden><p><b>Como foi seu dia hoje?</b><br>Reserve um minutinho para registrar como você está.</p><a class="btn" href="#/humor">Registrar agora</a><button class="lnk" id="tx">Agora não</button></div>
 <div id="flash" class="flash" role="status" hidden></div><div id="sheet" class="sheet"></div>`);
let dismissed = '';
const checkInvite = () => {
  if (!SESS || SESS.role !== 'aluno' || location.hash === '#/humor') { $('#toast').hidden = true; return } const n = new Date(), after = n.getHours() * 60 + n.getMinutes() >= 1100;
  if (after && !ld('humor', {})[dk()] && dismissed !== dk() && location.hash !== '#/humor') $('#toast').hidden = false
};
$('#tx').onclick = () => { dismissed = dk(); $('#toast').hidden = true };
setInterval(checkInvite, 30000);
window.afterRoute = r => {
  const dd = $('.dd-b'), sh = document.querySelector('[data-sheet]');
  if (dd) dd.classList.toggle('on', WELLR().some(w => w[0] === r));
  document.querySelectorAll('.dd.open').forEach(x => x.classList.remove('open')); $('#sheet').classList.remove('open');
  if (sh) { sh.setAttribute('aria-expanded', 'false'); sh.classList.toggle('on', !!document.querySelector('#sheet a.on')) }
  if (r !== 'apoio' && r !== 'contato') chat = null; if (r === 'relatorios') loadReports(); checkInvite(); reveal()
};
// Entradas: cada parte aparece uma vez, ao entrar na tela. Sem IntersectionObserver, tudo já aparece.
let io = null;
function reveal() {
  const els = document.querySelectorAll('[data-reveal],[data-io]');
  if (!('IntersectionObserver' in window)) { els.forEach(x => x.classList.add('is-in')); return }
  if (io) io.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) } }), { rootMargin: '0px 0px -10% 0px', threshold: .12 });
  els.forEach(x => io.observe(x));
}
// ===== Roda da Vida Escolar =====
// Ferramenta de reflexão pessoal. As notas ficam só na memória desta página (não há armazenamento seguro):
// nada é salvo nem enviado, e elas se perdem ao recarregar ou fechar o site.
const RODA_AREAS = [
  { n: 'Aprendizagem', d: 'Compreensão dos conteúdos e desenvolvimento dos conhecimentos.', s: ['Escolha um conteúdo que ficou confuso e anote duas dúvidas concretas para levar ao professor.', 'Estude em blocos curtos (20 a 25 minutos) com pequenas pausas, em vez de uma sessão longa.', 'Explique o assunto com as suas palavras, em voz alta ou para um colega: onde travar mostra o que revisar.'] },
  { n: 'Organização dos estudos', d: 'Organização de tarefas, provas e trabalhos.', s: ['Monte uma lista semanal com as datas de provas e entregas (os Comunicados e os Horários ajudam).', 'Divida trabalhos grandes em etapas pequenas, com uma data para cada uma.', 'Reserve horários fixos de estudo, mesmo que curtos, e comece pela tarefa mais próxima do prazo.'] },
  { n: 'Motivação escolar', d: 'Disposição para participar das atividades e aprender.', s: ['Defina uma meta pequena para esta semana e marque quando cumpri-la.', 'Procure ligar um conteúdo a algo de que você gosta ou a algo da sua vida.', 'Combine de estudar com um colega em um assunto mais difícil: dividir costuma ajudar.'] },
  { n: 'Relacionamento com colegas', d: 'Convivência, amizades e respeito.', s: ['Puxe uma conversa curta com um colega em uma atividade em grupo ou no intervalo.', 'Se houve um desentendimento, tente conversar com calma ou peça a alguém da escola para ajudar a mediar.', 'Participe de uma atividade coletiva que lhe interesse, para conviver em torno de algo em comum.'] },
  { n: 'Relacionamento com professores', d: 'Comunicação, confiança e facilidade para pedir ajuda.', s: ['Prepare uma pergunta curta e faça no começo ou no fim da aula.', 'Use a página Contato com Professores para tirar dúvidas sobre aulas e tarefas.', 'Se for difícil falar, escreva antes o que quer dizer: isso ajuda a organizar a conversa.'] },
  { n: 'Bem-estar emocional', d: 'Como você se sente emocionalmente no ambiente escolar.', s: ['Use o Meu Humor por alguns dias para perceber o que ajuda e o que pesa na sua rotina.', 'Inclua pequenas pausas e algo de que você goste entre as tarefas.', 'Conversar com alguém de confiança ou com o Apoio Escolar pode aliviar. Você não precisa explicar o motivo antes.'] },
  { n: 'Pertencimento à escola', d: 'Sensação de acolhimento, respeito e inclusão.', s: ['Procure um grupo, projeto ou atividade em que a sua participação faça diferença.', 'Se algo faz você se sentir de fora, conte a alguém de confiança na escola.', 'Use a Avaliação das Turmas para dar sugestões sobre o ambiente, sem citar nomes.'] },
  { n: 'Participação escolar', d: 'Envolvimento nas aulas, nos projetos e nas atividades.', s: ['Comece com uma meta pequena: uma pergunta ou comentário por aula.', 'Ofereça-se para uma tarefa simples em um trabalho em grupo.', 'Pergunte aos professores sobre projetos e atividades em que você possa entrar.'] },
  { n: 'Equilíbrio entre estudos e vida pessoal', d: 'Conciliação entre escola, descanso, lazer e outras responsabilidades.', s: ['Reserve na semana um horário só para descanso ou lazer e proteja esse horário.', 'Veja se alguma tarefa pode ser feita em outro momento, para distribuir melhor a carga.', 'Se estiver sobrecarregado, converse com a equipe pelo Apoio Escolar para buscar uma rotina mais leve.'] },
  { n: 'Apoio escolar', d: 'Conhecimento dos recursos e das pessoas que podem ajudar em momentos de dificuldade.', s: ['Veja a página Direção para saber quem faz parte da equipe e o que cada pessoa faz.', 'Anote duas pessoas da escola que você procuraria se precisasse de ajuda.', 'Conheça o Apoio Escolar e o Contato com Professores antes de precisar: saber onde ir já traz segurança.'] }
];
const RODA_INICIO = 5;
let roda = { v: RODA_AREAS.map(() => RODA_INICIO), done: false };

// vals: notas a desenhar (padrão: as da página da Roda). sel >= 0: modo demonstração da apresentação,
// com a área escolhida destacada e as fatias clicáveis.
function rodaSvg(vals = roda.v, sel = -1) {
  const C = 220, R = 170, N = RODA_AREAS.length, st = 360 / N, f = x => x.toFixed(1),
    pt = (r, a) => { const t = (a - 90) * Math.PI / 180; return [f(C + r * Math.cos(t)), f(C + r * Math.sin(t))] };
  let g = '';
  for (let k = 2; k <= 10; k += 2)g += `<circle cx="${C}" cy="${C}" r="${R * k / 10}" fill="none" stroke="#dfe4eb"/>`;
  for (let i = 0; i < N; i++) { const [x, y] = pt(R, i * st); g += `<line x1="${C}" y1="${C}" x2="${x}" y2="${y}" stroke="#dfe4eb"/>` }
  RODA_AREAS.forEach((a, i) => {
    const v = vals[i], r = R * v / 10, p0 = pt(r, i * st + .8), p1 = pt(r, (i + 1) * st - .8), m = (i + .5) * st,
      [tx, ty] = v >= 3 ? pt(r - 15, m) : pt(r + 14, m), [bx, by] = pt(R + 22, m), on = i === sel, dim = sel >= 0 && !on,
      hit = sel >= 0 ? ` data-rd-i="${i}"` : '';
    g += `<g${hit}><path d="M${C} ${C}L${p0[0]} ${p0[1]}A${f(r)} ${f(r)} 0 0 1 ${p1[0]} ${p1[1]}Z" fill="${on ? '#f58220' : i % 2 ? '#4f7ba8' : '#16406a'}" opacity="${dim ? .85 : 1}" stroke="#fff" stroke-width="1.5"><title>${i + 1}. ${a.n}: ${v} de 10</title></path>
   <text x="${tx}" y="${ty}" text-anchor="middle" dy=".35em" font-size="15" font-weight="700" fill="${v >= 3 ? (on ? '#0c2944' : '#fff') : '#16406a'}">${v}</text>
   <circle cx="${bx}" cy="${by}" r="${on ? 14 : 11}" fill="${on ? '#0c2944' : '#f58220'}"/><text x="${bx}" y="${by}" text-anchor="middle" dy=".35em" font-size="12" font-weight="700" fill="${on ? '#fff' : '#0c2944'}">${i + 1}</text></g>`
  });
  const lbl = RODA_AREAS.map((a, i) => `${a.n} ${vals[i]}`).join(', ');
  return `<svg viewBox="0 0 440 440" role="img" aria-label="Roda da vida escolar. Notas de 1 a 10: ${lbl}.">${g}</svg>`
}

views.roda = () => {
  const head = `<h1 class="t">Roda da Vida Escolar</h1><p class="sub">Esta é uma oportunidade para refletir sobre como você está se sentindo em diferentes áreas da sua vida e como está sendo sua experiência na escola. Avalie cada área com sinceridade. Não existem respostas certas ou erradas.</p>
 <p class="note">${ic('lock')}<span>Esta ferramenta é para a <b>sua reflexão pessoal</b> sobre a experiência na escola. Não é um teste, não gera diagnóstico e não compara estudantes. Suas notas ficam <b>só nesta página, enquanto o site estiver aberto</b>: não são salvas nem enviadas a professores, colegas ou à equipe, e se perdem ao recarregar ou fechar. Você pode refazer a avaliação quando quiser.</span></p>`;
  const fig = `<div class="roda-fig"><div id="rsvg">${rodaSvg()}</div><p class="p">Cada fatia é uma área, numerada de 1 a 10. Quanto maior a fatia, maior a nota.</p></div>`;
  if (!roda.done) return head + `<div class="roda">${fig}<section class="roda-ctl"><h2 class="h2" id="rh" tabindex="-1">Dê uma nota de 1 a 10 para cada área</h2>
  ${RODA_AREAS.map((a, i) => `<div class="ra"><label for="ra${i}"><span>${i + 1}. ${a.n}</span><small>${a.d}</small></label><div class="row"><input type="range" id="ra${i}" min="1" max="10" step="1" value="${roda.v[i]}" data-roda="${i}"><output id="ro${i}" for="ra${i}">${roda.v[i]}</output></div></div>`).join('')}
  <div class="rbtns"><button class="btn" data-ra="fim">Concluir avaliação</button><button class="btn sec" data-ra="zero">Redefinir respostas</button></div></section></div>`;
  const ord = RODA_AREAS.map((a, i) => ({ ...a, i, v: roda.v[i] })),
    bem = ord.filter(x => x.v >= 7).sort((a, b) => b.v - a.v), meio = ord.filter(x => x.v === 6), des = ord.filter(x => x.v <= 5).sort((a, b) => a.v - b.v),
    li = x => `<li><b>${x.n}</b> (${x.v})</li>`, foco = des.slice(0, 3);
  return head + `<div class="roda">${fig}<section class="roda-ctl rsum"><h2 class="h2" id="rh" tabindex="-1">Seu resumo</h2>
  <p>Este resumo reflete só o que você marcou agora. Notas mais baixas não são fracasso: mostram onde pode valer a pena dar mais atenção, no seu ritmo.</p>
  <h3 class="h3">Áreas que você avaliou positivamente</h3>${bem.length ? `<ul class="bul">${bem.map(li).join('')}</ul>` : '<p class="p">Nenhuma área ficou com nota 7 ou mais desta vez. Tudo bem: isso diz como você se sente hoje, não quem você é.</p>'}
  ${meio.length ? `<h3 class="h3">No meio do caminho</h3><ul class="bul">${meio.map(li).join('')}</ul>` : ''}
  <h3 class="h3">Áreas que você gostaria de desenvolver</h3>${des.length ? `<ul class="bul">${des.map(li).join('')}</ul>
  <h3 class="h3">Sugestões práticas</h3><p class="p">${des.length > 3 ? 'Para não sobrecarregar, comece por uma ou duas das áreas abaixo (as de menor nota). ' : 'Escolha uma ideia para começar, em vez de tentar fazer tudo de uma vez. '}</p>
  ${foco.map(x => `<h4 class="h4">${x.n}</h4><ul class="bul">${RODA_AREAS[x.i].s.map(t => `<li>${t}</li>`).join('')}</ul>`).join('')}` : '<p class="p">Nenhuma área ficou com nota 5 ou menos. Que tal manter o que está funcionando e voltar a esta avaliação mais adiante, para ver o que mudou?</p>'}
  <p class="note">${ic('chat')}<span>Se algo estiver pesando, você pode conversar com a equipe pelo <a class="lnk" href="#/apoio">Apoio Escolar</a> ou tirar dúvidas de aulas em <a class="lnk" href="#/contato">Contato com Professores</a>. Este resumo não foi enviado a ninguém.</span></p>
  <div class="rbtns"><button class="btn" data-ra="zero">Refazer avaliação</button><button class="btn sec" data-ra="ajustar">Ajustar minhas notas</button></div></section></div>`};

document.addEventListener('input', e => {
  const t = e.target; if (!t.dataset || t.dataset.roda === undefined) return;
  const i = +t.dataset.roda; roda.v[i] = +t.value; const o = document.getElementById('ro' + i); if (o) o.textContent = t.value; const s = $('#rsvg'); if (s) s.innerHTML = rodaSvg()
});
document.addEventListener('click', e => {
  const b = e.target.closest('[data-ra]'); if (!b) return; const a = b.dataset.ra;
  if (a === 'fim') roda.done = true; else if (a === 'zero') { roda.v = RODA_AREAS.map(() => RODA_INICIO); roda.done = false } else if (a === 'ajustar') roda.done = false;
  route(); const h = document.getElementById('rh'); if (h) h.focus({ preventScroll: true })
});
// ===== Apresentação pública e login demonstrativo =====
// Fotos: ficam em imagens/ (veja imagens/LEIA-ME.txt). São fotos livres de outras escolas, com crédito no rodapé,
// até a escola pôr as próprias com o mesmo nome de arquivo. Se uma faltar, aparece a ilustração provisória.
const IMG = (n, alt, o = {}) => `<img src="imagens/${n}.jpg" alt="${alt}" width="1280" height="853"${o.cls ? ` class="${o.cls}"` : ''} ${o.eager ? 'fetchpriority="high"' : o.lazy === false ? '' : 'loading="lazy"'} decoding="async" onerror="this.onerror=null;this.src='imagens/hero-placeholder.svg'">`;
const CREDITOS = [
  ['Caderno escolar', 'Santeri Viinamäki', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:School_exercise_book_20180225.jpg'],
  ['Planejamento com cadernos e lápis', 'Shixart1985', 'CC BY 2.0', 'https://commons.wikimedia.org/wiki/File:Working_on_a_planning_session_with_stationery_items,_notebook,_and_colorful_pencils_on_a_wooden_desk.jpg'],
  ['Sala de aula da Chokai JHS', 'Douglas P Perkins', 'CC BY 3.0', 'https://commons.wikimedia.org/wiki/File:Chokai_JHS_2B_classroom_2.jpg'],
  ['Sala de aula da Escola Técnica de Paulínia', 'Alebasi24', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/w/index.php?curid=97291149'],
  ['Corredor da Robert E. Bell School', 'Htetrasme', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Corridor_in_Robert_E._Bell_school,_1990s.jpg'],
  ['Biblioteca da Sias University', 'Gary Todd', 'CC0', 'https://commons.wikimedia.org/wiki/File:Sias_Library_-_Students_Studying_2017.jpg'],
  ['Mesa de estudo', 'Governo das Ilhas Virgens Americanas', 'domínio público', 'https://commons.wikimedia.org/wiki/File:USVI_IMG_5204_-_Minimalist_desk_with_a_wooden_lamp_stand_a_notebook_pencils_in_a_cup_and_a_small_black_device.jpg'],
  ['Prova escrita em sala de aula', 'Alison Wood', 'CC BY 3.0', 'https://commons.wikimedia.org/w/index.php?curid=31443109']
];
// Rotina: cada item troca a foto, a cor do bloco e o fato ao lado. Os fatos vêm dos dados do próprio portal.
const SHOW = [
  ['Matérias', 'materias', '#f58220', 'Quatro áreas, oito disciplinas', 'Conteúdos, atividades, materiais e tarefas de Linguagens, Matemática, Natureza e Humanas.', 'Caderno escolar azul sobre uma mesa'],
  ['Comunicados', 'comunicados', '#005594', 'Reunião de pais: 15/08, 19h', 'Avisos com data, categoria e busca. A reunião é no auditório.', 'Caderno aberto e lápis coloridos sobre uma mesa de madeira'],
  ['Horários', 'horarios', '#16406a', 'Seis aulas, das 7h30 às 12h50', 'A grade da manhã, de segunda a sexta, com intervalo das 9h10 às 9h30.', 'Sala de aula vazia, com carteiras enfileiradas diante da lousa'],
  ['Professores', 'professores', '#f58220', 'Onze professores', 'Conversa direta com cada um sobre aulas, atividades e tarefas.', 'Lousa escrita numa sala de aula, vista do fundo da sala'],
  ['Direção', 'direcao', '#f6bf86', 'Quem é quem', 'Coordenação, psicóloga, pedagogo e os contatos da escola.', 'Corredor de escola com armários dos dois lados']
];
const CARE = [
  ['Meu Humor', 'Registre como foi o dia em um toque. Um lembrete aparece a partir das 18h20.'],
  ['Minha Semana', 'Oito perguntas curtas sobre a semana. Só você vê as respostas.'],
  ['Roda da Vida Escolar', 'Dez áreas, notas de 1 a 10 e sugestões práticas para as mais baixas.'],
  ['Histórico de 7 dias', 'Veja como o seu humor mudou ao longo da semana.'],
  ['Registro pessoal', 'Humor e semana ficam no seu perfil, separados das conversas.'],
  ['Avaliação das Turmas', 'Você informa só a turma, nunca o nome.'],
  ['Sem diagnóstico', 'A Roda não é teste e não compara estudantes.'],
  ['Conversa quando quiser', 'Marcou que quer conversar? O Apoio Escolar fica a um toque.'],
  ['Relatórios por turma', 'A equipe vê só resultados coletivos, com no mínimo 5 respostas.']
];
const MARK = `<img src="imagens/senac-negativo.svg" alt="SENAC" width="653" height="383">`;
let demo = { v: [7, 5, 8, 6, 4, 6, 7, 5, 6, 8], i: 0 }, show = 0;
const demoCtl = () => {
  const a = RODA_AREAS[demo.i]; return `<p class="rd-k">Roda da Vida Escolar · área ${demo.i + 1} de ${RODA_AREAS.length}</p><h2 class="rd-n" id="rdn">${a.n}</h2><p class="rd-d">${a.d}</p>
 <label class="rd-l" for="rdr">Sua nota para esta área</label><div class="row"><input type="range" id="rdr" min="1" max="10" step="1" value="${demo.v[demo.i]}" data-rd-range><output id="rdo" for="rdr">${demo.v[demo.i]}</output></div>
 <div class="rd-nav"><button type="button" data-rd="-1">${ic('left')} Anterior</button><button type="button" data-rd="1">Próxima ${ic('arrow')}</button></div>`
};
views.landing = () => `<div class="lp">
<section class="lp-hero" aria-labelledby="lh">
 <h1 id="lh" class="lines"><span class="line"><span data-line style="--i:0">Seu dia na escola,</span></span><span class="line"><span data-line style="--i:1">num só lugar.</span></span></h1>
 <div class="lp-hero-txt">
  <p data-rise style="--i:2">Matérias, comunicados, horários e as pessoas que cuidam de você, no portal do aluno do SENAC.</p>
  <a class="btn hot btn-lg" data-rise style="--i:3" href="#/login">Entrar na minha conta ${ic('arrow')}</a>
  <p class="lp-hint" data-rise style="--i:4">Ao lado, a Roda da Vida Escolar de verdade: escolha uma área e dê uma nota. Nada é salvo nem enviado.</p>
 </div>
 <div class="stage"><span class="stage-stripe" aria-hidden="true"></span>
  <div class="rd" data-ui><div class="rd-wheel" id="rdw">${rodaSvg(demo.v, demo.i)}</div><div class="rd-ctl" id="rdc">${demoCtl()}</div></div>
 </div>
</section>

<section class="lp-show" id="rotina" aria-labelledby="sh">
 <div class="show-col"><h2 id="sh">Sua rotina</h2>
  <div class="show-list" role="tablist" aria-label="Partes da rotina">${SHOW.map((s, k) => `<button type="button" role="tab" id="st${k}" aria-controls="sp" aria-selected="${k === show}" data-show="${k}">${s[0]}</button>`).join('')}</div></div>
 <div class="show-stage" data-io id="sp" role="tabpanel" aria-labelledby="st${show}" style="--sc:${SHOW[show][2]}"><div class="show-block"></div>
  <figure class="show-pic shutter">${SHOW.map((s, k) => IMG('rotina-' + s[1], s[5], { cls: k === show ? 'on' : '', lazy: false })).join('')}</figure></div>
 <p class="show-fact" id="sf" aria-live="polite"><b>${SHOW[show][3]}</b>${SHOW[show][4]}</p>
</section>

<section class="lp-care" id="bem-estar" aria-labelledby="ch">
 <figure class="care-pic">${IMG('bem-estar', 'Estudantes lendo e estudando numa biblioteca ampla e iluminada')}</figure>
 <div class="care-txt"><h2 id="ch" data-reveal>Como você está?</h2>
  <p data-reveal style="--i:1">O portal pergunta, com calma, e guarda só para você. Quando precisar, a equipe está a um toque.</p>
  <ul class="points">${CARE.map(([t, d], k) => `<li data-reveal style="--i:${2 + k % 3}"><h3><i aria-hidden="true"></i>${t}</h3><p>${d}</p></li>`).join('')}</ul></div>
</section>

<section class="lp-apoio" id="apoio-lp" aria-labelledby="ah"><div class="apoio-in">
 <h2 id="ah" data-reveal>Alguém para<br>conversar.</h2>
 <figure class="apoio-pic">${IMG('apoio', 'Mesa de estudo tranquila, com luminária, caderno e lápis num copo')}</figure>
 <div class="apoio-txt">
  <article data-reveal style="--i:1"><h3>Sandy<span>Psicóloga escolar</span></h3><p>${PEOPLE.psi.funcao} Você não precisa explicar o motivo antes de começar.</p></article>
  <article data-reveal style="--i:2"><h3>Evandilson<span>Pedagogo</span></h3><p>${PEOPLE.ped.funcao} E, para dúvidas de aula, os onze professores atendem pelo portal.</p></article>
  <p class="apoio-priv" data-reveal style="--i:3">Só você e o profissional da conversa leem as mensagens. A escola só age se houver risco à sua segurança ou à de outras pessoas.</p>
  <a class="btn hot" href="#/login" data-reveal style="--i:4">Entrar para conversar ${ic('arrow')}</a>
 </div></div>
</section>

<section class="lp-cta" aria-label="Entrar no portal">
 <form id="cf" class="cta-s" novalidate><label for="ce">Digite seu Gmail</label>
  <span class="l2"><input id="ce" type="email" placeholder="você@gmail.com" autocomplete="email" inputmode="email" autocapitalize="none" spellcheck="false"> e <button type="submit">entre.</button></span></form>
 <p>Você vai para a tela de acesso com o Gmail já preenchido. A senha é pedida lá, e nunca fica salva no navegador.</p>
</section>

<footer class="lp-foot">
 <div class="foot-mark">${MARK}<b>Escola</b></div>
 <div class="foot-cols">
  <nav aria-label="Rodapé"><ul><li><b>Rotina</b></li>${SHOW.slice(0, 3).map(s => `<li><a href="#/" data-scroll="rotina">${s[0]}</a></li>`).join('')}</ul>
   <ul><li><b>Pessoas</b></li><li><a href="#/" data-scroll="rotina">Professores</a></li><li><a href="#/" data-scroll="rotina">Direção</a></li><li><a href="#/" data-scroll="apoio-lp">Apoio Escolar</a></li></ul>
   <ul><li><b>Bem-estar</b></li><li><a href="#/" data-scroll="bem-estar">Meu Humor</a></li><li><a href="#/" data-scroll="bem-estar">Minha Semana</a></li><li><a href="#/" data-scroll="bem-estar">Roda da Vida</a></li></ul>
   <ul><li><b>Conta</b></li><li><a href="#/login">Entrar</a></li></ul></nav>
  <address>${esc(CONFIG.CONTATO.endereco)}<br>${esc(CONFIG.CONTATO.telefone)} · ${esc(CONFIG.CONTATO.email)}<br>${esc(CONFIG.CONTATO.atendimento)}</address>
 </div>
 <div class="foot-last"><span>SENAC Escola · projeto demonstrativo, dados fictícios</span><a class="btn hot" href="#/login">Entrar</a></div>
 <p class="credits">Fotos de outras escolas, usadas como ambientação até a escola pôr as próprias: ${CREDITOS.map(([t, a, l, u]) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>, ${a} (${l})`).join('; ')}. Via Wikimedia Commons.</p>
</footer>
</div>`;

let pwdShown = false;
views.login = () => {
  pwdShown = false; let pre = ''; try { pre = sessionStorage.getItem('senac.pre') || ''; sessionStorage.removeItem('senac.pre') } catch { }
  return `<div class="login"><div><a class="back" href="#/">${ic('left')} Voltar à apresentação</a><h1 class="t">Entrar</h1><p class="sub">Acesse o portal com o seu Gmail e a sua senha.</p>
 <form id="lf" class="panel one" autocomplete="on"><label class="lbl">Gmail<input id="lu" type="email" required autocomplete="email" inputmode="email" autocapitalize="none" spellcheck="false" value="${esc(pre)}"></label>
 <label class="lbl" for="lp">Senha</label><div class="pw"><input id="lp" type="password" required autocomplete="current-password"><button type="button" class="pw-b" data-act="ver" aria-pressed="false" aria-label="Mostrar senha">Mostrar</button></div>
 <button class="btn hot" type="submit">Entrar</button><p id="hm" class="err" role="alert"></p></form></div>
 <figure class="login-pic">${IMG('entrar', 'Estudante escrevendo a lápis numa folha sobre a carteira')}</figure></div>`
};
// Apresentação: Roda de demonstração, troca da rotina, rolagem para as seções e a frase com lacuna.
const drawDemo = (ctl) => { const w = $('#rdw'); if (w) w.innerHTML = rodaSvg(demo.v, demo.i); if (ctl) { const c = $('#rdc'); if (c) c.innerHTML = demoCtl() } };
document.addEventListener('input', e => { if (!('rdRange' in e.target.dataset)) return; demo.v[demo.i] = +e.target.value; $('#rdo').textContent = e.target.value; drawDemo() });
document.addEventListener('click', e => {
  const g = e.target.closest('[data-rd-i],[data-rd],[data-show],[data-scroll]'); if (!g) return; const d = g.dataset;
  if ('rdI' in d) { demo.i = +d.rdI; drawDemo(1); return }
  if ('rd' in d) { demo.i = (demo.i + +d.rd + RODA_AREAS.length) % RODA_AREAS.length; drawDemo(1); $('#rdr').focus(); return }
  if ('show' in d) {
    show = +d.show; const s = SHOW[show];
    document.querySelectorAll('[data-show]').forEach(b => b.setAttribute('aria-selected', b === g));
    document.querySelectorAll('.show-pic img').forEach((im, k) => im.classList.toggle('on', k === show));
    const p = $('#sp'); p.style.setProperty('--sc', s[2]); p.setAttribute('aria-labelledby', 'st' + show); $('#sf').innerHTML = `<b>${s[3]}</b>${s[4]}`; return
  }
  if ('scroll' in d) {
    e.preventDefault(); const go = () => { const t = document.getElementById(d.scroll); if (t) t.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }) };
    if (document.body.dataset.route === 'landing') go(); else { location.hash = '#/'; setTimeout(go, 60) }
  }
});
document.addEventListener('keydown', e => {
  const b = e.target.closest && e.target.closest('[data-show]'); if (!b || !['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
  const n = (+b.dataset.show + (e.key === 'ArrowRight' ? 1 : -1) + SHOW.length) % SHOW.length, nb = $(`[data-show="${n}"]`); nb.click(); nb.focus()
});
document.addEventListener('submit', e => {
  if (e.target.id !== 'cf') return; e.preventDefault();
  const v = $('#ce').value.trim(); try { v ? sessionStorage.setItem('senac.pre', v) : sessionStorage.removeItem('senac.pre') } catch { } location.hash = '#/login'
});
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act=ver]'); if (!b) return;
  pwdShown = !pwdShown; $('#lp').type = pwdShown ? 'text' : 'password'; b.textContent = pwdShown ? 'Ocultar' : 'Mostrar'; b.setAttribute('aria-pressed', pwdShown); b.setAttribute('aria-label', pwdShown ? 'Ocultar senha' : 'Mostrar senha')
});
document.addEventListener('submit', e => {
  if (e.target.id !== 'lf') return; e.preventDefault();
  const em = $('#lu').value.trim().toLowerCase(), pw = $('#lp').value, u = USERS.find(x => x.email === em && x.senha === pw);
  if (!u) { msg('Os dados informados não são válidos. Confira e tente novamente.'); $('#lp').value = ''; $('#lp').focus(); return }
  SESS = u; saveSess(u); chat = null; location.hash = '#/'; route(); flash(`Bem-vindo(a), ${u.nome}.`)
});
function flash(t) { const f = $('#flash'); f.textContent = t; f.hidden = false; clearTimeout(flash.t); flash.t = setTimeout(() => { f.hidden = true }, 3500) }

// ===== Área da equipe (dados reais locais + exemplos identificados) =====
const O4 = ['Sempre', 'Na maioria das vezes', 'Às vezes', 'Raramente'];
const EXEMPLO_RESP = [...Array(6)].map((_, i) => ({ turma: 'Exemplo A', respostas: TQ.map((q, k) => O4[(i + k) % 4]), sugestao: '' }));
views.caixa = () => {
  const l = ld('inbox', []).filter(m => m.canal === SESS.canal).sort((a, b) => b.ts - a.ts),
    card = (m, ex) => `<article class="card"><div class="meta"><b>Turma: ${esc(m.turma || '—')}</b><span>${ex ? '<span class="tag">Exemplo</span>' : fdt(m.ts)}</span></div><p>${esc(m.t)}</p></article>`;
  return `<h1 class="t">Conversas recebidas</h1><p class="sub">Mensagens dirigidas ao seu perfil. Mostram a turma, não a identidade do estudante.</p>
 <div class="stk">${l.map(m => card(m)).join('')}${card({ turma: 'Exemplo A', t: 'Mensagem de exemplo para ilustrar a caixa de conversas.' }, 1)}</div>`
};
views.painel = () => {
  const g = {}; ld('turmaAval', []).forEach(a => { const k = a.turma + '|' + a.semana; (g[k] = g[k] || { turma: a.turma, semana: a.semana, n: 0 }).n++ });
  const rows = [...Object.values(g), { turma: 'Exemplo A', semana: wk(), n: EXEMPLO_RESP.length, ex: 1 }], mn = CONFIG.MIN_RESPOSTAS;
  return `<h1 class="t">Avaliação das Turmas</h1><p class="sub">Resultados coletivos por turma e semana. Não mostram quem respondeu; turmas com menos de ${mn} respostas ficam omitidas.</p>
 <table class="dir"><thead><tr><th>Turma</th><th>Semana de</th><th>Respostas</th><th>Situação</th></tr></thead><tbody>${rows.map(r => `<tr><th scope="row">${esc(r.turma)}${r.ex ? ' <span class="tag">Exemplo</span>' : ''}</th><td>${br(r.semana)}</td><td>${r.n}</td><td>${r.n >= mn ? '<a class="lnk" href="#/relatorios">Ver relatório</a>' : 'Omitido'}</td></tr>`).join('')}</tbody></table>`
};
function localReports() {
  const R = Relatorios, g = {}; R.CFG.minRespostas = CONFIG.MIN_RESPOSTAS;
  ld('turmaAval', []).forEach(a => { const k = a.turma + '|' + a.semana; (g[k] = g[k] || []).push(a) });
  const out = Object.values(g).map(l => R.gerarRelatorio({ turma: l[0].turma, semana: l[0].semana, respostas: l, matriculados: 0 }));
  out.push({ ...R.gerarRelatorio({ turma: 'Exemplo A', semana: wk(), respostas: EXEMPLO_RESP, matriculados: 30 }), exemplo: true });
  return out.sort((a, b) => b.semana.localeCompare(a.semana) || a.turma.localeCompare(b.turma))
}
route();
