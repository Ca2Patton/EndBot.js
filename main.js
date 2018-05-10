const { Client, MessageEmbed } = require('discord.js');
const { prefix, token, channel_greeting } = require('./config.json');
const client = new Client();

client.on('ready', () => {
    console.log('Endbot ready for chat!');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', channel-greeting);
    if (!channel) return;
    channel.send(`Welcome to the Endless, ${member}! What's your PSN? What game are you here for?`);
});

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

client.on('message', message => {
    if (message.content === `${prefix}destiny`) {
        message.channel.send({ embed: {
            color: 0x0099ff,
            title: 'The Endless',
            url: 'https://www.bungie.net/en/ClanV2/Chat?groupId=1572587',
            description: "Welcome to the Endless! We're happy to have you aboard. All of our D2 (and D1, occasionally) scheduling is done in the chats here. Join other people's groups or post up your own and people can join you. If you have any questions just let any of us know. We got you.",
            image: {
                url: 'https://commons.wikimedia.org/wiki/Category:Destiny_2#/media/File:Destiny_2_logo.png',
            },
            fields: [
                {
                    name: 'Founder',
                    value: 'JohnnyWebb',
                },
                {
                    name: 'Admins',
                    value: 'RDSIII, KoreChan93, Fawkes35, DeadGirlParadise, Saucy_Daniell',
                    inline: true,
                },
                {
                    name: 'Clan URL',
                    value: 'https://www.bungie.net/en/ClanV2/Chat?groupId=1572587',
                },
            ],
            timestamp: new Date(),
            footer: {
                text: 'This message need updating? Ping @Kurayami-chanTheOriginalSpam',
            },
        },
      });
    }
});

client.on('message', message => {
    if (message.content ===`${prefix}version`) {
        message.reply('Version 0.0.1');
    }
});

client.login(token);