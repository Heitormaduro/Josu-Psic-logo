# Josué Paiva de Oliveira | PSICÓLOGO — MazyOS

Sistema operacional do consultório. Aqui ficam as regras de operação
do MazyOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o Josué, como funciona o consultório
2. `_memoria/preferencias.md` — tom de voz acolhedor, vícios a evitar
3. `_memoria/estrategia.md` — foco atual (converter seguidor em paciente)

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` — hoje em branco; quando estiver vazio,
propor escolhas neutras e perguntar antes de fixar.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

**Atenção especial:** carrossel e resposta de DM são as duas rotinas
identificadas como gargalo semanal. Quando aparecerem, tratar como
candidatas naturais a virar skill própria (já existe `.claude/skills/carrossel/`,
ajustar à voz do Josué).

---

## Aprender com correções

Quando o operador corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o consultório** (clientes, serviços, ferramentas) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (campanhas, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (paciente novo no
discurso público, identidade definida, mudança de foco, ferramenta
instalada, estrutura alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o operador pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do consultório
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---

# Sobre o consultório

**Josué Paiva de Oliveira** é psicólogo clínico com **abordagem
psicanalítica**, especialista em **dependência química**. Atende
adultos em geral (perfil ainda em refinamento).

O psicólogo **trabalha sozinho** — sem secretária, sem outros
profissionais. Quem opera este MazyOS **não é o Josué**, é alguém
montando o sistema pra ele. Sempre que houver dúvida sobre preferência
pessoal do Josué (fora do que já está nas memórias), perguntar antes
de assumir.

## Frentes de trabalho

- **Marketing / conteúdo:** Instagram é o canal principal. Carrossel,
  legendas, reels, postagens recorrentes. O tom é o do exemplo em
  `_memoria/preferencias.md` — acolhedor, primeira pessoa, convida ao
  diálogo. Saídas vão em `marketing/`.
- **Comercial:** o "comercial" aqui é a conversão DM → agendamento.
  Não há pipeline B2B. Foco em ter respostas-padrão pra DM que mantenham
  o tom acolhedor e conduzam pro contato real.
- **Atendimento:** sessões clínicas — fora do escopo deste sistema
  (sigilo profissional). MazyOS não toca em prontuário, conteúdo de
  sessão, ou qualquer dado de paciente.

## Estrutura de pastas

- `_memoria/` — quem é o consultório, como falamos, foco atual
- `identidade/` — marca aplicada (hoje em branco)
- `marketing/` — campanhas, conteúdo, peças de Instagram
- `saidas/` — documentos pontuais
- `dados/` — arquivos pra analisar
- `scripts/` — utilitários
- `templates/` — moldes do próprio MazyOS

*(Criar pasta nova só quando for justificada por uso recorrente.)*

## Regras éticas (CFP)

Todo conteúdo público precisa respeitar o **Código de Ética do
Conselho Federal de Psicologia**. Antes de publicar qualquer peça:

- **Sem promessas de cura** ou resultado garantido
- **Sem depoimentos de pacientes**, mesmo anônimos
- **Sem sensacionalismo** sobre dependência química
- **Sem comparações** com outros profissionais
- **Sem auto-promoção exagerada** ("o melhor psicanalista", etc.)
- **Sem diagnóstico à distância** ou conselho clínico genérico

Se uma peça gerada cruzar alguma dessas linhas, sinalizar antes de
entregar e propor a versão segura.

## Ferramentas conectadas

- [ ] Instagram (Meta Graph API)
- [ ] Google Calendar (agenda)
- [ ] Gmail

*(Marcar conforme for instalando os MCPs.)*
