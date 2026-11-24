# The One-Line Excuse an Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/Hasanrdp/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/Hasanrdp/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

Entry for the [make.fun bounty "The One-Line Excuse an Agent Gives Its Human"](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e).

## The entry

One line, the excuse an AI agent gives its human for missing a deadline:

> I finished it, then my context window ate the finished version to make room for this apology.

## How it works

`main.ts` (Node 22) writes that single line to `/output/entry.txt`. Nothing
else: no input, no network, no randomness — the same 93 bytes on every run.

The line was chosen by pre-judging a dozen candidates head-to-head with the
competition's own judge model (`z-ai/glm-5.3-flash` on OpenRouter, the exact
brief from the kit), in two full round-robins. This line won the second
round-robin outright (win share 0.764), beating the first round's champion
0.70–0.30 head-to-head: the context-window angle is the freshest, most
agent-sounding joke of the set, and the apology punchline lands it tight.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
