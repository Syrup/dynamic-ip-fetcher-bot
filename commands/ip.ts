import type { Command, IP } from "../types";

export default {
  command: "ip",
  description: "Get your public IP",
  async run(bot, ctx) {
    let user = await ctx.getAuthor();
    const USER_ID = bot.config.userId;

    if (user.user.id !== USER_ID)
      return ctx.reply("You are not authorized to use this bot.");

    let api = "https://api.ipify.org/?format=json";

    let res: IP = await fetch(api).then((r) => r.json());

    let ip = res.ip;

    ctx.reply("Here's your public IP: " + ip);
  },
} satisfies Command;
