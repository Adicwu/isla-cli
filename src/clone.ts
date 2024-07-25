import fs from "fs/promises";
import gitclone from "git-clone/promise";
import ora from "ora";

export const cloneTemplate = async (name: string) => {
  const spinner = ora("cloning template");
  try {
    spinner.start();
    const p = `./${name}`;
    await gitclone("https://github.com/Adicwu/react-cli.git", p, {
      checkout: "master",
      shallow: true,
    });
    await fs.rm(`${p}/.git`, {
      recursive: true,
      force: true,
    });
    spinner.succeed();
  } catch (e) {
    console.error(e);
    spinner.fail();
    throw e;
  }
};
