// context = ctx
import { Context } from "grammy";

const startController = async (ctx: Context) => {
  await ctx.reply("You are entered /start !");
};

export { startController };
