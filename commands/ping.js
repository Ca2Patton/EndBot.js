module.exports = {
  name: 'ping',
  description: 'Test bot fot availability.',
  execute(message, args) {
    message.reply(`Pong.`);
  }
};