require("dotenv").config();

const Discord = require("discord.js");
const { Client, MessageAttachment } = require("discord.js");

// Create an instance of a Discord client
const bot = new Client();
const token = process.env.DISCORD_TOKEN;

bot.on("ready", (user) => {
  console.log(`${bot.user.username} Started`);
});

bot.on("message", async (msg) => {
  if (!msg.author.bot && ["789450109778919435", "788045009969479680", "884155630405967873", "884156287582081084"].indexOf(msg.channel.id) !== -1) {
    let message, attachment;

    switch (msg.channel.id) {
      case "789450109778919435":
        if (msg.attachments.size == 0) {
          message = `\n**PC showcase only!**\nAll discussions in <#788037245591617542>\n\n**Example:**\n- GTX 1080ti 11GB\n- AMD radeon 5 1600\n- Msi b350 gaming plus\netc...\n**Image required!**`;
          attachment = new MessageAttachment("https://mmm.dk/image/box/3031447/3920/50000.jpg");
        }
        break;
      case "788045009969479680":
        if (msg.attachments.size == 0) {
          message = `\n**Screenshots only!**\nAll discussions in <#788037245591617542>`;
          attachment = new MessageAttachment("https://static.planetminecraft.com/files/resource_media/screenshot/1806/0fvtgsv-1518390375.png");
        }
        break;
      case "884155630405967873":
        if (msg.attachments.size == 0) {
          message = `\n**Maps screenshots only!**\nAll discussions in <#884155479578775562>`;
          attachment = new MessageAttachment("https://static.planetminecraft.com/files/resource_media/screenshot/1812/2018-03-21-00-36-32-1521675372.png");
        }
        break;
      case "884156287582081084":
        if (msg.attachments.size == 0) {
          message = `\n**Mods screenshots only!**\nAll discussions in <#884156243604832256>`;
          attachment = new MessageAttachment("https://static.planetminecraft.com/files/image/minecraft/mod/2021/956/14863961-image_l.jpg");
        }
        break;
    }

    if (message) {
      msg.channel.send(`${msg.author} ${message}`, attachment).then((m) => {
        m.delete({ timeout: 60000 });
      });
    } else {
      msg.react("789807922061246464");
      msg.react("789807922041454602");
    }
  }

  if (["806523428768186419", "806523281112956938", "801771400137539584", "788037245591617540"].indexOf(msg.channel.id) !== -1) {
    msg.react("789807922061246464");
    msg.react("789807922041454602");
  }
});
bot.login(token);
