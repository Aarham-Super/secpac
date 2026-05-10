import fs from "fs";
import path from "path";

let cache = {};
let locked = false;
let password = null;

/**
 * Load .secpac file and inject into process.env
 * @param {string} filePath - Path to the config file (default: .secpac)
 */
export function load(filePath = ".secpac") {
  const fullPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    throw new Error("❌ .secpac file not found. Run 'secpac init' to create one.");
  }

  const data = fs.readFileSync(fullPath, "utf8");

  // Reset cache for fresh load
  cache = {};

  data.split("\n").forEach((line) => {
    // Ignore comments and empty lines
    if (!line.trim() || line.trim().startsWith("#")) return;

    const [key, ...rest] = line.split("=");
    const value = rest.join("=").trim();

    if (key && value) {
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      cache[trimmedKey] = trimmedValue;
      
      // CRITICAL: This makes the variables available in the app
      process.env[trimmedKey] = trimmedValue;
    }
  });
  
  return cache;
}

/**
 * Set password protection (Optional security layer)
 */
export function setPassword(pass) {
  password = pass;
  locked = true;
}

/**
 * Unlock system for sensitive viewing
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
 * Get a single value from the cache
 */
export function get(key) {
  return cache[key] || process.env[key];
}

/**
 * Get all values (Raw object)
 */
export function all() {
  return cache;
}

/**
 * List keys only - SECPAC Unique Feature
 * Useful for debugging without exposing secrets
 */
export function keys() {
  return Object.keys(cache);
}

/**
 * Safe view - Masks values if the system is locked
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
 * Admin-only full dump (Bypasses lock if password matches)
 */
export function adminDump(pass) {
  if (!password) return cache;
  if (pass === password) return cache;

  throw new Error("❌ Admin access denied");
}
