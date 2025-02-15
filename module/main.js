// Imports
const axios = require('axios');
const chalk = require("chalk");
let cache = []; // Cached songs can be pulled from here.

class CoomClient {
    constructor(options) {
        this.debugMode = options.debugMode || true; // default debugMode is set to true
        this.vileMode = options.vileMode || false; // Trust me... you probably want this set to false...
        this.repoUrl = options.repoUrl || "https://api.github.com/repos/itz-hyperz/coomwaymp3/contents/assets"; // by default dont change this.
    }

    // IT IS NOT RECOMMENDED TO USE THIS!!! YOU WILL GET RATE LIMITED!!!
    async pullManualCache(options) {
        let songs = [];
        try {
            let request = await axios.get(options.repoUrl);
            for(let item of request?.data) {
                let itemname = item.name.toLowerCase().replaceAll(' ', '_');
                if(itemname.startsWith('vile_')) {
                    if(options.vileMode) {
                        songs.push({
                            "name": itemname,
                            "url": item.html_url + '?raw=true'
                        });
                    };
                } else {
                    songs.push({
                        "name": itemname,
                        "url": item.html_url + '?raw=true'
                    });
                };
            };
            return songs;
        } catch(error) {
            if(options.debugMode) console.log(`${chalk.red('FATAL COOMWAY/LOCUST ERROR: ')}\n${error}`);
        };
    };

    async init() { // Run this function to begin.
        let songs = [];
        try {
            let request = await axios.get(this.repoUrl);
            for(let item of request?.data) {
                let itemname = item.name.toLowerCase().replaceAll(' ', '_');
                if(itemname.startsWith('vile_')) {
                    if(this.vileMode) {
                        songs.push({
                            "name": itemname,
                            "url": item.html_url + '?raw=true'
                        });
                    };
                } else {
                    songs.push({
                        "name": itemname,
                        "url": item.html_url + '?raw=true'
                    });
                };
            };
        } catch(error) {
            if(this.debugMode) console.log(`${chalk.red('FATAL COOMWAY/LOCUST ERROR: ')}\n${error}`);
        };
        cache = songs;
        setInterval(async () => {
            let songs = [];
            try {
                let request = await axios.get(this.repoUrl);
                for(let item of request?.data) {
                    let itemname = item.name.toLowerCase().replaceAll(' ', '_');
                    if(itemname.startsWith('vile_')) {
                        if(this.vileMode) {
                            songs.push({
                                "name": itemname,
                                "url": item.html_url + '?raw=true'
                            });
                        };
                    } else {
                        songs.push({
                            "name": itemname,
                            "url": item.html_url + '?raw=true'
                        });
                    };
                };
            } catch(error) {
                if(this.debugMode) console.log(`${chalk.red('FATAL COOMWAY/LOCUST ERROR: ')}\n${error}`);
            };
            cache = songs;
        }, 300000); // Every 5 minutes, update cache 300000
    }

    // Cache Functions
    pullCachedSongs() {
        return cache;
    };

    async randomSong() {
        return cache.sort((a, b) => Math.random() - 0.5)[0];
    };

    async search(query) {
        query = await query.toLowerCase().replaceAll(' ', '').replaceAll('_', ''); // Sanitize to match songs return
        let choices = [];
        for(let item of cache) {
            if(item.name.replaceAll('_', '').includes(query)) choices.push(item);
        };
        return choices;
    };
};


module.exports = CoomClient
