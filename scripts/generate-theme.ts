import { join } from "path";
import { Theme } from "../src/themes/Theme";
import * as defaultSettings from "../src/defaultConfig.json";
import * as darkerConfig from "../src/darkerConfig.json";
import { promises as fs } from "fs";

export function writeFile(path: string, data: unknown): Promise<void> {
  return fs.writeFile(path, JSON.stringify(data, null, 2));
}

async function main() {
  writeFile(
    join(__dirname, "..", "themes", "OneDark-Pro-darker-custom.json"),
    await Theme.init(defaultSettings)
  );

  writeFile(
    join(__dirname, "..", "themes", "OneDark-Pro-darker.json"),
    await Theme.init(darkerConfig)
  );
}
main();
