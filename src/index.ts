import { Bot } from "grammy";



const bot = new Bot("6910290143:AAEGjWDWd_otPDIvjb9C2k_F1gHLob4qtmY");


bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("Got another message!"));


bot.start();
