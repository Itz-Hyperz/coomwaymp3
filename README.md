# coomwaymp3
An NPM module / website designed to return mp3 files / songs created by MasterCoomway.

---

## Support

* [Discord](https://hyperz.world/discord)

* [Website](https://coomway.hyperz.world)

---

## Installation

`npm i coomwaymp3@latest --save`

---

## Code Example

```js
const coomwaymp3 = require('coomwaymp3')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', async () => {
    console.log(`I am ready.`)
});

client.on('message', async message => {

    let deChannel = await client.channels.cache.get('some-channel-id') // Get a voice channel to join and play audio
    let pick = await coomway.randomSong() // Gets position 1 in the array of songs (second listed in array)

    if(message.content.startsWith(`h!test`)) {
        await deChannel.join().then(async connection => {
            // Start playing the file
            const dispatcher = await connection.play(pick); // Pick returns a link to an audio file via cdn.hyperz.dev

            // Wait for the file to finish
            dispatcher.on("finish", async finish => {
                try {
                    // Leave the channel
                    await connection.disconnect();
                    await deChannel.leave(); // Leave the channel after the audio is done playing
                } catch(e) {
                   return console.log(e); // Log any errors
                }
            });
        }).catch(async e => {
            console.log(e) // Log any errors
        });
    }

});

client.login('YOUR_BOT_TOKEN')
```

---

`LAST UPDATE: 03/16/2023`
