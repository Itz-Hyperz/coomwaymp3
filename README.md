# coomwaymp3
An NPM module designed to return mp3 files / songs created by MasterCoomway.

---

## Support

* [Discord](https://hyperz.dev/discord)

* [Website](https://botguys.net/bot/coomway)

---

## Installation

`npm i coomwaymp3@latest --save`

---

## Class Builder

The global settings for the coomwaymp3 npm module.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | BOOLEAN  | useDebugMode true or false.

---

## The Official Index

A list of all songs with the position in the array.

| Position        | Song Name | 
|----------------|---------------|
| 0   | 3tothe1
| 1   | Bad
| 2   | Charles_Stiles
| 3   | cock_and_ball_garden
| 4   | coffins
| 5   | coma
| 6   | coomer
| 7   | Copy_of_Cobra
| 8   | CORPSE HUSBAND MONEY
| 9   | CostiDiss
| 10   | CostiDiss2
| 11   | coucilunfinished
| 12   | cringstom
| 13   | cyanide_pill
| 14   | Disabled
| 15   | Diss God Diss Track
| 16   | Distorted_Diss
| 17   | dont doubt me
| 18   | enjoyyourstay
| 19   | ESHY_DISSTRACK
| 20   | faxes_diss
| 21   | fcuk_you_jarad
| 22   | fuck_you_soup
| 23   | get_out_of_my_head
| 24   | gigasampl
| 25   | GOD_FEARING
| 26   | gta_5_sevraaaaa
| 27   | gypsy
| 28   | heard_of_me_sample
| 29   | HURACAN DISS
| 30   | hyperz apology
| 31   | hyperz diss 2
| 32   | hyperz diss 3
| 33   | hyperz diss 4
| 34   | I_dont_really_care_for_you
| 35   | I_rape_kisd
| 36   | jackspedicey
| 37   | LET_ME_IN_THE_SERVER
| 38   | Lil_Huddy_Star
| 39   | markiplier
| 40   | message_to_my_haters
| 41   | Mommys phone officall music videp
| 42   | Mommys Phone REMASTERED
| 43   | Mommys Phone REMIX
| 44   | My_family_is_dead
| 45   | OLD_TOWN_ROAD_COVER
| 46   | Omegle
| 47   | raditz_diss
| 48   | raditz_diss_2
| 49   | Raditz_diss2a
| 50   | ramma
| 51   | randy_diss
| 52   | ransom
| 53   | RANYISOVERPARTY
| 54   | robots
| 55   | save_you
| 56   | Schizo
| 57   | simp_diss
| 58   | Simp_Diss_serious
| 59   | skidmeisterdiss
| 60   | soccer vent
| 61   | stupid_fucking_song
| 62   | the_great_depression
| 63   | timmycas_diss
| 64   | Ultimate_diss_full
| 65   | V-Bucks
| 66   | Why_is_my_dick_so_large
| 67   | YSA Diss Track

---

## Code Example

```js
const coomwaymp3 = require('coomwaymp3')
const coomway = new coomwaymp3(true) // Sets debug mode to true
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', async () => {
    console.log(`I am ready.`)
});

client.on('message', async message => {

    let deChannel = await client.channels.cache.get('some-channel-id') // Get a voice channel to join and play audio
    let pick = await coomway.search(27) // Gets position 1 in the array of songs (second listed in array)

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

`LAST UPDATE: 08/22/2021`
