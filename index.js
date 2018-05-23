const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

const chance = 0.3; // chance that bot will respond

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    //console.log(message.content)
    var match = /^(?:i'm|i am)\s+([\w\s',-]+)/i.exec(message.content);
    //console.log(match)
    if (match !== null && Math.random() < chance) {
        message.channel.send("Hi " + match[1] + ", I'm Dad!");
    }
});

client.login(config.user_token);
