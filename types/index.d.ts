import type { CommandContext, Context } from "grammy";
import type FetcherBot from "../cores/Bot";

export type Command = {
  command: string;
  description: string;
  run: (
    bot: FetcherBot,
    ctx: CommandContext<Context>
  ) => Promise<unknown> | unknown;
};

export type IP = {
  ip: string;
};

declare module "bun" {
  interface Env {
    BOT_TOKEN: string;
  }
}
