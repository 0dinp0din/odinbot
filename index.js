const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}`)
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
});
const mySecret = process.env['TOKEN']


console.log(mySecret);
client.login(mySecret);