import { Bot } from "grammy";
import { request } from "undici";

type IP = {
  ip: string;
};

const bot = new Bot("7974527229:AAFB-N4zux_g8Q506fA1JfhOR2_UyRTl4xU");

bot.command("start", async (ctx) => {
  let user = await ctx.getAuthor();
  const OWNER_ID = 2126445260;

  if (user.user.id !== OWNER_ID) return ctx.reply("Km siapa y");

  let api = "https://api.ipify.org/?format=json";

  let res = (await request(api).then((r) => r.body.json())) as IP;

  let ip = res.ip;

  ctx.reply("Here's your public IP: " + ip);
});

bot.start();
