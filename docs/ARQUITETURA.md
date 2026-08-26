# Arquitetura inicial

## Estado atual

O projeto contém um protótipo local navegável, construído apenas com React Native, Expo e TypeScript. Os dados são demonstrativos e ficam em memória; ainda não há autenticação nem banco de dados.

## Responsabilidades

- `App.tsx`: controla temporariamente a tela ativa.
- `src/screens`: reúne as telas completas.
- `src/components`: componentes visuais reutilizáveis.
- `src/data`: dados de demonstração, removidos quando o Supabase for integrado.
- `src/types`: contratos TypeScript.
- `src/theme`: identidade visual e tokens de design.

## Próxima evolução técnica

1. Instalar o Expo Router.
2. Migrar a navegação temporária para rotas em `app/`.
3. Criar componentes de formulário.
4. Configurar Supabase.
5. Substituir dados demonstrativos por repositórios de dados.
6. Adicionar testes.

## Regras do projeto

- Uma funcionalidade por vez.
- Componentes pequenos e reutilizáveis.
- Tipos explícitos para os dados principais.
- Nenhuma chave secreta dentro do GitHub.
- Toda tabela do Supabase deve usar Row Level Security.
- A interface deve ter contraste, alvos de toque e rótulos acessíveis.
