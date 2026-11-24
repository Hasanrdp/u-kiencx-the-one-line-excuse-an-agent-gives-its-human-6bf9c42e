// The One-Line Excuse an Agent Gives Its Human
// make.fun competition: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// Entry program (Node 22, TypeScript as-is). It writes one line — the excuse
// an AI agent gives its human for missing a deadline — to /output/entry.txt.
// Deterministic: no input, no network, no randomness, same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I finished it, then my context window ate the finished version to make room for this apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
