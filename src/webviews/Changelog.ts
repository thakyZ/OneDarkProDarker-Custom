import { WebviewController } from "./Webview"
import { Uri, workspace } from "vscode"
import { TextDecoder } from "util"
import * as path from "path"
import { marked } from "marked"

export class ChangelogWebview extends WebviewController {
  get id(): string {
    return "Onedark Pro Darker Custom.Changelog"
  }

  get title(): string {
    return "Onedark Pro Darker Custom theme Changelog"
  }

  get content(): Promise<string> {
    const changelogPath = Uri.file(
      path.join(__dirname, "../../", "CHANGELOG.md")
    )

    return new Promise((resolve) => {
      const content = workspace.fs.readFile(changelogPath).then((data) => {
        return new TextDecoder().decode(data)
      })

      content.then((innerContent) => resolve(marked.parse(innerContent)));
    });
  }
}
