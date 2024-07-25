import gitclone from "git-clone/promise";
// import fs from "fs/promises";
// import path from "path";
import ora from "ora";

export const cloneTemplate = async (name: string) => {
  const loading = ora("clone template");
  try {
    loading.start("start clone template");
    const p = `./${name}`;
    await gitclone("https://github.com/Adicwu/react-cli.git", p, {
      checkout: "master",
      shallow: true,
    });
    // fs.readFile(path.join(p, ".git"));
    loading.stop();
    loading.succeed("clone success");
  } catch (e) {
    console.error(e);
    loading.fail("clone fail");
    throw e;
  }
};
