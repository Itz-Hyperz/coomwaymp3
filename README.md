# coomwaymp3
An NPM module designed to return mp3 files / songs created by MasterCoomway.

---

## Support

* [Discord](https://hyperz.dev/discord)

* [Website](https://support.hyperz.dev/)

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
| 15   | Distorted_Diss
| 16   | dont doubt me
| 17   | enjoyyourstay
| 18   | ESHY_DISSTRACK
| 19   | faxes_diss
| 20   | fcuk_you_jarad
| 21   | get_out_of_my_head
| 22   | gigasampl
| 23   | GOD_FEARING
| 24   | gta_5_sevraaaaa
| 25   | gypsy
| 26   | heard_of_me_sample
| 27   | HURACAN DISS
| 28   | hyperz apology
| 29   | hyperz diss 2
| 30   | hyperz diss 3
| 31   | hyperz diss 4
| 32   | I_dont_really_care_for_you
| 33   | I_rape_kisd
| 34   | jackspedicey
| 35   | LET_ME_IN_THE_SERVER
| 36   | Lil_Huddy_Star
| 37   | markiplier
| 38   | message_to_my_haters
| 39   | Mommys phone officall music videp
| 40   | Mommys Phone REMASTERED
| 41   | Mommys Phone REMIX
| 42   | My_family_is_dead
| 43   | OLD_TOWN_ROAD_COVER
| 44   | Omegle
| 45   | raditz_diss
| 46   | raditz_diss_2
| 47   | Raditz_diss2a
| 48   | ramma
| 49   | randy_diss
| 50   | ransom
| 51   | RANYISOVERPARTY
| 52   | robots
| 53   | save_you
| 54   | Schizo
| 55   | simp_diss
| 56   | Simp_Diss_serious
| 57   | skidmeisterdiss
| 58   | soccer vent
| 59   | stupid_fucking_song
| 60   | the_great_depression
| 61   | timmycas_diss
| 62   | Ultimate_diss_full
| 63   | V-Bucks
| 64   | Why_is_my_dick_so_large
| 65   | YSA Diss Track

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

`LAST UPDATE: 07/24/2021`
