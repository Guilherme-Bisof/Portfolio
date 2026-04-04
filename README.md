# 🚀 Portfólio Fullstack

Um portfólio pessoal completo desenvolvido com as tecnologias mais modernas, permitindo visualizar projetos, habilidades, educação e contato, com um painel administrativo para gerenciar conteúdo.

## 📋 Sumário

- [Características](#características)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executar o Projeto](#executar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Autenticação](#autenticação)
- [API Endpoints](#api-endpoints)
- [Contribuição](#contribuição)

## ✨ Características

- ✅ **Página Inicial Responsiva** - Showcase de projetos, habilidades e educação
- 🔐 **Sistema de Autenticação** - Login seguro com JWT
- 📱 **Admin Dashboard** - Painel para gerenciar projetos e conteúdo
- 📤 **Upload de Imagens** - Sistema de upload de arquivos para projetos
- 🎨 **Design Moderno** - Tailwind CSS com componentes reutilizáveis
- 🔄 **Banco de Dados** - Prisma ORM com migrações automáticas
- 📧 **Seção de Contato** - Integração para contato direto
- ⚡ **Performance** - Next.js para otimização automática

## 🛠️ Tecnologias

### Frontend
- **Next.js 15.3.3** - Framework React
- **React 19.0.0** - Biblioteca UI
- **React DOM 19.0.0** - Renderização DOM
- **Tailwind CSS 4** - Estilização
- **Axios 1.9.0** - Cliente HTTP
- **React Icons 5.5.0** - Ícones SVG
- **Swiper 11.2.8** - Carrossel de projetos
- **ESLint 9** - Validação de código

### Backend
- **Node.js 22.x** - Runtime JavaScript
- **Express 5.1.0** - Framework HTTP
- **Prisma 6.9.0** - ORM para banco de dados
- **JWT 9.0.2** - Autenticação segura
- **Bcryptjs 3.0.2** - Hash de senhas
- **Multer 2.1.1** - Upload de arquivos
- **CORS 2.8.5** - Requisições cross-origin
- **Dotenv 16.5.0** - Variáveis de ambiente
- **Nodemon 3.1.10** - Auto-reload em desenvolvimento

## 📦 Pré-requisitos

- Node.js 22.x
- npm ou yarn
- Banco de dados (SQLite, PostgreSQL ou MySQL)

## 🔧 Instalação

### 1. Clone o repositório

\`\`\`bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
\`\`\`

### 2. Instale as dependências

**Backend:**
\`\`\`bash
cd backend
npm install
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm install
\`\`\`

### 3. Configure as variáveis de ambiente

**Backend** - Crie um arquivo \`.env\` na pasta \`backend/\`:
\`\`\`env
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua_chave_secreta_aqui"
FRONTEND_URL="http://localhost:3000"
PORT=5000
\`\`\`

**Frontend** - Crie um arquivo \`.env.local\` na pasta \`frontend/\`:
\`\`\`env
NEXT_PUBLIC_API_URL="http://localhost:5000"
\`\`\`

### 4. Configure o banco de dados

\`\`\`bash
cd backend
npx prisma migrate dev
\`\`\`

## 🚀 Executar o Projeto

### Modo Desenvolvimento

**Terminal 1 - Backend:**
\`\`\`bash
cd backend
npm run dev
\`\`\`

O backend estará disponível em \`http://localhost:5000\`

**Terminal 2 - Frontend:**
\`\`\`bash
cd frontend
npm run dev
\`\`\`

O frontend estará disponível em \`http://localhost:3000\`

### Modo Produção

**Backend:**
\`\`\`bash
cd backend
npm start
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm run build
npm start
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
portfolio/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma      # Definição do banco de dados
│   │   └── migrations/        # Migrações do banco
│   ├── public/
│   │   └── uploads/           # Arquivos enviados
│   ├── server.js              # Ponto de entrada
│   ├── package.json
│   └── .env                   # Variáveis de ambiente
│
└── frontend/
    ├── src/
    │   ├── app/               # Rotas Next.js
    │   │   ├── admin/         # Painel administrativo
    │   │   └── page.js        # Página inicial
    │   ├── components/        # Componentes React
    │   ├── context/           # Context API
    │   └── hooks/             # Custom hooks
    ├── public/                # Arquivos estáticos
    ├── package.json
    └── .env.local             # Variáveis de ambiente
\`\`\`

## 🔐 Autenticação

O projeto utiliza **JWT (JSON Web Token)** para autenticação segura:

1. Usuario realiza login com email e senha
2. O backend valida as credenciais e retorna um token JWT
3. O token é armazenado no navegador
4. Requisições subsequentes incluem o token no header \`Authorization\`
5. O backend valida o token antes de processar requisições protegidas

## 📡 API Endpoints

### Autenticação
- \`POST /api/auth/login\` - Login de usuário
- \`POST /api/auth/register\` - Registro de novo usuário

### Projetos
- \`GET /api/projects\` - Listar todos os projetos
- \`GET /api/projects/:id\` - Obter detalhes de um projeto
- \`POST /api/projects\` - Criar novo projeto (requer autenticação)
- \`PUT /api/projects/:id\` - Atualizar projeto (requer autenticação)
- \`DELETE /api/projects/:id\` - Deletar projeto (requer autenticação)

### Upload
- \`POST /api/upload\` - Upload de imagens (requer autenticação)

## 🌐 Deploy

### Frontend - Vercel
1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
3. Clique em "Import Project" e selecione o repositório
4. Configure o Root Directory como `frontend`
5. Adicione a variável de ambiente: `NEXT_PUBLIC_API_URL`
6. Deploy automático a cada push!

### Backend - Railway
1. Acesse [railway.app](https://railway.app) e faça login com GitHub
2. Crie um novo projeto e conecte o repositório
3. Configure o Root Directory como `backend`
4. Adicione as variáveis de ambiente:
   - `DATABASE_URL` - URL do banco PostgreSQL
   - `JWT_SECRET` - Chave secreta para JWT
   - `FRONTEND_URL` - URL do frontend em produção
   - `PORT` - 5000
5. Deploy automático a cada push!

**URLs de Produção:**
- Frontend: `https://seu-projeto.vercel.app`
- Backend: `https://seu-projeto.up.railway.app`

## 📝 Notas

- As senhas são hash com bcryptjs por segurança
- O JWT expira após um período configurável
- Os uploads são armazenados em \`/public/uploads\`
- O CORS está configurado para o frontend
- Utilize PostgreSQL em produção para melhor performance

## 📄 Licença

MIT

## 👤 Autor

Desenvolvido por Guilherme

---

**Versão:** 1.0.0  
**Última atualização:** Abril de 2026
