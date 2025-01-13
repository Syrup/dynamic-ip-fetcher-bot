import type { Command } from "../types";

export default {
  command: "start",
  description: "Start the bot",
  async run(bot, ctx) {
    ctx.reply("Bot started successfully!");
    ctx.reply(
      "Type /help to get a list of commands, or type /ip to get your public IP."
    );
  },
} satisfies Command;
