const fs = require("fs/promises");

fs.rm(`./rc`, {
  recursive: true,
  force: true,
});
