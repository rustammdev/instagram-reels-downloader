import { bot } from "../core/bot";
import "../commands/index";
import { messageController } from "../controller";

bot.on("message", messageController);
