const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Ensure that endbot is running
client.on('ready', () => {
    console.log('Endbot ready for chat!');
});


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', channel_greeting);
    if (!channel) return;
    channel.send(`Welcome to the Endless, ${member}! What's your PSN? What game are you here for?`);
});

/*
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
