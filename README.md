Portfólio — Headless CMS & Showcase Dinâmico

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

> Aplicação Full Stack desacoplada composta por uma API RESTful em Node.js/Express e um frontend dinâmico em Next.js (App Router). O sistema opera como um CMS privativo para gerenciamento em tempo real de projetos, mídias e metadados com autenticação segura via tokens JWT e persistência com Prisma ORM.

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Ecossistema](#estrutura-do-ecossistema)
- [O Que Este Projeto Demonstra](#o-que-este-projeto-demonstra)
- [Como Executar a Aplicação](#como-executar-a-aplicação)
- [Melhorias Futuras](#melhorias-futuras)

---

## Sobre o Projeto

O projeto foi construído para servir como vitrine técnica e simulador de uma arquitetura cliente-servidor desacoplada. A aplicação elimina a necessidade de atualizações manuais no código estático para cada novo projeto: a área administrativa autenticada permite cadastrar, alterar e gerenciar todos os registros do banco de dados relacional, que são consumidos e renderizados de forma assíncrona pela interface principal.

---

## Funcionalidades Principais

* **Painel Administrativo Privado (CMS):** Interface restrita para controle completo (CRUD) de projetos técnicos, badges de tecnologias, links de repositório e descrições.
* **Autenticação JWT & Criptografia:** Proteção de rotas administrativas da API com tokens JWT *stateless* e criptografia de senhas com `bcrypt`.
* **Upload e Gestão de Mídias:** Processamento de imagens multipart/form-data via middlewares dedicados (`Multer`).
* **Renderização Dinâmica & Responsiva:** Interface construída com componentes desacoplados, animações fluidas (Framer Motion) e design responsivo com Tailwind CSS.
* **Consumo Assíncrono com Tipagem Estrita:** Comunicação via Axios com contratos de tipos garantidos pelo TypeScript.

---

## Tecnologias Utilizadas

* **Frontend:** TypeScript, Next.js (App Router), React, Tailwind CSS, Framer Motion, Swiper, Axios
* **Backend:** Node.js, Express.js, TypeScript/JavaScript
* **Banco de Dados & ORM:** PostgreSQL, Prisma ORM
* **Segurança & Utilitários:** JWT (JSON Web Tokens), Bcrypt, Multer, CORS, dotenv
* **Ferramentas de Desenvolvimento:** Git, GitHub, Postman

---

## Estrutura do Ecossistema
```bash
portfolio-hub/
├── backend/
│   ├── routes/             # Definição dos endpoints RESTful
│   ├── middlewares/        # Validação JWT, upload de arquivos e tratamento de erros
│   ├── prisma/             # Schema relacional e migrações do banco
│   └── server.js           # Inicialização do Express e middlewares globais
│
└── frontend/
└── src/
├── app/            # Estrutura de rotas e layouts do Next.js (App Router)
├── components/     # Componentes visuais reutilizáveis (UI e Sections)
├── context/        # Gerenciamento de estado global de autenticação
└── types/          # Interfaces e contratos TypeScript
```

---

## O Que Este Projeto Demonstra

* **Arquitetura Full Stack Desacoplada:** Separação limpa entre a camada de API (Backend) e a aplicação cliente (Frontend).
* **Desenvolvimento de APIs RESTful:** Criação de endpoints estruturados, tratamento adequado de códigos de status HTTP e controle de concorrência.
* **Segurança e Controle de Acesso:** Implementação de autenticação JWT, proteção de rotas privadas e prevenção de vulnerabilidades comuns.
* **Modelagem Relacional com ORM Moderno:** Utilização do Prisma para criação de schemas declarativos, migrações versionadas e consultas otimizadas no PostgreSQL.
* **Componentização e Design System:** Desenvolvimento modular no ecossistema React/Next.js focado em reutilização e fácil manutenção.

---

## Como Executar a Aplicação

### Pré-requisitos
* Node.js LTS instalado
* Instância do PostgreSQL em execução

### 1. Configuração do Backend
```bash
cd backend
npm install

# Crie o arquivo .env conforme o exemplo:
# DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco?schema=public"
# JWT_SECRET="sua_chave_jwt_secreta"
# ADMIN_REGISTER_SECRET="sua_chave_de_registro"
# PORT=5000

npx prisma migrate dev
npm run dev
```

2. Configuração do Frontend
```bash
cd ../frontend
npm install

# Crie o arquivo .env:
# NEXT_PUBLIC_API_URL="http://localhost:5000"

npm run dev
```
Acesse no navegador: http://localhost:3000.

---

## Melhorias Futuras
- [ ] Implementação de paginação e filtros dinâmicos nas listagens da área administrativa.
- [ ] Criação de testes unitários e de integração para as rotas da API com Jest e Supertest.
- [ ] Implementação de pipeline de CI/CD para deploy automatizado do frontend e da API.
