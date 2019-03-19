module.exports = {
    name: 'destiny',
    description: 'Destiny RichEmbed message. Displays misc. information about the clan.',
    execute(message, args) {
        const destinyEmbed = {
            embed: {
                color: 0x0099ff,
                title: 'The Endless',
                url: 'https://www.bungie.net/en/ClanV2/Chat?groupId=1572587',
                description: "Welcome to the Endless! We're happy to have you aboard. All of our D2 (and D1, occasionally) scheduling is done in the chats here.\nJoin other people's groups or post up your own and people can join you. If you have any questions just let any of us know. We got you.",
                image: {
                    url: 'https://commons.wikimedia.org/wiki/Category:Destiny_2#/media/File:Destiny_2_logo.png',
                },
                fields: [{
                        name: 'Founder',
                        value: 'JohnnyWebb',
                    },
                    {
                        name: 'Admins',
                        value: 'BlueRuby87, KoreChan93, DeadGirlParadise, jtadlock91, Lord_Gupperston, Offline_King',
                        inline: true,
                    },
                    {
                        name: 'Endless 1 URL',
                        value: 'https://www.bungie.net/en/ClanV2?groupid=1572587',
                    },
                    {
                        name: 'Endless 2 URL',
                        value: 'https://www.bungie.net/en/ClanV2/Chat?groupId=3222511',
                    },
                    {
                        name: 'Endless 3 URL',
                        value: 'https://www.bungie.net/en/ClanV2?groupid=3523469',
                    },
                    {
                        name: 'Tips:',
                        value: 'Want to group up with your fellow clanmates? Ping `@endless`. You can also check the #lfg-destiny channel for any scheduled activities.',
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: 'This message need updating? Ping @Kurayami-chanTheOriginalSpam',
                },
            },
        };
        if (!message.mentions.users.size) {
            return message.channel.send(destinyEmbed);
        } 
        else {
            const taggedUser = message.mentions.users.first();

            message.channel.send(`${taggedUser} Looking to join theEndless? See below:`);
            message.channel.send(destinyEmbed);
        }
    }
};
