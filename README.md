# Hub de Portfólio — CMS e Apresentação

## Sobre o projeto
Uma plataforma Full Stack autônoma construída sob arquitetura desacoplada para gerenciamento e exibição dinâmica de projetos técnicos. A aplicação simula o fluxo completo de um sistema de conteúdo, onde a interface cliente consome uma API RESTful própria, com dados persistidos em um banco relacional e geridos através de um painel administrativo protegido.

## Funcionalidades
- **Painel Administrativo Privado (CMS):** Gestão completa (CRUD) de projetos, tecnologias, mídias e metadados.
- **Renderização Dinâmica:** Exibição de conteúdo consumido de forma assíncrona da API.
- **Gerenciamento de Arquivos:** Sistema de upload e processamento de imagens integrado.
- **Autenticação Segura:** Proteção de rotas da API e da interface administrativa utilizando validação por tokens JWT e encriptação de senhas.
- **Interface Responsiva e Animada:** Design moderno e minimalista com suporte a transições fluidas e componentes adaptáveis a qualquer tamanho de tela.

## Tecnologias utilizadas

- **Linguagens:** TypeScript, JavaScript
- **Framework/Biblioteca:** Next.js, React, Node.js, Express, Framer Motion, Swiper
- **Banco de dados:** PostgreSQL, Prisma ORM
- **Estilização:** Tailwind CSS
- **Ferramentas:** Git, GitHub
- **Outros recursos técnicos:** JWT (JSON Web Tokens), Bcrypt, Multer (Processamento multipart/form-data), Axios

## Como executar o projeto

Para rodar a aplicação localmente, é necessário executar os ambientes de Backend e Frontend separadamente.

**Configuração do Backend (API):**
1. Acesse o diretório do backend: `cd backend`
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` baseado nas configurações do seu banco de dados e segredos JWT:
   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco?schema=public"
   JWT_SECRET="sua_chave_jwt"
   ADMIN_REGISTER_SECRET="sua_chave_registro"
   PORT=5000
   ```
4. Rode as migrações do banco: `npx prisma migrate dev`
5. Inicie o servidor: `npm run dev`

**Configuração do Frontend:**
1. Acesse o diretório do frontend: `cd frontend`
2. Instale as dependências: `npm install`
3. Configure o arquivo `.env` para apontar para o seu backend local:
   ```env
   NEXT_PUBLIC_API_URL="http://localhost:5000"
   ```
4. Inicie o servidor de desenvolvimento: `npm run dev`
5. Acesse no navegador: `http://localhost:3000`

## Organização do projeto
O ecossistema está dividido em dois blocos principais com responsabilidades únicas:
- **Backend (`/backend`):** Estruturado com `routes` (mapeamento de endpoints), `middlewares` (verificação JWT e upload de arquivos via Multer), lógica central de `server.js` (Express) e definições de banco de dados (`prisma/schema.prisma`).
- **Frontend (`/frontend`):** Arquitetura baseada no App Router do Next.js. O código é separado em `app` (rotas e layouts), `components/ui` (elementos reutilizáveis como modais e cards), `components/sections` (blocos visuais da página), `context` (gerenciamento de estado global de autenticação) e `types` (interfaces do TypeScript).

## O que este projeto demonstra
- **Desenvolvimento Full Stack (Cargo-alvo):** Demonstra a capacidade de construir e unificar as camadas de Client e Server.
- **Construção de APIs RESTful:** Mapeamento de rotas, controle de middlewares, tratamento de concorrência e retorno padronizado de códigos HTTP.
- **Segurança de Aplicações:** Implementação de autenticação JWT *stateless*, restrição de acesso por rota (RBAC) e proteção contra armazenamento de credenciais em texto limpo utilizando `bcrypt`.
- **Modelagem Relacional de Dados:** Uso avançado de ORM (Prisma) para criação de *schemas*, relacionamentos estruturados e execução de migrações seguras no PostgreSQL.
- **Componentização e Design Sistêmico:** Domínio de React/Next.js para criar componentes modulares e reutilizáveis, garantindo manutenibilidade.

## Melhorias futuras
- Implementação de paginação (ou lazy loading) para as listagens de projetos na área administrativa visando maior performance com alto volume de dados.
- Adição de testes unitários para a camada de autenticação e rotas críticas do backend (ex: utilizando Jest).
- Implementação de um sistema estruturado de logs para registrar falhas na API e acessos não autorizados de forma monitorável.
