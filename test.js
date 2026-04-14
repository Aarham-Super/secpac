import { define, load, read, safeAll } from "./index.js";

define({
  OPENAI_API_KEY: {
    required: true,
    secret: true
  },
  PORT: {
    type: "number",
    default: 3000
  },
  DEBUG: {
    type: "boolean",
    default: false
  }
});

load();

console.log(read("PORT"));
console.log(safeAll());