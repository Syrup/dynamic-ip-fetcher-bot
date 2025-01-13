import { Bot } from "grammy";
import { Glob } from "bun";
import config from "../config";
import type { Command } from "../types";

class FetcherBot extends Bot {
  public commands: Map<string, Command> = new Map();
  public config = config;

  constructor() {
    if (!process.env.BOT_TOKEN) {
      throw new Error("BOT_TOKEN environment variable is not set");
    }
    
    super(process.env.BOT_TOKEN);
  }

  async loadCommands() {
    const glob = new Glob(`${process.cwd()}/commands/*.ts`);

    for await (const path of glob.scan()) {
      const { default: command }: { default: Command } = await import(path);

      this.commands.set(command.command, command);
    }

    await this.api.setMyCommands(Array.from(this.commands.values()));
  }

  async startBot() {
    if (
      !config.userId ||
      (typeof config.userId !== "number" && parseInt(config.userId) === 0)
    )
      throw new Error("Please provide a valid user id in the config file");

    await this.loadCommands();

    super.start();
  }
}

export default FetcherBot;
