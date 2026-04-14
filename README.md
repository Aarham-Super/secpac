# 🔐 SECPAC

## Secure Environment Config & Protected Access Controller

SECPAC is a modern, lightweight configuration management system for Node.js applications.

It is designed as a flexible alternative to `.env`, extending it with optional security, structured CLI tools, and controlled access features — without adding unnecessary complexity.

---

# 📌 Overview

SECPAC provides a standardized way to manage environment variables and secrets in Node.js projects using a simple `KEY=value` format.

It maintains full compatibility with traditional `.env` workflows while introducing optional enhancements for access control and developer tooling.

---

# ⚙️ Core Principles

SECPAC is built on the following principles:

- Simplicity first — minimal learning curve
- Optional security — not enforced by default
- Developer-centric design — CLI-first workflow
- Lightweight architecture — no unnecessary dependencies
- Predictable behavior — consistent across environments

---

# ✨ Key Features

## ⚡ Standard `.env` Compatibility
SECPAC uses a familiar format:

```txt id="env_format"
API_KEY=your_api_key
DATABASE_URL=localhost
PORT=3000