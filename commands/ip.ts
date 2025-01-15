import type { Command, IP } from "../types";

export default {
  command: "ip",
  description: "Get your public IP",
  async run(_bot, ctx) {
    let api = "https://api.ipify.org/?format=json";

    let res: IP = await fetch(api).then((r) => r.json());

    let ip = res.ip;

    ctx.reply(`Here's your public IP: \`${ip}\``, { parse_mode: "MarkdownV2" });
  },
} satisfies Command;
