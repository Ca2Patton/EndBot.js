module.exports = {
    name: 'add-role',
    description: 'Add a user to one of the chat groups',
    args: true,
    execute(message, args) {
        if (!message.guild) return;

        const member = message.mentions.members.first();
        // Prompt user for a response.

        const roles = [{
            "question": "Which role is the user being added to?",
            "answers": ["bosses", "endless", "overwatchheroes", "elderscrollers", "esocrafters", "trekkies", "minecrafters", "fortniters", "darksoulers"]
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
                    message.channel.send(`Specified role is ${collected}.`);
                })
                .catch(collected => {
                    message.channel.send('Timed out waiting for a response. Please try again.');
                });
        });
    }
};