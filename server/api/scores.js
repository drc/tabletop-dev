const e = require('express');
const express = require('express');
const db = require("../db/connection");
const scores = db.get("scores");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/", async (req, res, next) => {
    const results = await scores.find({});
    res.json({ results });
});

router.post("/", async (req, res, next) => {
    const existingScore = await scores.findOne({ player: req.body.player });
    if (existingScore) {
        const error = new Error(`${existingScore.player} already exists`);
        res.status(409);
        next(error);
    } else {
        const newScore = await scores.insert({
            player: req.body.player,
            score: req.body.score,
            updated: new Date()
        });
        res.status(201);
        res.json(newScore);
    }
});

router.get("/:player", async (req, res, next) => {
    const { player } = req.params;
    const results = await scores.findOne({ player });
    if (results) {
        res.json(results);
    } else {
        res.json({})
    }
});

router.put("/:player", async (req, res, next) => {
    const { player } = req.params;
    const buf = Buffer.from(req.body);
    const body = JSON.parse(buf.toString());

    const response = await axios(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${body.steam_id}`);
    body.picture = response.data.response.players[0].avatarfull;

    if (Object.keys(body).length === 0) {
        const error = new Error(`cant update ${player} without some data`);
        res.status(400);
        next(error);
    }
    const updatedPlayer = await scores.findOneAndUpdate({ player }, { $set: { ...body, updated: new Date() } });
    res.json(updatedPlayer);
});

module.exports = router;