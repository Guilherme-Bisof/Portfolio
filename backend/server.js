import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "./public/uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage });

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://portfolio-one-virid-12.vercel.app",
  "https://portfolio-i6ed231jn-guilherme-bisofs-projects.vercel.app",
  "https://portfolio-git-master-guilherme-bisofs-projects.vercel.app",
];

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// ROTAS PÚBLICAS

app.get("/", (req, res) => {
  res.send("Olá! A API do portfólio está no ar!");
});

// ROTA PARA RECEBER MENSAGEM DE CONTATO
app.post("/contact", (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("--- Nova Mensagem de Contato ---");
    console.log(`Nome: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${message}`);
    console.log("---------------------------------");
    res.status(200).json({ message: "Mensagem recebida com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao processar a mensagem." });
  }
});

// ROTA PÚBLICA PARA LER PROJETOS
app.get("/projects", async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    console.error("ERRO EM /projects:", error);
    return res.status(500).json({
      message: "Não foi possível listar os projetos.",
    });
  }
});

app.get("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.findUnique({
      where: { id: parseInt(id) },
    });

    if (!project) {
      return res.status(404).json({ message: "Projeto não encontrado." });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Nãi foi possível buscar o projeto." });
  }
});

//  ROTAS DE AUTENTICAÇÃO

app.post("/api/register", async (req, res) => {
  const adminSecret = req.headers["x-admin-secret"];

  if (adminSecret !== process.env.ADMIN_REGISTER_SECRET) {
    return res.status(403).json({ message: "Acesso negado." });
  }

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email e senha são obrigatórios." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });
    res.status(201).json({ id: newUser.id, email: newUser.email });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Este email já está em uso." });
    }
    res
      .status(500)
      .json({ message: "Erro ao registrar usuário.", error: error.message });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "8h" },
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login." });
  }
});

// ROTAS PROTEGIDAS

app.post(
  "/projects",
  authenticateToken,
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        title,
        titleEn,
        description,
        descriptionEn,
        repoUrl,
        technologies,
        deployInput,
        type,
        challenge,
        challengeEn,
        solution,
        solutionEn,
        learned,
        learnedEn,
      } = req.body;

      const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

      const parsedTechnologies =
        typeof technologies === "string"
          ? JSON.parse(technologies)
          : technologies;

      const newProject = await prisma.project.create({
        data: {
          title,
          titleEn,
          description,
          descriptionEn,
          image: imagePath,
          repoUrl,
          technologies: parsedTechnologies,
          deployInput,
          type,
          challenge,
          challengeEn,
          solution,
          solutionEn,
          learned,
          learnedEn,
        },
      });
      res.status(201).json(newProject);
    } catch (error) {
      console.error("ERRO AO CRIAR PROJETO:", error);
      res.status(500).json({
        message: "Não foi possível criar o projeto.",
        error: error.message,
      });
    }
  },
);

app.put(
  "/projects/:id",
  authenticateToken,
  upload.single("image"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const {
        title,
        titleEn,
        description,
        descriptionEn,
        repoUrl,
        technologies,
        deployInput,
        type,
        image,
        challenge,
        challengeEn,
        solution,
        solutionEn,
        learned,
        learnedEn,
      } = req.body;

      const parsedTechnologies =
        typeof technologies === "string"
          ? JSON.parse(technologies)
          : technologies;

      const updateData = {
        title,
        titleEn,
        description,
        descriptionEn,
        repoUrl,
        deployInput,
        technologies: parsedTechnologies,
        type,
        image,
        challenge,
        challengeEn,
        solution,
        solutionEn,
        learned,
        learnedEn,
      };

      if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
      }

      const updatedProject = await prisma.project.update({
        where: { id: parseInt(id) },
        data: updateData,
      });
      res.json(updatedProject);
    } catch (error) {
      console.error("ERRO AO ATUALIZAR PROJETO:", error);
      res
        .status(500)
        .json({ message: "Não foi possível atualizar o projeto." });
    }
  },
);

app.delete("/projects/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.project.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Não foi possível excluir o projeto." });
  }
});

const PORT = process.env.PORT || 3000;
async function startServer() {
  try {
    await prisma.$connect();
    console.log("Conectado ao banco com sucesso.");
    console.log("PORT recebida:", process.env.PORT);
    console.log("Subindo servidor na porta:", PORT);

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar servidor:", error);
    process.exit(1);
  }
}

startServer();

app.get("/health", (req, res) => {
  res.json({ ok: true, message: "API online" });
});

app.get("/db-test", async (req, res) => {
  try {
    const count = await prisma.project.count();
    res.json({ ok: true, totalProjects: count });
  } catch (error) {
    console.error("ERRO EM /db-test:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});
