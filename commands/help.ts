import type { Command } from "../types";

export default {
  command: "help",
  description: "Show help",
  async run(bot, ctx) {
    let commands = await ctx.api.getMyCommands();
    let message = "Here's a list of commands:\n\n";
    commands.forEach((command) => {
      message += `/${command.command} - ${command.description}\n`;
    });
    ctx.reply(message);
  },
} satisfies Command;
