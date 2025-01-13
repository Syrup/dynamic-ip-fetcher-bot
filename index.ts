import Bot from "./cores/Bot";

const bot = new Bot();

await bot.startBot();

bot.catch((err) => console.error(err));

console.log("Bot started");
console.log(bot.commands);

bot.commands.forEach((command) => {
  bot.command(command.command, command.run.bind(null, bot));
  console.log(`Registered command: ${command.command}`);
});
