// servidor básico com Express
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// dados simulados (sem banco)
let users = [];
let notes = [];

// configs básicas
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// rota raiz → tela de login
app.get("/", (req, res) => res.sendFile("index.html", { root: "public" }));

// login/registro
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  let user = users.find(u => u.name === name);
  if (!user) {
    user = { name, password };
    users.push(user);
  }
  res.redirect(`/notes?user=${encodeURIComponent(name)}`);
});

// página de anotações
app.get("/notes", (req, res) => res.sendFile("notes.html", { root: "public" }));

// salvar anotação
app.post("/save-note", (req, res) => {
  const { user, content } = req.body;
  if (user && content) notes.push({ user, content });
  res.redirect(`/notes?user=${encodeURIComponent(user)}`);
});

// listar notas (api simples)
app.get("/api/notes", (req, res) => {
  const { user } = req.query;
  res.json(notes.filter(n => n.user === user));
});

app.listen(PORT, () => console.log("Servidor rodando na porta", PORT));
