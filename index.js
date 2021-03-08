require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;

client.login(TOKEN);

client.on('ready', () => {
  console.info(`[Bot] Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
	console.log('[Bot] ${client.user.tag} has spawned on server');
});

client.on('message', msg => {
  
  if (msg.content === '!osiris') {
    msg.reply('${taggedUser.username}');
    msg.channel.send('Type !info for info about avaliable commands');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});
