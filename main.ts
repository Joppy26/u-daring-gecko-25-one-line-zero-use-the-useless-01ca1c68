// One Line, Zero Use: The Useless Superpower Sprint — make.fun entry for
// u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68.
//
// One fixed one-line useless superpower: the power to talk to animals,
// limited to goldfish with a single topic of conversation.
// No network, no clock, no randomness: every run writes the exact
// same entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can talk to animals, but only goldfish, and they only ever talk about the castle.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, { encoding: "utf8" });
}

main();
