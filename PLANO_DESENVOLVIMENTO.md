# Plano de desenvolvimento — Routine Flow

## 1. Visão do produto

O Routine Flow será um aplicativo inclusivo de organização e melhoria de rotina para qualquer pessoa. Ele reunirá vida pessoal, trabalho, estudos, saúde e treinos em uma experiência simples.

### Proposta principal

Ao abrir o aplicativo, a pessoa deve responder rapidamente a três perguntas:

1. O que preciso fazer hoje?
2. Qual é minha prioridade agora?
3. Como estou evoluindo nesta semana?

### Público inicial

- Pessoas que conciliam trabalho, estudos, casa e exercícios.
- Estudantes e profissionais com dificuldade de manter constância.
- Usuários que acham aplicativos de produtividade complicados.
- Homens, mulheres e pessoas de diferentes identidades e estilos de vida.

O cadastro não precisa exigir gênero. A personalização deve acontecer por objetivos, módulos, cores, rotina e acessibilidade.

## 2. Análise de aplicativos do mercado

| Aplicativo | Ponto forte | O que aproveitar | O que evitar |
| --- | --- | --- | --- |
| Todoist | Captura rápida, recorrência, filtros e visão Hoje | Criação de tarefa em poucos toques e linguagem simples | Transformar a primeira versão em ferramenta empresarial complexa |
| TickTick | Tarefas, calendário, hábitos, Pomodoro e Matriz de Eisenhower no mesmo app | Foco integrado, calendário e estatísticas de hábitos | Colocar todos os módulos na tela inicial |
| Structured | Linha do tempo visual do dia | Uma tela Meu Dia clara, com horários e blocos | Depender apenas de horários rígidos |
| Habitica | Gamificação, sequência, recompensas e desafios | Pontos e pequenas conquistas opcionais | Punições que façam a pessoa se sentir culpada |
| Fabulous | Construção gradual de rotinas e encadeamento de hábitos | Onboarding por objetivos e sugestões de pequenos passos | Textos longos e excesso de etapas antes de usar o app |
| Notion | Flexibilidade, bancos relacionados e diferentes visualizações | Categorias e módulos personalizáveis | Exigir que a pessoa construa o próprio sistema do zero |

### Diferencial recomendado

**Meu Dia adaptativo:** uma linha do tempo que combina compromissos, tarefas flexíveis, hábitos, estudos e treinos. Quando algo não for concluído, o aplicativo sugere reagendar sem punição.

## 3. Escopo da primeira versão (MVP)

### Deve ter

- Cadastro, login e recuperação de senha.
- Onboarding com objetivos e módulos desejados.
- Tela Meu Dia.
- Criar, editar, concluir e excluir tarefas.
- Categorias: Pessoal, Casa, Trabalho, Estudos, Saúde e Treino.
- Prioridades: baixa, média e alta.
- Data, horário e duração opcional.
- Repetição diária ou semanal.
- Hábitos com sequência e progresso semanal.
- Tela semanal.
- Modo claro e escuro.
- Dados separados por usuário.
- Acessibilidade básica e textos em português.

### Entrará depois do MVP

- Pomodoro e cronômetro de foco.
- Matriz de Eisenhower.
- Calendário mensal.
- Estatísticas detalhadas.
- Notificações locais.
- Widgets.
- Integração com calendários externos.
- Módulo de treino avançado.
- Compartilhamento familiar.
- Gamificação opcional.
- Assistente com inteligência artificial.
- Plano pago e assinatura.

## 4. Telas do MVP

1. Abertura.
2. Entrar e criar conta.
3. Recuperar senha.
4. Onboarding de objetivos.
5. Meu Dia.
6. Criar ou editar tarefa.
7. Hábitos.
8. Visão semanal.
9. Perfil e configurações.

### Navegação principal

- Hoje
- Semana
- Adicionar
- Hábitos
- Perfil

## 5. Tecnologias

### Aplicativo

- TypeScript
- React Native
- Expo
- Expo Router

### Dados e serviços

- Supabase Auth para autenticação.
- PostgreSQL do Supabase para banco de dados.
- Row Level Security para separar dados dos usuários.
- Expo Notifications em uma fase posterior.

### Qualidade

- ESLint e Prettier.
- Jest e React Native Testing Library.
- Git e GitHub.
- EAS Build para gerar versões de teste e publicação.

## 6. Preparação do computador e VS Code

### Programas necessários

- Node.js LTS.
- Git.
- Visual Studio Code.
- Aplicativo Expo Go no celular Android ou iPhone.
- Android Studio somente quando precisarmos de emulador ou compilação Android local.
- Conta gratuita no Supabase.

### Extensões recomendadas do VS Code

- ESLint.
- Prettier - Code formatter.
- Expo Tools.
- GitLens, opcional.
- Error Lens, opcional.
- Portuguese (Brazil) Language Pack, opcional.

### Comandos iniciais

```bash
npm install
npm start
```

O Expo mostrará um QR Code. No Android, ele pode ser lido pelo Expo Go. No iPhone, pode ser lido pela câmera.

## 7. Estrutura planejada do código

```text
routine-flow/
├── app/                 # telas e rotas
│   ├── (auth)/
│   └── (tabs)/
├── src/
│   ├── components/      # componentes reutilizáveis
│   ├── features/        # tarefas, hábitos e perfil
│   ├── services/        # Supabase e integrações
│   ├── hooks/
│   ├── theme/           # cores, fontes e espaçamentos
│   ├── types/
│   └── utils/
├── assets/
├── tests/
└── docs/
```

