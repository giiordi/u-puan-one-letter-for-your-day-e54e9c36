// One Letter for Your Day — entry letter "K" (hidden word: knackered).
//
// The gate: /output/entry.txt must hold exactly one character, a letter
// A-Z, and nothing else — no word, no gloss, no punctuation, no trailing
// newline. The letter stands for the word that describes the day.
//
// Why K: "knackered" is vivid and specific (a day that left you utterly
// spent, flat on the sofa, done in), funny the moment you hear it, and
// true to a real day — and K is its sharp, unobvious initial, not the
// generic A-for-amazing pick. The program itself writes only the letter.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "K";

function main(): void {
  // Gate check: exactly one character, a letter A-Z.
  if (!/^[A-Z]$/.test(LETTER)) {
    throw new Error(`entry must be exactly one letter A-Z, got ${JSON.stringify(LETTER)}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  // The output directory may not exist yet in the grading sandbox.
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LETTER, "utf8");
  console.log(`wrote ${JSON.stringify(LETTER)} to ${outPath}`);
}

main();
