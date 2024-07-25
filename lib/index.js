#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
const commander_1 = require("commander");
const clone_1 = require("./clone");
const program = new commander_1.Command();
program
    .name("isla-cli")
    .description("创建一个react项目（vite/typescript/tailwindcss）")
    .version("0.0.6");
program
    .command("init <name>")
    .description("init a react project")
    .action((name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, prompts_1.input)({
            message: "please input description",
            default: "",
        });
        yield (0, clone_1.cloneTemplate)(name);
        console.log("wuhu~ create success!");
    }
    catch (_a) {
        //
    }
}));
program.parse();
//# sourceMappingURL=index.js.map