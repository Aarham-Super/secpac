# 🔐 SECPAC

> **Secure Environment Config & Protected Access Controller**

[![npm version](https://img.shields.io/npm/v/secpac.svg?style=flat-square)](https://www.npmjs.com/package/secpac)
[![npm downloads](https://img.shields.io/npm/dm/secpac.svg?style=flat-square)](https://www.npmjs.com/package/secpac)

SECPAC is a modern Node.js CLI tool for managing environment variables in a simple, structured, and optionally secure way. It works like .env but adds CLI control, password protection, and better developer workflow tools.

---

### 💡 What SECPAC Does
SECPAC helps you manage **API keys, database URLs, tokens, secrets, and environment variables** using a simple CLI system.

---

### 🚀 Installation
    npm install -g secpac

---

### ⚙️ QUICK START
    secpac init

---

### 🌐 Links
* **NPM:** https://www.npmjs.com/package/secpac
* **GitHub:** https://github.com/Aarham-Super/secpac

---

### 🛠️ COMMAND REFERENCE

| Command | Action |
| :--- | :--- |
| secpac set-pass | 🔐 SET PASSWORD - Protect your configuration (Optional) |
| secpac view | 👀 VIEW ALL SECRETS - Display all stored variables |
| secpac get <KEY> | 🔑 GET SPECIFIC VALUE - Retrieve one value (e.g. secpac get API_KEY) |
| secpac keys | 📦 LIST ALL KEYS - Show all key names without values |
| secpac admin | 🛡️ ADMIN MODE - Enter administrative control mode |

---

### 🚫 IGNORE SYSTEM
Create a file named .secpacignore to prevent specific keys from being managed.

**Example:**
    PASSWORD
    SECRET_KEY
    DEBUG
    TEMP

---

### 📄 EXAMPLE .SECPAC FILE
    API_KEY=123456 
    DATABASE_URL=localhost 
    PORT=3000 
    DEBUG=true

---

### 🔥 HOW IT WORKS
SECPAC reads your config file and empowers your workflow:
* **Manage** environment variables without manual file editing.
* **Protect** sensitive secrets with optional password encryption.
* **Ignore** specific keys automatically.
* **Control** everything via a fast CLI.

---

### 💡 FEATURES
* **.env alternative** for modern application security.
* **Optional password security** (hardens your local setup).
* **CLI-based access** for rapid development.
* **Key/value management** out of the box.
* **Ignore file support** (.secpacignore).
* **Lightweight design** with no heavy dependencies.

---

### 🧠 PHILOSOPHY
*"Simple configuration, powerful when needed."*

---

### 👨‍💻 AUTHOR
**Aarham** GitHub: https://github.com/Aarham-Super/secpac

---

### 📌 LICENSE
MIT
