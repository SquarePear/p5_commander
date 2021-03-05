// Determine which commands to run from command line interface

import { parse } from "../deps.ts";
import runGenerate from "./commands/generate.ts";
import runNew from "./commands/new.ts";
import runServe from "./commands/serve.ts";

const args = parse(Deno.args);

export default async () => {
  if (args._.length == 0) return;

  switch (args._[0].toString().toLowerCase()) {
    case "generate":
    case "gen":
    case "g":
      await runGenerate(args);
      return;
    case "new":
    case "n":
      await runNew(args);
      return;
    case "server":
    case "serve":
    case "s":
      await runServe(args);
      return;
    default:
      console.log("Command not found!");
      return;
  }
};
