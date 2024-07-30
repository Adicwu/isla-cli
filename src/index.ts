#!/usr/bin/env node

import { input } from "@inquirer/prompts";
import { Command } from "commander";
import { cloneTemplate } from "./clone";

const program = new Command();

program
  .name("isla-cli")
  .description("创建一个react项目（vite/typescript/tailwindcss）")
  .version("0.0.7");

program
  .command("init <name>")
  .description("init a react project")
  .action(async (name: string) => {
    try {
      await input({
        message: "please input description",
        default: "",
      });
      await cloneTemplate(name);
      console.log("wuhu~ create success!");
    } catch {
      //
    }
  });

program.parse();
