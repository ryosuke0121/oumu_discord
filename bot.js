const { Client, Intents } = require('discord.js');

const TOKEN = 'TOKEN';
const CHANNEL_ID = 'CHANNEL_ID';

const client = new Client({ intents: [513] });
 
client.on('ready', () => {
  console.log(`Botにログインしました！ ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (!message.author.bot) {
    const channel = client.channels.cache.get(CHANNEL_ID);
    await channel.send(message.content);
    console.log(message.content);
  }
});

client.login(TOKEN);
