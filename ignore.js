import fs from "fs";

let ignoreList = [];

export function loadIgnore() {
  const file = ".secpacignore";

  if (!fs.existsSync(file)) return;

  const data = fs.readFileSync(file, "utf8");

  ignoreList = data
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));
}