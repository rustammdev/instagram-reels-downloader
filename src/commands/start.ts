import { bot } from "../core/bot";
import { startController } from "../controller";
import { Message } from "grammy/types";


bot.command("start", startController, (Message) => {console.log(Message);
});
