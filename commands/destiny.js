module.exports = {
    name: 'destiny',
    description: 'Destiny RichEmbed message. Displays misc. information about the clan.',
    execute(message, args) {
        const destinyEmbed = message.channel.send({
            embed: {
                color: 0x0099ff,
                title: 'The Endless',
                url: 'https://www.bungie.net/en/ClanV2/Chat?groupId=1572587',
                description: "Welcome to the Endless! We're happy to have you aboard. All of our D2 (and D1, occasionally) scheduling is done in the chats here. Join other people's groups or post up your own and people can join you. If you have any questions just let any of us know. We got you.",
                image: {
                    url: 'https://commons.wikimedia.org/wiki/Category:Destiny_2#/media/File:Destiny_2_logo.png',
                },
                fields: [{
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
        if (!message.mentions.users.size) {
            return destinyEmbed;
        } 
        else {
            const taggedUser = message.mentions.users.first();

            message.channel.send(`${taggedUser} Looking to join theEndless? See below:`);
            message.channel.send({
                embed: {
                    color: 0x0099ff,
                    title: 'The Endless',
                    url: 'https://www.bungie.net/en/ClanV2/Chat?groupId=1572587',
                    description: "Welcome to the Endless! We're happy to have you aboard. All of our D2 (and D1, occasionally) scheduling is done in the chats here. Join other people's groups or post up your own and people can join you. If you have any questions just let any of us know. We got you.",
                    image: {
                        url: 'https://commons.wikimedia.org/wiki/Category:Destiny_2#/media/File:Destiny_2_logo.png',
                    },
                    fields: [{
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
    }
};