import { Context } from "grammy";
import axios from "axios";

// Likni moslikka tekshirish
const checkValidUrl = (url: string) => {
  const regex =
    /^https:\/\/www\.instagram\.com\/reel\/[A-Za-z0-9]+(\/|\?|&|#|$)/;
  return regex.test(url);
};

// Instagram API
const downloadeInstagramRell = async (url: string, ctx: Context) => {
  const options = {
    method: "GET",
    url: "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index",
    params: {
      url,
    },
    headers: {
      "X-RapidAPI-Key": "853db04c23mshf9ffade664da9f6p18734bjsn8f30058e4d48",
      "X-RapidAPI-Host":
        "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    // respons.data.media - da video linki kelmoqda
    await ctx.replyWithVideo(response.data.media, { caption: `${response.data.title}` });
    console.log(response.data.media);
    
  } catch (error) {
    console.error(error);
    await ctx.reply("Videoni yuklab bo'lmadi.");
  }
};

const messageController = async (ctx: Context) => {
  const message = ctx.message?.text as string;
  const isValid = checkValidUrl(message);

  if (isValid) {
    await ctx.reply(`Video yuklanmoqda...`);

    // Bot video yuboryapti degan holatda turadi
    await ctx.replyWithChatAction("upload_video");
    await downloadeInstagramRell(message, ctx);
  } else {
    await ctx.reply(`Yuborilgan xabar yaroqsiz!`);
  }
};

export { messageController };
