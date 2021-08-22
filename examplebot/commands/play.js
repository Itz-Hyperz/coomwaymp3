const coomwaymp3 = require('coomwaymp3')
const coomway = new coomwaymp3(false) // Sets debug mode to true

module.exports = {
    name: 'play',
    description: 'Pings the bot.',
    aliases: ['coom', 'coomway'],
    async execute(client, message, args, Hyperz, config){
        if(!args[0]) return message.channel.send(`Please input a valid number.`);
        const voiceChannel = await message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('You need to be in a voice channel.');
        let number = Number(args[0]);
        if(!number && args[0] != '0' && args[0] != '00') return message.channel.send(`Please input a valid number.`);
        // let deChannel = await client.channels.cache.get(config.other_configuration.channelToJoinID)
        let pick = await coomway.search(number)
        try {
            await voiceChannel.join().then(async connection => {
                // Start playing the file
                const dispatcher = await connection.play(pick); // Pick returns a link to an audio file via cdn.hyperz.dev
    
                // Wait for the file to finish
                dispatcher.on("finish", async finish => {
                    try {
                        // Leave the channel
                        await connection.disconnect();
                        await voiceChannel.leave(); // Leave the channel after the audio is done playing
                        await client.destroy()
                        await client.login(config.main_config.token) // For dumb web socket errors that happen that I don't understand how to read lmfao
                    } catch(e) {
                       return console.log(e); // Log any errors
                    }
                });
            }).catch(async e => {
                console.log(e) // Log any errors
            });
        } catch(e) {}
        const embed = new Hyperz.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, `${config["other_configuration"].serverinvite}`)
        .setDescription(`**Now Playing:** ${pick}`)
        .setTimestamp()
        .setFooter(`${config.main_config.copyright}`)
        
        message.channel.send(embed).catch(e => {if(config["main_config"].debugmode) return console.log(e);});
    },
}
