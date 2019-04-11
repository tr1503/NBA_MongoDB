var express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nba", {useNewUrlParser: true});
app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var playerSchema = new mongoose.Schema({
    gmDate: String,
    playLNm: String,
    playFNm: String,
    teamAbbr: String,
    teamConf: String,
    teamLoc: String,
    teamRslt: String,
    playDispNm: String,
    playStat: String,
    playMin: Number,
    playPos: String,
    playHeight: Number,
    playWeight: Number,
    playBDate: String,
    playPTS: Number,
    playAST: Number,
    playTO: Number,
    playSTL: Number,
    playBLK: Number,
    playPF: Number,
    play2PA: Number,
    play2PM: Number,
    play3PA: Number,
    play3PM: Number,
    playFTA: Number,
    playFTM: Number,
    playORB: Number,
    playDRB: Number,
    opptAbbr: String
});

var teamSchema = new mongoose.Schema({
    gmDate: String,
    offLNm3: String,
    offFNm3: String,
    teamAbbr: String,
    teamConf: String,
    teamLoc: String,
    teamRslt: String,
    teamPTS: Number,
    teamAST: Number,
    teamTo: Number,
    teamSTL: Number,
    teamBLK: Number,
    teamPF: Number,
    teamFGA: Number,
    teamFGM: Number,
    team2PA: Number,
    team2PM: Number,
    team3PA: Number,
    team3PM: Number,
    teamFTA: Number,
    teamFTM: Number,
    teamORB: Number,
    teamDRB: Number,
    teamPTS1: Number,
    teamPTS2: Number,
    teamPTS3: Number,
    teamPTS4: Number,
    teamPTS5: Number,
    teamPTS6: Number,
    teamPTS7: Number,
    teamPTS8: Number,
    opptAbbr: String,
    opptConf: String,
    opptLoc: String,
    opptRslt: String,
    opptPTS: Number,
    opptAST: Number,
    opptTO: Number,
    opptSTL: Number,
    opptBLK: Number,
    opptPF: Number,
    opptFGA: Number,
    opptFGM: Number,
    oppt2PA: Number,
    oppt2PM: Number,
    oppt3PA: Number,
    oppt3PM: Number,
    opptFTA: Number,
    opptFTM: Number,
    opptORB: Number,
    opptDRB: Number,
    opptPTS1: Number,
    opptPTS2: Number,
    opptPTS3: Number,
    opptPTS4: Number,
    opptPTS5: Number,
    opptPTS6: Number,
    opptPTS7: Number,
    opptPTS8: Number
});

var standingSchema = new mongoose.Schema({
    stDate: String,
    teamAbbr: String,
    rank: Number,
    rankOrd: String,
    gameWon: Number,
    gameLost: Number,
    stk: String,
    homeWin: Number,
    homeLoss: Number,
    awayWin: Number,
    awayLoss: Number
});

var Player = mongoose.model("player", playerSchema);
var Team = mongoose.model("team", teamSchema);
var Standing = mongoose.model("standing", standingSchema);
var East_Conf = mongoose.model("East_Conf", teamSchema, "East_Confs");
var West_Conf = mongoose.model("West_Conf",teamSchema, "West_Confs");

var CHI = mongoose.model("CHI", teamSchema, "CHI");
var ATL = mongoose.model("ATL", teamSchema, "ATL");
var DET = mongoose.model("DET", teamSchema, "DET");
var CLE = mongoose.model("CLE", teamSchema, "CLE");
var NY = mongoose.model("NY", teamSchema, "NY");
var ORL = mongoose.model("ORL", teamSchema, "ORL");
var WAS = mongoose.model("WAS", teamSchema, "WAS");
var BKN = mongoose.model("BKN", teamSchema, "BKN");
var BOS = mongoose.model("BOS", teamSchema, "BOS");
var PHI = mongoose.model("PHI", teamSchema, "PHI");
var MIL = mongoose.model("MIL", teamSchema, "MIL");
var CHA = mongoose.model("CHA", teamSchema, "CHA");
var TOR = mongoose.model("TOR", teamSchema, "TOR");
var MIA = mongoose.model("MIA", teamSchema, "MIA");
var IND = mongoose.model("IND", teamSchema, "IND");
var LAC = mongoose.model("LAC", teamSchema, "LAC");
var DEN = mongoose.model("DEN", teamSchema, "DEN");
var GS = mongoose.model("GS", teamSchema, "GS");
var POR = mongoose.model("POR", teamSchema, "POR");
var NO = mongoose.model("NO", teamSchema, "NO");
var MIN = mongoose.model("MIN", teamSchema, "MIN");
var LAL = mongoose.model("LAL", teamSchema, "LAL");
var HOU = mongoose.model("HOU", teamSchema, "HOU");
var OKC = mongoose.model("OKC", teamSchema, "OKC");
var SA = mongoose.model("SA", teamSchema, "SA");
var UTA = mongoose.model("UTA", teamSchema, "UTA");
var SAC = mongoose.model("SAC", teamSchema, "SAC");
var DAL = mongoose.model("DAL", teamSchema, "DAL");
var MEM = mongoose.model("MEM", teamSchema, "MEM");
var PHO = mongoose.model("PHO", teamSchema, "PHO");

