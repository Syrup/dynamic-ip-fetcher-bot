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

bot.command("ip", async (ctx) => {
  let user = await ctx.getAuthor();

  // console.log(await bot.api.getMyCommands());

  if (user.user.id !== parseInt(USER_ID))
    return ctx.reply("You are not authorized to use this bot.");

  let api = "https://api.ipify.org/?format=json";

  let res = await request<IP>(api).then((r) => r.body.json() as Promise<IP>);

  let ip = res.ip;

  ctx.reply("Here's your public IP: " + ip);
});

bot.command("getid", async (ctx) => {
  let { user } = await ctx.getAuthor();

  ctx.reply(`Your user ID is: \`${user.id}\``, { parse_mode: "MarkdownV2" });
});

bot.command("start", (ctx) => {
  ctx.reply("Bot started successfully!");

  ctx.reply(
    "Type /help to get a list of commands, or type /ip to get your public IP.",
  );
});

bot.command("help", async (ctx) => {
  let commands = await bot.api.getMyCommands();
  let message = "Here's a list of commands:\n\n";
  commands.forEach((command) => {
    message += `/${command.command} - ${command.description}\n`;
  });
  ctx.reply(message);
});

const DEFAULT_COMMANDS = [
  { command: "ip", description: "Get your public IP" },
  { command: "start", description: "Start the bot" },
  { command: "help", description: "Get help" },
  { command: "getid", description: "Get your user ID" },
];

await bot.api.setMyCommands(DEFAULT_COMMANDS);

bot.catch((err) => console.error(err));

await bot.start();
