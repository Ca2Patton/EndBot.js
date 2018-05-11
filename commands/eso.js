module.exports = {
    name: 'eso',
    description: 'Display information about the ElderScrolls online guild',
    execute(message, args) {
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
                "fields": [{
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
};