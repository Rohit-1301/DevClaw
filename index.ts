#!/usr/bin/env bun yeh jo line hai usse shebang
// bolte hai yeh computer ko batata hai ki isko execute karo with the help of bun

import { Command } from "commander";
import {runWakeup}  from "./tui/wakeup";

const program = new Command();

program.name("openClaw").description("CLI Tool").version("0.1");

program.command("Wakeup").description("Show the banner of CLI").action(async () => {
    await runWakeup();
});

await program.parseAsync(process.argv);