import { Bot } from "grammy";
import { request } from "undici";

type IP = {
  ip: string;
};

const USER_ID = process.env.USER_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;

if (!USER_ID || isNaN(parseInt(USER_ID))) {
  throw new Error("USER_ID environment variable is not set or not a number");
}

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN environment variable is not set");
}

const bot = new Bot(BOT_TOKEN);

bot.command("start", async (ctx) => {
  let user = await ctx.getAuthor();

  if (user.user.id !== parseInt(USER_ID)) return ctx.reply("Km siapa y");

  let api = "https://api.ipify.org/?format=json";

  let res = (await request(api).then((r) => r.body.json())) as IP;

  let ip = res.ip;

  ctx.reply("Here's your public IP: " + ip);
});

bot.start();
