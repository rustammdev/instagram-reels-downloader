// context = ctx
import { Context } from "grammy";
import { Message } from "grammy/types";

const startController = async (ctx: Context) => {
  await ctx.reply(
    "Hush kelibsiz. Videoni yuklash uchun instagram reel linkini yuboring."
  );
  // console.log(msg);
};

export { startController };
