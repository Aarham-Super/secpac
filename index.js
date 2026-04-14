import fs from "fs";
import path from "path";

let cache = {};
let locked = false;
let config = null;
let password = null;

/**
 * Load .secpac file (dotenv style)
 */
export function load(filePath = ".secpac") {
  const fullPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    throw new Error("❌ .secpac file not found");
  }

  const data = fs.readFileSync(fullPath, "utf8");

  cache = {};

  data.split("\n").forEach((line) => {
    if (!line.trim()) return;

    const [key, ...rest] = line.split("=");
    const value = rest.join("=").trim();

    if (key && value) {
      cache[key.trim()] = value;
    }
  });
}

/**
 * Set password protection (optional feature)
 */
export function setPassword(pass) {
  password = pass;
  locked = true;
}

/**
 * Unlock system
 */
export function unlock(pass) {
  if (!password) return true;

  if (pass === password) {
    locked = false;
    return true;
  }

  throw new Error("❌ Wrong password");
}

/**
 * Get single value
 */
export function get(key) {
  return cache[key];
}

/**
 * Get all values (raw - admin use)
 */
export function all() {
  return cache;
}

/**
 * List keys only (your UNIQUE feature)
 */
export function keys() {
  return Object.keys(cache);
}

/**
 * Safe view (hides values if locked)
 */
export function safe() {
  if (!locked) return cache;

  const hidden = {};
  for (const key in cache) {
    hidden[key] = "[LOCKED]";
  }
  return hidden;
}

/**
 * Admin-only full dump (bypasses lock if unlocked)
 */
export function adminDump(pass) {
  if (!password) return cache;

  if (pass === password) return cache;

  throw new Error("❌ Admin access denied");
}