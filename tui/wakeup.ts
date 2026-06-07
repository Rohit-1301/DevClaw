import {select, isCancel} from "@clack/prompts";
import chalk from "chalk";
import figlet from "figlet";
import { runCLIMode } from "../modes/cli";

const Banner_FONT='ANSI SHADOW';
const SHADOW = chalk.hex('#5b4d9e');
const FACE = chalk.hex('#e8dcf8').bold;

function printBannerWithShadow(ascii: string) {

  const bannerLines = ascii.replace(/\s+$/, '').split('\n');
  const maxLen = Math.max(...bannerLines.map((l) => l.length), 0);
  const rowWidth = maxLen + 2;

  for (const line of bannerLines) {
    console.log(SHADOW(('  ' + line).padEnd(rowWidth)));
  }
  process.stdout.write(`\x1b[${bannerLines.length}A`);
  for (const line of bannerLines) {
    console.log(FACE(line.padEnd(rowWidth)));
  }
  console.log();
}

export async function runWakeup() {
    let ascii:string;
    try {
        ascii=figlet.textSync("openclaw",{font:Banner_FONT});
    } catch (error) {
        ascii=figlet.textSync("openclaw",{font:"Standard"});
    }
    printBannerWithShadow(ascii);

    const mode=await select({
        message:"In which mode do you want to operate it",
        options:[
            {value:"cli",label:"CLI"},
            {value:"telegram",label:"Telegram"},
            {value:"exit",label:"Exit"},
        ]
    });

    if(mode==="exit"){
        console.log(chalk.dim("GoodBye Don"));
        return;
    }

    if(mode==="cli"){
        await runCLIMode();
   }
    else if(mode==="telegram"){
        console.log(chalk.dim("Starting in Telegram......"));
    }

};
