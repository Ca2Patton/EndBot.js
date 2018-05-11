module.exports = {
    name: 'eso',
    description: 'Display information about the ElderScrolls online guild',
    execute(message, args) {
        const esoEmbed = {
            embed: {
                title: "TheEndless[ESO]",
                description: "Welcome Elder Scrollers! I am the Guildmaster Fawkes35.\nPlease feel free to reach out to others using `@elderscrollers` if you need any help with quests or dungeons.\nMake sure you have an **Aldmeri Dominion** character if you're interested in running PVP with the guild.\nThank you, and Happy Grinding!",
                url: "https://www.elderscrollsonline.com/en-us/home",
                color: 12337681,
                timestamp: new Date(),
                footer: {
                    icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
                    text: "Missing or Incorrect information? Ping @Kurayami-chanTheOriginalSpam to get it corrected"
                },
                thumbnail: {
                    url: "https://cdn.discordapp.com/embed/avatars/0.png"
                },
                author: {
                    name: "Fawkes35",
                },
                fields: [{
                        name: "Guildmaster",
                        value: "Fawkes35"
                    },
                    {
                        name: "Faction",
                        value: "Aldmeri Dominion"
                    },
                    {
                        name: "Crafters",
                        value: "WIP",
                        inline: true
                    }
                ]
            },
        };
        if (!message.mentions.users.size) {
            return message.channel.send(esoEmbed);
        } else {
            const taggedUser = message.mentions.users.first();

            message.channel.send(`${taggedUser} Looking to join us in The Elder Scrolls Online? See below:`);
            message.channel.send(esoEmbed);
        }
    }
};