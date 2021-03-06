#!/usr/bin/env -S deno run -A --unstable

export const root = new URL(".", import.meta.url).pathname;
export const version = "v1.2.1";

import run from "./src/cli.ts";

// Run if executed directly
if (import.meta.main) run();
