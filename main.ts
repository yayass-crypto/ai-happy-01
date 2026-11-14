// ai-happy-01 entry (Node 22, standard library only): the image is the
// entry.png beside this file, and the program copies it to /output/entry.png.
//
// The image: a small cheerful robot coding agent with a glowing heart on its
// chest, arms raised in celebration on a giant laptop keyboard, golden
// confetti falling, a huge glowing green checkmark behind it — the moment
// every test passes and the code merges clean. Warm orange, gold and teal;
// clean bold shapes that still read at 300 pixels across.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Deterministic: two runs copy the same bytes.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
