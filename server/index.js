const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// Middleware

app.use(morgan("dev"));
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.raw());

// custom endpoint stuff

const scores = require("./api/scores");
app.use("/api/scores", scores);

if (process.env.NODE_ENV === "production") {
    // static folder
    app.use(express.static(path.join(__dirname, "..", "/client/build/")));

    app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, "..", "/client/build/index.html")));
}


// error handling stuff
app.use((req, res, next) => {
    res.status(404);
    const error = new Error(`🔎 - Not Found - ${req.originalUrl}`)
    next(error);
});

app.use((err, req, res, next) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack
    });
});

// server stuff

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));