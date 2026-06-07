import { select, isCancel } from "@clack/prompts";
import chalk from "chalk";

export async function runCLIMode() {
    while (true) {
        const mode = await select({
            message: "please select your sub-mode in which you want to interact",
            options: [
                { value: "agent", label: "Agent-mode" },
                { value: "plan", label: "Plan-mode" },
                { value: "ask", label: "Ask-mode" },
                { value: "back", label: "Back to main-menu" },
            ]
        });
        if (isCancel(mode) || mode === "back") return;
        if (mode === "agent") {
            console.log("agent");
        }
        if (mode === "plan") {
            console.log("plan");
        }
        if (mode === "ask") {
            console.log("ask");
        }
        if (mode !== "agent" && mode !== "plan" && mode !== "ask") {
            console.log(chalk.yellow("\nThe given mode is not yet implemented\n"));
        }
    }
};