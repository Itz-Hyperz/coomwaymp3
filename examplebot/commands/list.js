const coomwaymp3 = require('coomwaymp3');
module.exports = {
    name: 'list',
    description: 'List those coomway songs',
    aliases: [],
    async execute(client, message, args, Hyperz, config) {
        let str = ``;
        const coomSongs = coomwaymp3.list()
        await coomSongs.forEach(function (e, i) {
            str += `\` ${(i < 10 ? `0${i}` : i)} \`  -  ${e.replace(/_/gi, " ").split(".")[0]}\n`;
        });
        setTimeout(() => {
            const pingEmbed = new Hyperz.MessageEmbed()
                .setColor(config["main_config"].colorhex)
                .setTitle(`Coomway Songs:`)
                .setThumbnail(message.guild.iconURL())
                .setDescription(str)
            message.channel.send(pingEmbed).then(msg => msg.delete({timeout: 30000})).catch(e => {if(config["main_config"].debugmode) return console.log(e);});
            message.delete().catch(e => {if(config["main_config"].debugmode) return console.log(e);});
        }, 200);
    },
}