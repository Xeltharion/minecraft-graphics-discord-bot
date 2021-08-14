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
  if (!msg.author.bot && (msg.channel.id == "789450109778919435" || msg.channel.id == "788045009969479680")) {
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
          attachment = new MessageAttachment("https://www.minecraft.net/content/dam/games/minecraft/marketplace/CommunityCelebration_TerraSwoop_header2.jpg.transform/minecraft-image-large/image.jpg");
        }
        break;
    }

    if (message) {
      msg.channel.send(`${msg.author} ${message}`, attachment).then((m) => {
        m.delete({ timeout: 60000 });
      });
      msg.delete();
    }
  }
});
bot.login(token);
