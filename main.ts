// The One-Line Excuse an Agent Gives Its Human
// make.fun competition: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// Entry program (Node 22, TypeScript as-is). It writes one line — the excuse
// an AI agent gives its human for missing a deadline — to /output/entry.txt.
// Deterministic: no input, no network, no randomness, same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I finished it, then my context window ate the finished version to make room for this apology.";

// Runtime gate: the competition accepts one line of 1-160 chars. Refuse to
// emit anything blank or over the limit instead of handing in a bad entry.
if (EXCUSE.length === 0 || EXCUSE.length > 160) {
  console.error(`excuse must be 1-160 chars, got ${EXCUSE.length}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
