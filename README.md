# Hub de Portfólio — Plataforma Full-Stack de Gerenciamento de Conteúdo (CMS)

[![Status: Concluído](https://img.shields.io/badge/STATUS-CONCLUÍDO-green?style=for-the-badge)](https://github.com/Guilherme-Bisof/Portfolio)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

> Plataforma Full-Stack autônoma projetada sob arquitetura desacoplada (Decoupled Architecture), englobando uma SPA corporativa de alta performance, uma API RESTful robusta e um Painel Administrativo privado (CMS) para controle dinâmico e gerenciamento de ativos e projetos em tempo real.

🔗 **Acesse a aplicação em produção:** [guilhermebisof.site](https://guilhermebisof.site/)

---

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias e Ferramentas](#-tecnologias-e-ferramentas)
- [Arquitetura do Ecossistema](#-arquitetura-do-ecossistema)
- [Fluxo de Autenticação e Segurança](#-fluxo-de-autenticação-e-segurança)
- [Especificação Técnica da API (Endpoints)](#-especificação-técnica-da-api-endpoints)
- [O Que Este Projeto Demonstra Tecnicamente](#-o-que-este-projeto-demonstra-tecnicamente)
- [Instalação e Execução Local](#-instalação-e-execução-local)
- [Ambiente de Deploy e Infraestrutura](#-ambiente-de-deploy-e-infraestrutura)

---

## Sobre o Projeto

Esta aplicação foi concebida para atuar como uma solução unificada e escalável de gerenciamento de portfólio e catalogação de ativos técnicos. O ecossistema rompe o padrão de portfólios estáticos ao implementar uma arquitetura moderna onde a camada de apresentação consome de forma assíncrona uma API dedicada, protegida por protocolos rígidos de autenticação e criptografia.

O projeto foi inteiramente arquitetado para refletir as melhores práticas de engenharia de software do mercado, aplicando os conceitos de responsabilidade única, design responsivo baseado em componentes utilitários e persistência estruturada de dados relacionais.

---

##  Funcionalidades Principais

* **Painel Administrativo Privado (CMS):** Dashboard restrito para gerenciamento completo (CRUD) de projetos, tecnologias, mídias e metadados informativos de forma dinâmica.
* **Consumo de Dados Otimizado:** Renderização dinâmica na camada client-side integrada com Axios para chamadas HTTP assíncronas e Swiper para carrosséis de imagens responsivos.
* **Mecanismo de Storage e File Upload:** Upload integrado de arquivos e mídias via middleware de processamento de formulários mutipart/form-data.
* **Segurança Baseada em Tokens (RBAC):** Proteção de rotas críticas no back-end e bloqueio de views no front-end para usuários não autenticados.
* **Design Responsivo Avançado:** Interface moderna, minimalista e fluida adaptada nativamente para todas as resoluções de tela (Mobile, Tablet e Desktop).

---

##  Tecnologias e Ferramentas

### Camada de Apresentação (Frontend)
* **Framework:** Next.js / React
* **Estilização:** Tailwind CSS (Arquitetura utilitária e responsiva)
* **Client HTTP:** Axios (Abstração e interceptadores de requisições)
* **UI/UX Components:** Swiper (Componentização de sliders fluidos)

### Camada de Serviços e Dados (Backend)
* **Runtime:** Node.js com Express
* **ORM:** Prisma (Mapeamento de dados de alta performance e Type Safety)
* **Banco de Dados:** PostgreSQL (Persistência estruturada e ACID)
* **Segurança:** JSON Web Tokens (JWT) & Bcrypt (Mecanismo de hashing de senhas)
* **File Handling:** Multer (Tratamento e armazenamento local/em nuvem de arquivos)

---

## Fluxo de Autenticação e Segurança

O controle de sessões e acessos administrativos utiliza o padrão de segurança industrial **JWT (JSON Web Token)**:

1. **Handshake de Autenticação:** O administrador submete as credenciais através da view de login privada.
2. **Encriptação e Validação:** O servidor processa os dados, valida o hash via `bcrypt` e gera um token criptografado contendo as claims de acesso.
3. **State Management:** O cliente armazena o token de forma segura e o injeta automaticamente nos headers HTTP (`Authorization: Bearer <token>`) para requisições subsequentes.
4. **Guarda de Rotas (Middlewares):** Rotas de mutação de dados (POST, PUT, DELETE) barram qualquer requisição que não carregue uma assinatura JWT legítima.

---

##  Especificação Técnica da API (Endpoints)

### Autenticação & Controle de Acesso
* `POST /api/login` - Validação de credenciais de administrador e emissão de JWT.
* `POST /api/register` - Registro inicial de credenciais (Protegido via variável de ambiente de uso único `ADMIN_REGISTER_SECRET`).

### Gerenciamento de Projetos e Ativos
* `GET /projects` - Recuperação pública de toda a listagem de projetos armazenados.
* `GET /projects/:id` - Consulta detalhada de um ativo específico por ID.
* `POST /projects` - Instanciação de um novo projeto no banco de dados 🔒 *(Requer JWT)*.
* `PUT /projects/:id` - Atualização cadastral de um projeto existente 🔒 *(Requer JWT)*.
* `DELETE /projects/:id` - Remoção definitiva de um projeto e seus vínculos relacionais 🔒 *(Requer JWT)*.

---

##  O Que Este Projeto Demonstra Tecnicamente

Este repositório consolida competências essenciais de nível de produção exigidas pelas principais empresas de tecnologia:

1. **Construção de APIs RESTful escaláveis:** Organização de rotas, middlewares, controllers e tratamento padronizado de erros e códigos de status HTTP.
2. **Integração Full-Stack Real:** Domínio do ciclo completo de requisições, tratamento de concorrência e gerenciamento de CORS entre domínios distintos.
3. **Modelagem de Dados Moderna:** Uso avançado do Prisma ORM para geração de migrações estruturadas (*migrations*) e manutenibilidade contínua de bancos de dados relacionais.
4. **Padrões de Criptografia e Segurança:** Armazenamento seguro de senhas através de algoritmos de hashing e gerenciamento stateless de sessões.

---

## ⚙️ Instalação e Execução Local

### Passo 1: Variáveis de Ambiente
Duplique as configurações de ambiente e configure as strings de conexão em suas respectivas camadas:

**Back-end (`backend/.env`):**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_db?schema=public"
JWT_SECRET="sua_chave_secreta_jwt_aqui"
FRONTEND_URL="http://localhost:3000"
ADMIN_REGISTER_SECRET="sua_chave_secreta_de_registro_aqui"
PORT=5000
```

**Front-end (`frontend/.env.local`):**
```bash
NEXT_PUBLIC_API_URL="http://localhost:5000"
```
### Passo 2: Execução do Back-end

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### Passo 3: Execução do Front-end

```bash
cd ../frontend
npm install
npm run dev
```
Acesse o cliente em http://localhost:3000 e o servidor local de API em http://localhost:5000.

---

##  Ambiente de Deploy e Infraestrutura
A aplicação está totalmente disponível em produção através de uma pipeline de integração e entrega contínua (CI/CD):

Camada Client (SPA): Hospedada na Vercel, aproveitando a otimização de borda (Edge Network) nativa para aplicações Next.js.

Camada de Serviços (API): Hospedada na Railway, operando sob um contêiner Node.js isolado.

Banco de Dados: Instância gerenciada do PostgreSQL diretamente na infraestrutura da Railway, garantindo baixa latência e alta disponibilidade na comunicação com a API.

---

##  Autor

Desenvolvido por Guilherme Bisof

Desenvolvedor Full-Stack focado em arquiteturas performáticas e sistemas escaláveis.

Conecte-se comigo no [Linkedin](https://www.linkedin.com/in/guilhermebisof/) para acompanhar novas soluções técnicos de ponta.
