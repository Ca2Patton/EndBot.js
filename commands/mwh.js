module.exports = {
    name: 'mhw',
    description: 'Monster Hunter World information',
    execute(message, args) {
        const mhwEmbed = {
            embed: {
                title: 'The Endless[MHW]',
                description: "Welcome fellow Monster Hunter! I'm DeadGirlParadise, the admin for Monster Hunter World.\nI'm usually active Mon-Fri & very rarely on the Weekends.",
                url: 'http://www.monsterhunterworld.com/us/',
                timestamp: new Date(),
                fields: [{
                    name: 'How to Join',
                    value: "I'll make a post in the #monsterhunter channel with the ID of the Session, you'll need to be on the lookout.\nJoin in on the Session, and I'll add you to the squad. It's a very simple process. :-)"
                },
                {
                    name: 'Notifications',
                    value: 'Please make sure to use @monsterhunters or @mention to get player(s) attention if you would like us/them to join in on an activity.'
                },
                {
                    name: 'Miscellaneous',
                    value: 'Welcome to Monster Hunter World (The Endless). Happy hunting!'
                }
                ]
            }
        };
        if (!message.mentions.users.size) {
            return message.channel.send(mhwEmbed);
        } 
        else {
            const taggedUser = message.mentions.users.first();

            message.channel.send(`${taggedUser} Looking to join us in Monster Hunter World? See below:`);
            message.channel.send(mhwEmbed);
        }
    }
};