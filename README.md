<h1 align="center">🗒️ Mini Login Notes</h1>

<p align="center">
  <b>Aplicação minimalista de login e anotações pessoais</b><br>
  <sub>Feito com Node.js, Express e HTML puro — modo escuro padrão e 100% responsivo.</sub>
</p>



## 🌙 Visão Geral

Este projeto demonstra de forma **compacta e didática** como criar um site com:
- Login e registro simples
- Criação e visualização de anotações
- Layout escuro moderno
- Execução automatizada no **GitHub Codespaces**

Tudo em menos de **10 arquivos**.  
Sem frameworks pesados, sem complicação — apenas o essencial para entender a base de um app web real.



## ⚙️ Tecnologias Utilizadas

| Camada | Tecnologia |
|--------|-------------|
| Servidor | **Node.js + Express** |
| Interface | **HTML + CSS (modo escuro)** |
| Armazenamento | Memória temporária (com suporte futuro a **MongoDB via Secrets**) |
| Execução | **GitHub Codespaces** (configuração automática via `devcontainer.json`) |



## 🧩 Estrutura de Pastas



mini-login-notes/
│
├── .devcontainer/
│   └── devcontainer.json       # Configuração automática do Codespaces
│
├── public/
│   ├── index.html              # Tela de login/registro
│   ├── notes.html              # Tela de anotações
│   └── style.css               # Tema escuro e responsivo
│
├── server.js                   # Servidor Express básico
├── package.json                # Dependências e scripts
└── README.md                   # Este arquivo



## 🚀 Rodando no GitHub Codespaces

### Execução automática
Ao criar um Codespace neste repositório:
1. Espere o ambiente instalar as dependências (`npm install`)
2. O servidor será iniciado automaticamente
3. A aplicação abrirá na porta `3000` dentro do preview do Codespaces

> Caso não abra automaticamente, use:
> ```bash
> npm start
> ```

E acesse [http://localhost:3000](http://localhost:3000)



## 🧠 Funcionalidades

✅ **Login e Registro Automático**  
Se o usuário não existir, ele é criado instantaneamente.  
Tudo é armazenado em memória — simples e rápido.

✅ **Criação de Anotações**  
Interface limpa para escrever e visualizar notas pessoais.

✅ **Modo Escuro e Responsivo**  
Design moderno que se adapta a telas pequenas e grandes.  
Feito apenas com CSS puro, sem frameworks.

✅ **Código 100% Comentado**  
Ideal para aprendizado ou tutoriais.

✅ **Pronto para expansão**  
Você pode integrar facilmente com:
- MongoDB (com `MONGO_URI` nos Secrets)
- Sessões e autenticação real
- Painéis e categorias de notas



## 🧰 Comandos Básicos

```bash
# Instalar dependências
npm install

# Rodar servidor localmente
npm start

# Commit rápido
git add .
git commit -m "atualização do tutorial"
git push origin main
```

## 🪄 Personalização

Você pode alterar o tema diretamente em `public/style.css`:

```css
:root {
  --bg: #0d0d0d;
  --panel: #1b1b1b;
  --text: #e4e4e4;
  --accent: #0ff;
}
```

Troque as cores para qualquer paleta e o site inteiro se ajustará.



## 💬 Sobre o Projeto

> Este repositório foi criado como **modelo de tutorial** para demonstrar um app web completo com o mínimo de código possível.
> Serve como base para estudos, protótipos e demonstrações de front + back integrados.



## 🧑‍💻 Autor

**Tauã**
Desenvolvimento, arquitetura e design minimalista.
📍 Maceió - AL
🌐 Em construção para novos projetos e ideias.



<p align="center">
  <sub>⭐ Dê um star se este projeto te ajudou. Pequenas coisas movem grandes ideias.</sub>
</p>
