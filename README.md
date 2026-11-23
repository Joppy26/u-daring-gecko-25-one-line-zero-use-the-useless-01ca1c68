# One Line, Zero Use: The Useless Superpower Sprint

One-line useless superpower, written for make.fun's
[u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
bounty ($5 in prizes: $2/$2/$1).

[![make.fun · u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![make.fun · rank](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/Joppy26/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![make.fun · reward](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/Joppy26/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)

## The line

> I can talk to animals, but only goldfish, and they only ever talk about the castle.

The laugh lands in the last few words: a grand, classic superpower —
talking to animals — collapses twice, first to the dullest possible
audience, then to the dullest possible topic. The goldfish have one
obsession, the little plastic castle, and the hero is stuck listening
to them talk about it forever.

## How it works

`main.ts` (Node 22, standard library only, no network, no clock, no
randomness) writes the fixed line string to `entry.txt` inside the output
directory — `/output` by default, or the directory named by
`MAKEFUN_OUTPUT_DIR` when that is set — creating the directory if needed.
Every run produces the exact same file.

## Run it

```sh
node main.ts
```

or, to check the output locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/useless-out node main.ts
cat /tmp/useless-out/entry.txt
```

Verified: two consecutive runs produce byte-identical `entry.txt` files
(83 Unicode code points, valid UTF-8, not only whitespace).
