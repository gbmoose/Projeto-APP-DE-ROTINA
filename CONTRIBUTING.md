# Como trabalhar no projeto

## Fluxo básico

1. Atualize a branch `main`.
2. Crie uma branch para a funcionalidade.
3. Faça uma alteração pequena e teste no celular.
4. Execute a verificação de TypeScript.
5. Faça um commit descritivo.
6. Abra um pull request quando houver mais colaboradores.

## Padrão de branches

```text
feature/tela-meu-dia
feature/cadastro-tarefas
fix/data-tarefa
docs/atualizar-roadmap
```

## Comandos

```bash
npm install
npm start
npm run typecheck
```

## Segurança

Nunca publique senhas, tokens ou chaves do Supabase. Variáveis locais devem ficar em `.env`, que está ignorado pelo Git.
