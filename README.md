# Modo demonstração (padrão, sem backend)

Sem `CONFIG.API_URL`, o site funciona inteiro no navegador, com dados fictícios e `localStorage`:
- **Login demonstrativo** (não é autenticação real): existe **um único acesso de aluno**, entrando com Gmail e senha. As credenciais ficam em `USERS` no `script.js`, que é legível por qualquer pessoa que abrir o site; por isso servem só para demonstração. A sessão guarda apenas o id do perfil em `sessionStorage` (encerra ao fechar a aba) e nunca a senha. Não há login de professores ou equipe.
- A apresentação pública (`#/`) vem antes do login (`#/login`). Fotos: veja `imagens/LEIA-ME.txt`.
- Mensagens de estudantes vão para uma caixa de conversas demonstrativa, visível só ao perfil destinatário; não há respostas simuladas.
- Avaliações de turma são salvas sem vínculo com a conta; relatórios usam `relatorios.js` (que roda no Node e no navegador) e respeitam o mínimo de respostas. Itens marcados como **Exemplo** são fictícios.
- Para uso real, defina `CONFIG.API_URL` e implemente o backend abaixo.

# Backend necessário (NÃO implementado neste pacote)

O front-end (`script.js`) só envia dados ao servidor se `CONFIG.API_URL` estiver preenchido.
Sem isso, tudo fica no `localStorage` do aparelho: **não é seguro, não é compartilhado, e a equipe não recebe nada.**

## Endpoints esperados (JSON, HTTPS, cookies HttpOnly + CSRF)
| Método | Rota | Quem | Função |
|---|---|---|---|
| POST | /chats/:psi\|ped/messages | estudante (sessão) | envia mensagem `{turma,text}` |
| GET  | /chats/mine | estudante | só as próprias conversas |
| GET  | /staff/inbox | psicóloga / pedagogo | só atendimentos do próprio perfil; mostra turma, não identidade |
| POST | /turmas/avaliacoes | estudante | `{turma,semana,respostas,sugestao}` sem vínculo com conta |
| GET  | /turmas/painel?turma&semana | pedagogo com permissão | só agregados; omite se n < MIN_RESPOSTAS |
| POST/GET | /humor, /semana | estudante | só os próprios registros |
| * | /admin/* | administrador | turmas, períodos, usuários, MIN_RESPOSTAS; sem leitura de conversas/respostas |

## Regras obrigatórias
- Autenticação real da equipe (ex.: SSO da escola + 2FA); papéis `estudante`, `psicologa`, `pedagogo`, `admin` verificados **no servidor** em cada rota.
- Tabelas separadas: `humor`, `semana`, `chat_messages`, `turma_avaliacoes`. Avaliação de turma **sem** `student_id`.
- Supressão: painel só exibe estatística com `n >= MIN_RESPOSTAS` (padrão 5); comentários revisados antes de exibir.
- Auditoria: `access_log(user, recurso, hora)` para todo acesso profissional a conteúdo restrito.
- Criptografia em trânsito e em repouso; validação e limites de tamanho no servidor; erros sem dados pessoais; nenhum dado pessoal em URL.
- Retenção: definir prazo (ex.: apagar chats e respostas após o ano letivo) e rotina de exclusão. Base legal, consentimento dos responsáveis para menores e aviso de privacidade conforme LGPD (art. 14).
- Limites de sigilo: protocolo escrito para risco à vida/integridade, com quem pode acessar e como o aluno é informado.

## Relatórios semanais automáticos
- `relatorios.js`: gera um JSON por turma em `backend/saida/` (idempotente). Só usa respostas válidas, aplica o mínimo `MIN_RESPOSTAS` (padrão 5) e não resume textos abertos.
- `carregarRespostas(semana)` lê `backend/dados/respostas.jsonl` (`{turma,semana,respostas[7],sugestao}`, sem identificação do aluno). **Troque por uma consulta ao banco.**
- Agendamento padrão: sexta-feira, 18h30, horário de Brasília. Escolha um:
  - cron: `30 18 * * 5 cd /caminho/do/projeto && TZ=America/Sao_Paulo node backend/relatorios.js`
  - processo contínuo: `node backend/agendador.js` (lê `backend/config.json`, ex.: `{"dia":5,"hora":"18:30"}`; sua rota de administração deve gravar esse arquivo).
- Rotas necessárias no seu servidor: `GET /relatorios` (lista os JSON de `saida/`) e `GET /relatorios/:id`, ambas só para pedagogo com permissão e com registro de acesso.

## Conversas (apoio e professores)
- Apoio: `POST /chats/psi/messages` e `/chats/ped/messages`. Professores: `POST /chats/prof/:id/messages`. Cada conversa só pode ser lida pelo aluno autor e pelo profissional destinatário; coordenação e administração não têm acesso automático.
- Os ids dos professores estão em `PROFS` no `script.js`; a matéria de cada um vem de `CONFIG.MATERIAS` (ex.: `{alex:'Matemática'}`).
- Relatórios: `GET /relatorios/:id?formato=csv` pode usar `paraCSV` de `relatorios.js`.
"# isaurahellena2.GitHub.io" 