## 8. Banco de dados inicial

### profiles

- id
- display_name
- avatar_url
- created_at

### categories

- id
- user_id
- name
- color
- icon

### tasks

- id
- user_id
- category_id
- title
- description
- priority
- status
- scheduled_date
- start_time
- duration_minutes
- recurrence_rule
- completed_at
- created_at
- updated_at

### habits

- id
- user_id
- title
- frequency
- target_per_period
- color
- icon
- active
- created_at

### habit_logs

- id
- habit_id
- user_id
- completed_on
- value

## 9. Cronograma de 12 semanas

O plano considera aproximadamente 6 a 8 horas por semana. Se houver menos tempo, cada semana pode virar duas.

### Semana 1 — Preparação e fundamentos

- Instalar Node.js, VS Code, Git e Expo Go.
- Executar o aplicativo inicial no celular.
- Aprender componentes, propriedades, estado e estilos do React Native.
- Definir nome, cores e identidade inicial.

**Entrega:** aplicativo abrindo no celular.

### Semana 2 — Planejamento visual

- Desenhar fluxo das telas.
- Criar sistema de cores, tipografia e espaçamentos.
- Montar componentes Button, Card, Input e EmptyState.
- Garantir contraste e tamanhos acessíveis.

**Entrega:** protótipo navegável sem banco.

### Semana 3 — Navegação

- Adicionar Expo Router.
- Criar rotas de autenticação e abas.
- Implementar telas Hoje, Semana, Hábitos e Perfil.

**Entrega:** navegação completa entre telas.

### Semana 4 — Supabase e autenticação

- Criar projeto no Supabase.
- Configurar variáveis de ambiente.
- Criar cadastro, login, logout e recuperação de senha.
- Configurar segurança por usuário.

**Entrega:** usuário entra e sai com segurança.

### Semana 5 — Tarefas

- Criar tabelas de tarefas e categorias.
- Implementar cadastro e edição.
- Adicionar prioridade, data, categoria e status.
- Validar formulários e mensagens de erro.

**Entrega:** CRUD completo de tarefas.

### Semana 6 — Tela Meu Dia

- Buscar tarefas da data atual.
- Separar tarefas com horário e flexíveis.
- Criar linha do tempo e cartão de prioridade.
- Exibir progresso diário.

**Entrega:** principal experiência do produto funcionando.

### Semana 7 — Recorrência e semana

- Criar tarefas diárias e semanais.
- Implementar visão de sete dias.
- Permitir reagendar tarefas.

**Entrega:** planejamento semanal utilizável.

### Semana 8 — Hábitos

- Criar hábitos e registros.
- Implementar check-in diário.
- Calcular sequência e percentual semanal.
- Tratar dias perdidos sem punição agressiva.

**Entrega:** acompanhamento de hábitos.

### Semana 9 — Personalização e inclusão

- Modo claro e escuro.
- Categorias e cores personalizadas.
- Preferência por módulos ativos.
- Revisão de linguagem neutra e acessibilidade.

**Entrega:** experiência adaptável a diferentes pessoas.

### Semana 10 — Qualidade

- Testes das regras de tarefas e hábitos.
- Estados de carregamento, vazio e erro.
- Testar em tamanhos diferentes de tela.
- Corrigir erros e desempenho.

**Entrega:** versão beta estável.

### Semana 11 — Teste com usuários

- Convidar de 5 a 10 pessoas diferentes.
- Observar cadastro, criação de tarefa e uso por três dias.
- Registrar dificuldades e sugestões.
- Corrigir os problemas mais importantes.

**Entrega:** relatório de validação e melhorias.

### Semana 12 — Publicação beta

- Criar ícone, splash e política de privacidade.
- Gerar build com EAS.
- Distribuir uma versão de teste.
- Organizar backlog da próxima versão.

**Entrega:** primeira versão testável do Routine Flow.

## 10. Rotina semanal de programação

### Sessão A — aprender (60 a 90 minutos)

- Estudar apenas o conceito necessário para a tarefa atual.
- Fazer um exemplo pequeno.

### Sessão B — implementar (90 a 120 minutos)

- Criar uma funcionalidade pequena.
- Testar no celular.

### Sessão C — revisar (60 a 90 minutos)

- Corrigir problemas.
- Organizar código.
- Fazer commit no GitHub.
- Escrever o próximo passo no backlog.

### Regra de commits

Fazer commits pequenos e descritivos, por exemplo:

```text
feat: adicionar tela Meu Dia
feat: permitir criar tarefas
fix: corrigir data da tarefa recorrente
docs: atualizar cronograma do projeto
```

## 11. Critérios para considerar o MVP pronto

- Uma pessoa cria conta sem ajuda.
- Consegue criar uma tarefa em menos de 30 segundos.
- Vê claramente as atividades do dia.
- Consegue acompanhar pelo menos um hábito.
- Os dados continuam disponíveis depois de fechar o aplicativo.
- Uma conta não consegue acessar dados de outra.
- O aplicativo funciona em Android e iPhone.
- Cinco pessoas conseguem usá-lo durante três dias sem erro bloqueador.

## 12. Fontes da análise

- [Todoist](https://www.todoist.com/)
- [TickTick](https://ticktick.com/)
- [Structured](https://structured.app/)
- [Habitica](https://habitica.com/static/home)
- [Fabulous](https://www.thefabulous.co/)
