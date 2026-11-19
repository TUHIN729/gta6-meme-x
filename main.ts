import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Hands in the X post: copies this repository's POST.json to the output
// directory, byte for byte. No network, no clock, no files outside the repo.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
