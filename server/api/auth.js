const express = require('express');
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
require("dotenv").config();

const router = express.Router();

passport.use(
    new SpotifyStrategy(
        {
            clientID: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            callbackURL: process.env.SPOTIFY_CALLBACK_URL
        },
        function (accessToken, refreshToken, expires_in, profile, done) {
            console.log(accessToken, refreshToken, expires_in);

            process.nextTick(() => done(null, {profile, accessToken, refreshToken, expires_in}));
        }
    )
)

router.get("/logout", (req, res, next) => {
    req.logout();
    res.redirect("/");
})

router.get("/spotify", passport.authenticate("spotify"), async (req, res, next) => {
    res.json({ auth: true });
});

router.get('/spotify/callback', passport.authenticate("spotify"), (req, res, next) => {
    const { accessToken, refreshToken, expires_in } = req.user;
    res.json({ accessToken, refreshToken, expires_in });
});

module.exports = router;