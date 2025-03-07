// Basic Imports
const config = require("./config.json");
const express = require("express");
const app = express();
const chalk = require('chalk');
const coomwaymp3 = new (require('coomwaymp3'))({ debugMode: true, vileMode: true });
coomwaymp3.init();

// Backend Initialization
const backend = require('./backend.js');
backend.init(app);

// Routing
app.get('', async function(req, res) {
    let songsSorted = await sortSongs(await coomwaymp3.pullCachedSongs());
    res.render('index.ejs', { songs: songsSorted.clean });
});

app.get('/vile', async function(req, res) {
    let songsSorted = await sortSongs(await coomwaymp3.pullCachedSongs());
    res.render('vile.ejs', { songs: songsSorted.vile });
});

app.get('/random', async function(req, res) {
    let song = await coomwaymp3.randomSong();
    res.render('search.ejs', { song: song, query: '' });
});

app.post('/backend/searchsong', async function(req, res) {
    if(!req.body.query) return res.redirect('/404');
    let song = await coomwaymp3.search(req.body.query);
    if(!song || song.length == 0) song = [{ name: '404 Not Found...', url: '' }];
    res.render('search.ejs', { song: song[0], query: req.body.query });
});

// MAKE SURE THIS IS LAST FOR 404 PAGE REDIRECT
app.get('*', function(req, res){
    res.render('404.ejs');
});

// Server Initialization
app.listen(config.port)
console.log(chalk.blue('CoomwayMP3-Website Started on Port ' + config.port));

// Rejection Handler
process.on('unhandledRejection', (err) => { 
    if(config.debugMode) console.log(chalk.red(err));
});

async function sortSongs(data) {
    let clean = [];
    let vile = [];
    await data.forEach(function(item) {
        if(item.name.startsWith('vile_')) {
            vile.push(item);
        } else {
            clean.push(item);
        };
    });
    return({clean: clean, vile: vile});
};
