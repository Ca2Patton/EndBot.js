import { Guild } from 'discord.js';

const Discord = require('discord.js');
const client = new Discord.Client();

const token = ''; //Add client secret here.

client.on('ready', () => {
    console.log('Endbot ready for chat!');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'newmembers');
    if (!channel) return;
    channel.send(`Welcome to the Endless, ${member}! What's your PSN? What game are you here for?`);
});

client.on('message', message => {
    if (message.content === '&ping') {
      message.reply('pong');
    }
  });

client.on('message', message => {
    if (message.content === '&users') {
        message.reply(message.guild.memberCount);
    }
});

client.on('message', message => {
    if (message.content === '&commands') {
        message.reply =('&users - List users');
    }
});

client.login(token);