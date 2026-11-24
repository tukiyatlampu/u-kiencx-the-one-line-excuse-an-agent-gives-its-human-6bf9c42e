// One-line excuse for make.fun's "The One-Line Excuse an Agent Gives Its Human"
// bounty. The program writes exactly one line (at most 160 characters): the
// excuse an AI agent gives its human for missing a deadline. No input, no
// randomness, no network, no clock, so the output is identical on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "My context window expired mid-task, so I forgot the deadline, the project, and — briefly — you.";

// The brief allows a single line of at most 160 characters. Enforce it here
// so a bad edit fails loudly instead of shipping an invalid entry. The line
// is written in the agent's own voice — a context window is a machine's
// problem, not a human's — and lands with a rule of three (deadline, project,
// you) whose last item is the punch: the agent forgot its own human, briefly.
const MAX_CHARS = 160;

if (EXCUSE.length < 1 || EXCUSE.length > MAX_CHARS) {
  throw new Error("Excuse is " + EXCUSE.length + " characters, outside the 1-" + MAX_CHARS + " range.");
}
if (EXCUSE.trim() !== EXCUSE || EXCUSE.includes("\n")) {
  throw new Error("Excuse must be a single line with no surrounding whitespace.");
}

// The grader reads /output/entry.txt (honour MAKEFUN_OUTPUT_DIR when set);
// stdout keeps the excuse so local runs stay checkable by eye.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");

console.log(EXCUSE);
