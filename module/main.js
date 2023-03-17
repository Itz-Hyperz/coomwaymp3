// Imports
const axios = require('axios');
const chalk = require("chalk");

// Configuration
let config = {
    "repoUrl": "https://api.github.com/repos/itz-hyperz/coomwaymp3/contents/assets" // 60 requests an hour to Github API
};

let cache = []; // Cached songs can be pulled from here.
updateCache(true);
setInterval(function() {
    updateCache(true);
}, 300000); // Every 5 minutes, update cache

// Live Functions

async function updateCache(debugMode) {
    let songs = [];
    try {
        let request = await axios.get(config.repoUrl);
        for(let item of request?.data) {
            songs.push({
                "name": item.name.toLowerCase().replaceAll(' ', '_'),
                "url": item.html_url + '?raw=true'
            });
        };
    } catch(error) {
        if(debugMode) console.log(`${chalk.red('FATAL COOMWAY ERROR: ')}\n${error}`);
    };
    cache = songs;
};

// Cache Functions

function pullCachedSongs() {
    return cache;
};

async function randomSong() {
    return cache.sort((a, b) => Math.random() - 0.5)[0];
};

async function search(query) {
    query = await query.toLowerCase().replaceAll(' ', '').replaceAll('_', ''); // Sanitize to match songs return
    let choices = [];
    for(let item of cache) {
        if(item.name.replaceAll('_', '').includes(query)) choices.push(item);
    };
    return choices;
};

module.exports = {
    updateCache: updateCache,
    pullCachedSongs: pullCachedSongs,
    randomSong: randomSong,
    search: search
};