var app = require("express")(),
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

app.get("/mongodb", function(req, res) {
    res.render("index");
});

app.listen(3000, function() {
    console.log("NBA Query Server has started!");
});