module.exports = {
    name: 'invite',
    description: 'A Command.',
    aliases: ['credits', 'hyperz'],
    async execute(client, message, args, Hyperz, config){
        message.channel.send(`>>> **Invite me:**\n<https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=36711424>`).then(msg => msg.delete({ timeout: 10000 })).catch(e => {if(config["main_config"].debugmode) return console.log(e);});
        message.delete().catch(e => {if(config["main_config"].debugmode) return console.log(e);});
    },
}