var CHI_standing = mongoose.model("CHI_standing", standingSchema, "CHI_standing");
var ATL_standing = mongoose.model("ATL_standing", standingSchema, "ATL_standing");
var DET_standing = mongoose.model("DET_standing", standingSchema, "DET_standing");
var CLE_standing = mongoose.model("CLE_standing", standingSchema, "CLE_standing");
var NY_standing = mongoose.model("NY_standing", standingSchema, "NY_standing");
var ORL_standing = mongoose.model("ORL_standing", standingSchema, "ORL_standing");
var WAS_standing = mongoose.model("WAS_standing", standingSchema, "WAS_standing");
var BKN_standing = mongoose.model("BKN_standing", standingSchema, "BKN_standing");
var BOS_standing = mongoose.model("BOS_standing", standingSchema, "BOS_standing");
var PHI_standing = mongoose.model("PHI_standing", standingSchema, "PHI_standing");
var MIL_standing = mongoose.model("MIL_standing", standingSchema, "MIL_standing");
var CHA_standing = mongoose.model("CHA_standing", standingSchema, "CHA_standing");
var TOR_standing = mongoose.model("TOR_standing", standingSchema, "TOR_standing");
var MIA_standing = mongoose.model("MIA_standing", standingSchema, "MIA_standing");
var IND_standing = mongoose.model("IND_standing", standingSchema, "IND_standing");
var LAC_standing = mongoose.model("LAC_standing", standingSchema, "LAC_standing");
var DEN_standing = mongoose.model("DEN_standing", standingSchema, "DEN_standing");
var GS_standing = mongoose.model("GS_standing", standingSchema, "GS_standing");
var POR_standing = mongoose.model("POR_standing", standingSchema, "POR_standing");
var NO_standing = mongoose.model("NO_standing", standingSchema, "NO_standing");
var MIN_standing = mongoose.model("MIN_standing", standingSchema, "MIN_standing");
var LAL_standing = mongoose.model("LAL_standing", standingSchema, "LAL_standing");
var HOU_standing = mongoose.model("HOU_standing", standingSchema, "HOU_standing");
var OKC_standing = mongoose.model("OKC_standing", standingSchema, "OKC_standing");
var SA_standing = mongoose.model("SA_standing", standingSchema, "SA_standing");
var UTA_standing = mongoose.model("UTA_standing", standingSchema, "UTA_standing");
var SAC_standing = mongoose.model("SAC_standing", standingSchema, "SAC_standing");
var DAL_standing = mongoose.model("DAL_standing", standingSchema, "DAL_standing");
var MEM_standing = mongoose.model("MEM_standing", standingSchema, "MEM_standing");
var PHO_standing = mongoose.model("PHO_standing", standingSchema, "PHO_standing");

var CHI_players = mongoose.model("CHI_players", playerSchema, "CHI_players");
var ATL_players = mongoose.model("ATL_players", playerSchema, "ATL_players");
var DET_players = mongoose.model("DET_players", playerSchema, "DET_players");
var CLE_players = mongoose.model("CLE_players", playerSchema, "CLE_players");
var NY_players = mongoose.model("NY_players", playerSchema, "NY_players");
var ORL_players = mongoose.model("ORL_players", playerSchema, "ORL_players");
var WAS_players = mongoose.model("WAS_players", playerSchema, "WAS_players");
var BKN_players = mongoose.model("BKN_players", playerSchema, "BKN_players");
var BOS_players = mongoose.model("BOS_players", playerSchema, "BOS_players");
var PHI_players = mongoose.model("PHI_players", playerSchema, "PHI_players");
var MIL_players = mongoose.model("MIL_players", playerSchema, "MIL_players");
var CHA_players = mongoose.model("CHA_players", playerSchema, "CHA_players");
var TOR_players = mongoose.model("TOR_players", playerSchema, "TOR_players");
var MIA_players = mongoose.model("MIA_players", playerSchema, "MIA_players");
var IND_players = mongoose.model("IND_players", playerSchema, "IND_players");
var LAC_players = mongoose.model("LAC_players", playerSchema, "LAC_players");
var DEN_players = mongoose.model("DEN_players", playerSchema, "DEN_players");
var GS_players = mongoose.model("GS_players", playerSchema, "GS_players");
var POR_players = mongoose.model("POR_players", playerSchema, "POR_players");
var NO_players = mongoose.model("NO_players", playerSchema, "NO_players");
var MIN_players = mongoose.model("MIN_players", playerSchema, "MIN_players");
var LAL_players = mongoose.model("LAL_players", playerSchema, "LAL_players");
var HOU_players = mongoose.model("HOU_players", playerSchema, "HOU_players");
var OKC_players = mongoose.model("OKC_players", playerSchema, "OKC_players");
var SA_players = mongoose.model("SA_players", playerSchema, "SA_players");
var UTA_players = mongoose.model("UTA_players", playerSchema, "UTA_players");
var SAC_players = mongoose.model("SAC_players", playerSchema, "SAC_players");
var DAL_players = mongoose.model("DAL_players", playerSchema, "DAL_players");
var MEM_players = mongoose.model("MEM_players", playerSchema, "MEM_players");
var PHO_players = mongoose.model("PHO_players", playerSchema, "PHO_players");


var teamsView = [CHI, ATL, DET, CLE, NY, ORL, WAS, BKN, BOS, PHI, MIL, CHA, TOR, MIA, IND, LAC, DEN, GS, POR, NO, MIN, LAL, HOU, OKC, SA, UTA, SAC, DAL, MEM, PHO];

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/mongodb", function(req, res) {
    res.render("index");
});

app.post("/search", function(req, res) {
    var team = req.body.team;
    for (var i = 0; i < teamsView.length; i++) {
        if (teamsView[i].collection.collectionName == team) {
            teamsView[i].aggregate([{$group: {_id: "$teamAbbr", avgPoints: {$avg: "$teamPTS"}}}], function(err, query) {
                if (err)
                    console.log(err);
                else
                    res.render("show", {query: query});
            });
        }
    }
});

app.listen(3000, function() {
    console.log("NBA Query Server has started!");
});