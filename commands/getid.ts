import type { Command } from "../types";

export default {
  command: "getid",
  description: "Get your user ID",
  async run(_bot, ctx) {
    let { user } = await ctx.getAuthor();

    ctx.reply(`Your user ID is: \`${user.id}\``, { parse_mode: "MarkdownV2" });
  },
} satisfies Command;
