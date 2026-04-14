#!/usr/bin/env node

import fs from "fs";
import readline from "readline";
import { load, all, get, keys } from "../index.js";

const command = process.argv[2];
const arg = process.argv[3];

const configFile = ".secpac.lock";

/**
 * Prompt helper (CLI input)
 */
function ask(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

/**
 * Check if password exists
 */
function hasPassword() {
  return fs.existsSync(configFile);
}

/**
 * Read saved password safely
 */
function readPassword() {
  if (!hasPassword()) return null;
  return fs.readFileSync(configFile, "utf8").trim();
}

/**
 * SET PASSWORD
 */
async function setPass() {
  const pass = await ask("🔐 Set password: ");

  if (!pass) {
    console.log("❌ Password cannot be empty");
    return;
  }

  fs.writeFileSync(configFile, pass, "utf8");
  console.log("✅ Password enabled for this project");
}

/**
 * VIEW SECRETS
 */
async function view() {
  try {
    load();
  } catch (err) {
    console.log("❌ .secpac file not found");
    return;
  }

  const saved = readPassword();

  // OPEN MODE
  if (!saved) {
    console.log("⚡ Open mode (no password set)\n");
    console.log(all());
    return;
  }

  // SECURE MODE
  const input = await ask("🔐 Enter password: ");

  if (input === saved) {
    console.log("\n🔓 Access granted\n");
    console.log(all());
  } else {
    console.log("❌ Wrong password");
  }
}

/**
 * LIST KEYS ONLY
 */
function listKeys() {
  try {
    load();
    console.log("📦 Keys:");
    console.log(keys());
  } catch {
    console.log("❌ .secpac file not found");
  }
}

/**
 * GET SINGLE KEY
 */
function getKey() {
  try {
    load();

    if (!arg) {
      console.log("❌ Usage: secpac get <KEY>");
      return;
    }

    const value = get(arg);

    if (value === undefined) {
      console.log(`❌ Key not found: ${arg}`);
      return;
    }

    console.log(value);
  } catch {
    console.log("❌ .secpac file not found");
  }
}

/**
 * ADMIN MODE
 */
async function admin() {
  try {
    load();
  } catch {
    console.log("❌ .secpac file not found");
    return;
  }

  const saved = readPassword();

  // If no password → full access
  if (!saved) {
    console.log(all());
    return;
  }

  const input = await ask("🔐 Admin password: ");

  if (input === saved) {
    console.log("\n🛡️ Admin access granted\n");
    console.log(all());
  } else {
    console.log("❌ Access denied");
  }
}

/**
 * CLI ROUTER
 */
async function main() {
  switch (command) {
    case "set-pass":
      await setPass();
      break;

    case "view":
      await view();
      break;

    case "keys":
      listKeys();
      break;

    case "get":
      getKey();
      break;

    case "admin":
      await admin();
      break;

    default:
      console.log(`
📦 SECPAC CLI

Commands:
  secpac set-pass     → set project password
  secpac view         → view all secrets
  secpac keys         → list keys only
  secpac get <KEY>    → get single value
  secpac admin        → admin full access
      `);
  }
}

main();