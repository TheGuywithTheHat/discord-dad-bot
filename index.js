const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    console.log(message.content)
    var match = /^(?:i'm|i am)\s+([\w\s',-]+)/i.exec(message.content);
    console.log(match)
    if (match !== null && Math.random() < 0.5) {
        message.channel.send("Hi " + match[1] + ", I'm Dad!");
    }
});

client.login(config.user_token);
