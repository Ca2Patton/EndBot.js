const { Client, MessageEmbed } = require('discord.js');
const { prefix, token, channel_greeting } = require('./config.json');
const fs = require('fs');

const client = new Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

if (!message.content.startsWith(prefix) || message.author.bot) return;

client.on('ready', () => {
    console.log('Endbot ready for chat!');
});


const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();

if (!client.commands.has(commandName)) return;

try {
    command.execute(message, args);
}

catch(error) {
    console.error(error);
    message.reply('There was an error trying to execute the command! Please notify @Kurayami-chanTheOriginalSpam if the issue persists.');
}
/*
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', channel_greeting);
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
    if (message.content ===`${prefix}eso`) {
        message.channel.send({ 
            embed: {
            "title": "TheEndless[ESO]",
            "description": "Welcome Elder Scrollers! I am the Guildmaster Fawkes35.\n Please feel free to reach out to others using `@elderscrollers` if you need any help with quests or dungeons.\n Make sure you have an **Aldmeri Dominion** character if you're interested in running PVP with the guild.\n Thank you, and Happy Grinding!",
            "url": "https://discordapp.com",
            "color": 12337681,
            "timestamp": new Date(),
            "footer": {
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
              "text": "Missing or Incorrect information? Ping @Kurayami-chanTheOriginalSpam to get it corrected"
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "author": {
              "name": "Fawkes35",
              "url": "https://discordapp.com",
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "fields": [
              {
                "name": "Guildmaster",
                "value": "Fawkes35"
              },
              {
                "name": "Faction",
                "value": "Aldmeri Dominion"
              },
              {
                "name": "Crafters",
                "value": "WIP",
                "inline": true
              }
            ]
          }
        });
    }
});

client.on('message', message => {
    if (message.content ===`${prefix}version`) {
        message.reply('Version 0.0.1');
    }
});
*/
client.login(token);
