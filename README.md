# 🚀 Portfólio Full-Stack

Aplicação completa de portfólio desenvolvida com foco em sistemas reais e escaláveis, incluindo frontend moderno, backend robusto e painel administrativo para gerenciamento de conteúdo.

🔗 Acesse o projeto: [ LINK ](https://portfolio-one-virid-12.vercel.app/)

---

## 🧠 Sobre o Projeto

Este projeto vai além de um simples portfólio.

Ele foi construído como uma aplicação fullstack real, com:
- Arquitetura separada (frontend + backend)
- API REST estruturada
- Autenticação com JWT
- Banco de dados relacional com Prisma
- Deploy em produção (Vercel + Railway)

👉 O objetivo foi simular um ambiente próximo ao mercado real.

---

## ✨ Funcionalidades

- ✅ Exibição dinâmica de projetos
- 🔐 Sistema de autenticação com JWT
- 🧑‍💼 Painel administrativo (CRUD completo)
- 📤 Upload de imagens
- 📱 Design responsivo (mobile + desktop)
- 🎯 Interface moderna com Tailwind CSS
- ⚡ Integração frontend + backend em produção

---

## 🛠️ Tecnologias

### Frontend
- Next.js
- React
- Tailwind CSS
- Axios
- Swiper

### Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT (autenticação)
- Bcrypt (hash de senha)
- Multer (upload de arquivos)

---

## 🏗️ Arquitetura

<img width="209" height="242" alt="image" src="https://github.com/user-attachments/assets/f9d4f1d5-3409-4ad5-990d-9f974e9ce502" />


---

## 🔐 Autenticação

O sistema utiliza JWT para controle de acesso:

1. Usuário realiza login
2. Backend valida credenciais
3. Token JWT é gerado
4. Frontend armazena o token
5. Rotas protegidas validam o token

---

## 📡 API Endpoints

### Autenticação
- POST /api/login
- POST /api/register (protegido por secret)

### Projetos
- GET /projects
- GET /projects/:id
- POST /projects 🔒
- PUT /projects/:id 🔒
- DELETE /projects/:id 🔒

---

## ⚙️ Configuração

### Variáveis de ambiente

Backend (.env)
DATABASE_URL=

JWT_SECRET=

FRONTEND_URL=

ADMIN_REGISTER_SECRET=

PORT=5000

Frontend (.env.local)

NEXT_PUBLIC_API_URL=

---

## 🚀 Como rodar localmente

# Clone o projeto
git clone https://github.com/seu-usuario/portfolio.git

# Backend
cd backend
npm install
npx prisma migrate dev
npm run dev

# Frontend
cd frontend
npm install
npm run dev

---

## 🌍 Deploy

Frontend: Vercel  
Backend: Railway  
Banco de Dados: PostgreSQL (Railway)

---

## 📈 Destaques Técnicos

- Integração fullstack real
- Deploy em produção
- Uso de ORM moderno (Prisma)
- Segurança com JWT + hash de senha
- Estrutura escalável

---

## 👨‍💻 Autor

Guilherme Bisof  
Desenvolvedor Full-Stack  
Focado em sistemas reais e escaláveis  

LinkedIn: https://www.linkedin.com/in/guilhermebisof/

---

## 📄 Licença

MIT
