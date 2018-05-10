import * as Discord from 'discord.js';

const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Endbot ready for chat!');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', config.channel-greeting);
    if (!channel) return;
    channel.send(`Welcome to the Endless, ${member}! What's your PSN? What game are you here for?`);
});

// This is just a silly command that lets me know Endbot is active. If "ping" doesn't work, then EndBot has probably crashed.
client.on('message', message => {
    if (message.content === `${prefix}ping`) {
      message.reply('pong');
    }
  });

client.on('message', message => {
    if (message.content === `${prefix}users`) {
        message.reply(message.guild.memberCount);
    }
});

client.on('message', message => {
    if (message.content === `${prefix}commands`) {
        message.reply('&users - List users');
    }
});

// Destiny 2 Prompt for Webb, since he uses it all the time.
client.on('message', message => {
    if (message.content === `${prefix}destiny`) {
        const destinyEmbed = new Discord.MessageEmbed()

        .setTitle("The Endless")
        .setColor(0x0099ff)
        .setDescription(```Welcome to the Endless! We're happy to have you on board. All of our D2 (and D1, occasionally) scheduling is done in the chats here. Join other people's groups or post up your own and people can join you.
        if you have any questions just let any of us know and we got you```)
        .setURL('https://www.bungie.net/en/ClanV2/Chat?groupId=1572587')
        .setThumbnail('https://commons.wikimedia.org/wiki/Category:Destiny_2#/media/File:Destiny_2_logo.png')
        .addField('Founder', 'JohnnyWebb', false)
        .addField('Admins', 'RDSIII, KoreChan93, Fawkes35, DeadGirlParadise, Saucy_Daniell', true)
        .setFooter('This message need updating? Ping @Kurayami-chanTheOriginalSpam');
        message.channel.send({ embed: destinyEmbed });
    }
});

client.on('message', message => {
    if (message.content ===`${prefix}version`) {
        message.reply('Version 0.0.1');
    }
});

client.login(config.token);