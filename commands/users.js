module.exports = {
    name: 'users',
    description: 'Return the number of users currently in theEndless discord.',
    execute(message, args) {
        message.reply(message.guild.memberCount);
    }
};