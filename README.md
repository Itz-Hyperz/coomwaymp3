# coomwaymp3
A node module that is designed to make your life easier when dealing with errors, logging, and more!

---

## Support

* [Discord](https://hyperz.dev/discord)

* [Website](https://support.hyperz.dev/)

---

## Installation

`npm i coomwaymp3@latest --save`

---

## Class Builder

A way that you can log errors and useful information via console.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | BOOLEAN  | useDebugMode true or false.

---

## The Official Index

An easier way to use the Figlify module.

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
| 13   | Disabled
| 14   | Distorted_Diss
| 15   | dont doubt me
| 16   | enjoyyourstay
| 17   | ESHY_DISSTRACK
| 18   | secret
| 19   | fcuk_you_jarad
| 20   | get_out_of_my_head
| 21   | gigasampl
| 22   | GOD_FEARING
| 23   | gta_5_sevraaaaa
| 24   | gypsy
| 25   | heard_of_me_sample
| 26   | HURACAN DISS
| 27   | hyperz apology
| 28   | hyperz diss 2
| 29   | hyperz diss 3
| 30   | hyperz diss 4
| 31   | I_dont_really_care_for_you
| 32   | I_rape_kisd
| 33   | jackspedicey
| 34   | Lil_Huddy_Star
| 35   | markiplier
| 36   | message_to_my_haters
| 37   | Mommys phone officall music videp
| 38   | Mommys Phone REMASTERED
| 39   | Mommys Phone REMIX
| 40   | My_family_is_dead
| 41   | OLD_TOWN_ROAD_COVER
| 42   | Omegle
| 43   | raditz_diss
| 44   | raditz_diss_2
| 45   | Raditz_diss2a
| 46   | ramma
| 47   | randy_diss
| 48   | ransom
| 49   | RANYISOVERPARTY
| 50   | robots
| 51   | save_you
| 52   | Schizo
| 53   | simp_diss
| 54   | Simp_Diss_serious
| 55   | skidmeisterdiss
| 56   | soccer vent
| 57   | stupid_fucking_song
| 58   | the_great_depression
| 59   | Ultimate_diss_full
| 60   | V-Bucks
| 61   | Why_is_my_dick_so_large
| 62   | YSA Diss Track

---

## Code Example

```js
const coomwaymp3 = require('coomwaymp3')
const coomway = new coomwaymp3(true) // Sets debug mode to true
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs');

client.on('ready', async () => {
    console.log(`I am ready.`)
});

client.on('message', async message => {

    let deChannel = await client.channels.cache.get('some-channel-id') // Get a voice channel to join and play audio
    let pick = await coomway.search(1) // Gets position 1 in the array of songs (second listed in array)

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

`LAST UPDATE: 07/23/2021`
