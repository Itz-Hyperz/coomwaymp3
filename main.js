const musicarray = ["3tothe1.mp3", "Bad.mp3", "Charles_Stiles.mp3", "cock_and_ball_garden.mp3", "coffins.mp3", "coma.mp3", "coomer.mp3", "Copy_of_Cobra.wav", "CORPSE HUSBAND MONEY.mp3", "CostiDiss.mp3", "CostiDiss2.mp3", "councilunfinished.mp3", "cringstom.mp3", "cyanide_pill.wav", "Disabled.mp3", "diss_god_diss_track.wav", "Distorted_Diss.mp3", "dont doubt me.mp3", "enjoyyourstays.mp3", "ESHY_DISSTRACK.mp3", "faxes_diss.wav", "fcuk_you_jarad.mp3", "fuck_you_soup.mp3", "get_out_of_my_head.mp3", "gigasampl.mp3", "GOD_FEEARING.mp3", "gta_5_sevraaaaa.mp3", "gypsy.wav", "heard_of_me_sample.mp3", "HURACAN DISS.wav", "hyperz apology.mp3", "hyperz diss 2.mp3", "hyperz diss 3.mp3", "hyperz diss 4.wav", "I_dont_really_care_for_you.mp3", "I_rape_kisd.mp3", "jackspedicey.mp3", "LET_ME_IN_THE_SERVER_SONG.mp3", "Lil_Huddy_Star.mp3", "markiplier.mp3", "message_to_my_haters.mp3", "Mommys phone officall music videp.mp3", "Mommys Phone REMASTERED.wav", "Mommys Phone REMIX.wav", "My_family_is_dead.mp3", "OLD_TOWN_ROAD_COVER.mp3", "Omegle.mp3", "raditz_diss.mp3", "raditz_diss_2.mp3", "Raditz_diss2a.mp3", "ramma.mp3", "randy_diss.mp3", "ransom.mp3", "RANYISOVERPARTY.wav", "robots.mp3", "save_you.wav", "Schizo.mp3", "simp_diss.mp3", "Simp_Diss_serious.mp3", "skidmeisterdiss.mp3", "soccer vent.mp3", "stupid_fucking_song.mp3", "the_great_depression.wav", "timmy_likes_babaydick.wav", "Ultimate_diss_full.mp3", "V-Bucks.mp3", "Why_is_my_dick_so_large..mp3", "YSA Diss Track.mp3"];
const chalk = require("chalk");
class coomway {
    constructor(m) {
        this.useDebugMode = m;
    }
    async search(m) {
        let s = musicarray[m];
        return s ? (this.useDebugMode && console.log(chalk.blue(`\nDEBUG MODE: ${s}\n`)), `https://cdn.hyperz.net/coomwaymp3/${s}`) : console.log(chalk.red("\n\nThe integer provided in your search function is invalid - coomwaymp3\n\n"));
    }
}
module.exports = coomway;

const list = () => {
    return musicarray;
};

module.exports.list = list
