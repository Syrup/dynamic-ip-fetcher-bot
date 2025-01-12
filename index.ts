import { Bot } from "grammy";
import { request } from "undici";

type IP = {
  ip: string;
};

const BOT_TOKEN = process.env.BOT_TOKEN;
const USER_ID = process.env.USER_ID;

if (!BOT_TOKEN || !USER_ID) {
  throw new Error("Missing BOT_TOKEN or USER_ID in environment variables");
}

const bot = new Bot(BOT_TOKEN);

bot.command("start", async (ctx) => {
  let user = await ctx.getAuthor();
  const OWNER_ID = parseInt(USER_ID);

  if (user.user.id !== OWNER_ID) return ctx.reply("Km siapa y");

  let api = "https://api.ipify.org/?format=json";

  let res = (await request(api).then((r) => r.body.json())) as IP;

  let ip = res.ip;

  ctx.reply("Here's your public IP: " + ip);
});

bot.start();
