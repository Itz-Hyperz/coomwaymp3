const Hyperz = require('discord.js');
const config = require('./config.json');
const client = new Hyperz.Client();

client.commands = new Hyperz.Collection();
client.events = new Hyperz.Collection();

['Command', 'Event'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Hyperz, config)
})

client.login(config["main_config"].token)
