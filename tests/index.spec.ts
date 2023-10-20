import type { ExecaChildProcess } from "execa";
import { execa } from "execa";
import * as path from "path";
import { fileURLToPath } from 'url';

const EXTENSIONS = ".ts,.tsx,.cts,.mts";
const NO_IGNORE_FLAG = "--no-ignore";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const eslintModulePath = path.resolve(__dirname, "../node_modules/.bin/eslint");

async function lintProject(projectName: string): Promise<ExecaChildProcess<string>> {
  const projectPath = path.resolve(__dirname, "fixtures", projectName);
  const commandArguments = ["--ext", EXTENSIONS, NO_IGNORE_FLAG];

  try {
    return await execa(
      eslintModulePath,
      [`${projectPath}/`, ...commandArguments],
      {
        cwd: projectPath,
      }
    );
  } catch (error) {
    return error;
  }
}

describe("ESLint configuration", () => {
  test("should lint .ts files", async () => {
    const { stdout } = await lintProject("ts");
    expect(stdout).toMatch("@typescript-eslint/no-extraneous-class");
  });
});
