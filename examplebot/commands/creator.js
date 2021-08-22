module.exports = {
    name: 'creator',
    description: 'A Command.',
    aliases: ['credits', 'hyperz'],
    async execute(client, message, args, Hyperz, config){
        const pingEmbed = new Hyperz.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, `${config["other_configuration"].serverinvite}`)
        .setDescription(`**Created By:** [Hyperz#0001](https://hyperz.dev/)\n*List command and other improvements made by the :crown: FAXES!*`)
        .setTimestamp()
        .setFooter(`${config["main_config"].copyright}`)
        
        message.channel.send(pingEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(e => {if(config["main_config"].debugmode) return console.log(e);});
        message.delete().catch(e => {if(config["main_config"].debugmode) return console.log(e);});
    },
}