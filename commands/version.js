module.exports = {
    name: 'version',
    description: 'Prints version number',
    execute(message, args) {
        message.channel.send('version 0.0.2');
    }
};