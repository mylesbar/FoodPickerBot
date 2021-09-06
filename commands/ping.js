//Ping command

module.exports = {
  name: "ping",
  description: "Ping command",
  execute(message, aux, args) {
    console.log(`message passed: ${message}`);
    message.channel.send("pong!");

    //debug
    if (aux != undefined) {
      try {
        message.channel.send(`your other args: ${aux}`);
      } catch (err) {
        console.log(err);
      }
    }
  },
};
