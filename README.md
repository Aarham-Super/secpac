# 🔐 SECPAC

[![npm version](https://img.shields.io/npm/v/secpac.svg)](https://www.npmjs.com/package/secpac)
[![npm downloads](https://img.shields.io/npm/dm/secpac.svg)](https://www.npmjs.com/package/secpac)

Secure Environment Config & Protected Access Controller

SECPAC is a modern Node.js CLI tool for managing environment variables in a simple, structured, and optionally secure way.

It works like .env but adds CLI control, password protection, ignore system support, and better developer workflow tools.

---

# 💡 What SECPAC Does

SECPAC helps you manage API keys, database URLs, tokens, secrets, and environment variables using a simple CLI system.

---

# 🚀 Installation

npm install -g secpac

---

# ⚙️ QUICK START

secpac init

---
# 🌐 Website

NPM link = npmjs.com/package/secpac

Github Repo Link = github.com/Aarham-Super/secpac






# 🔐 SET PASSWORD (OPTIONAL)

secpac set-pass

---

# 👀 VIEW ALL SECRETS

secpac view

---

# 🔑 GET SPECIFIC VALUE

secpac get API_KEY

---

# 📦 LIST ALL KEYS

secpac keys

---

# 🛡️ ADMIN MODE

secpac admin

---

# 🚫 IGNORE SYSTEM

Create a file named:
.secpacignore

Example:
PASSWORD SECRET_KEY DEBUG TEMP

---

# 📄 EXAMPLE .SECPAC FILE

API_KEY=123456 DATABASE_URL=localhost PORT=3000 DEBUG=true

---

# ⚙️ ALL COMMANDS (FULL LIST)

secpac init
secpac set-pass
secpac view
secpac get <KEY>
secpac keys
secpac admin

---

# 🔥 HOW IT WORKS

SECPAC reads your config file and lets you:
- manage environment variables
- protect secrets with password
- ignore sensitive keys
- control access via CLI

---

# 💡 FEATURES

- .env alternative system
- optional password security
- CLI-based access
- key/value management
- ignore file support
- lightweight design

---

# 🧠 PHILOSOPHY

Simple configuration, powerful when needed.

---

# 👨‍💻 AUTHOR

Aarham  
GitHub: [https://github.com/Aarham-Super/secpac](https://github.com/Aarham-Super/secpac)  
NPM: [https://www.npmjs.com/package/secpac](https://www.npmjs.com/package/secpac)

---

# 📌 LICENSE

MIT
