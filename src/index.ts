import { input } from "@inquirer/prompts";
import { Command } from "commander";
import { cloneTemplate } from "./clone";

const program = new Command();

program
  .name("isla-cli")
  .description("创建一个react项目（vite/typescript/tailwindcss）")
  .version("0.0.1");

program
  .command("init <name>")
  .description("init a react project")
  .action(async (name: string) => {
    await input({
      message: "please input description",
      default: "",
    });
    await cloneTemplate(name);
    console.log("create success！");
  });

program.parse();
