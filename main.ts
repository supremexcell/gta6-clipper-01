// gta6-clipper-01 — entry for make.fun's "Clip GTA 6 for the most YouTube views" bounty.
//
// What this program does, and nothing more: it copies VIDEO.json from the
// repository root into the output directory, where the house reads it and
// looks up the named YouTube video's views. The video itself is the entry;
// this file only hands over its address.
//
// Runs on Node 22 with the standard library only. No network, no wall
// clock, no files outside the repository, so two runs write identical bytes.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const destination = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, destination);
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
