module.exports = {
    name: 'add-role',
    description: 'Add a user to one of the chat groups',
    args: true,
    usage: '<user>',
    execute(message, args) {
        if (!message.guild) return;

        const member = message.mentions.members.first();
        // Prompt user for a response.

        const roles = [{
            "question": "Which role is the user being added to?",
            "answers": ["endless", "overwatchheroes", "elderscrollers", "esocrafters", "trekkies", "minecrafters", "fortniters", "darksoulers", "Flatlanders", "West Best Coast", "bEast Coasters", "monsterhunters"]
        }];
        const item = roles[Math.floor(Math.random() * roles.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, {
                    maxMatches: 1,
                    time: 30000,
                    errors: ['time']
                })
                .then(collected => {
                    const role = collected.first().content;
                    message.channel.send(`${member} specified role is ${role}.`);

                    const new_role = message.guild.roles.find('name', `${role}`);
                    member.addRole(new_role).catch(console.error);
                })
                .catch(collected => {
                    message.channel.send('Request timed out waiting for a response, or the specified role does not exist.');
                });
        });
    }
};