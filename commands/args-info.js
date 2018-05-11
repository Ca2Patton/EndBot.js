module.exports = {
    name: 'args-info',
    description: 'Information about arguments provided.',
    args: true,
    execute(message, args) {
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
        message.channel.send(`Arguments: ${args}\n Arguments length: ${args.length}`);
    },
};