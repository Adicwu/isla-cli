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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneTemplate = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const promise_1 = __importDefault(require("git-clone/promise"));
const ora_1 = __importDefault(require("ora"));
const cloneTemplate = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const spinner = (0, ora_1.default)("cloning template");
    try {
        spinner.start();
        const p = `./${name}`;
        yield (0, promise_1.default)("https://github.com/Adicwu/react-cli.git", p, {
            checkout: "master",
            shallow: true,
        });
        yield promises_1.default.rm(`${p}/.git`, {
            recursive: true,
            force: true,
        });
        spinner.succeed();
    }
    catch (e) {
        console.error(e);
        spinner.fail();
        throw e;
    }
});
exports.cloneTemplate = cloneTemplate;
//# sourceMappingURL=clone.js.map