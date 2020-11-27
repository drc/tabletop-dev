const { ApolloServer, gql } = require("apollo-server-express");
const db = require("./db/connection");
const scores = db.get("scores");
const axios = require("axios");

const typeDefs = gql`

    type Score {
        _id: ID!
        player: String
        updated: String
        score: Float
        color: String
        steam_id: String
        picture: String
    }

    input PlayerInput {
        score: Float
        color: String
        steam_id: String
        picture: String
    }

    type Query {
        scores: [Score]
        score(player: String!): Score
    }

    type Mutation {
        createPlayer(player: String!): Score
        updatePlayer(player: String!, info: PlayerInput): Score
    }
`;

const resolvers = {
    Query: {
        scores: async () => await scores.find({}),
        score: async (_, { player }) => await scores.findOne({ player }),
    },
    Mutation: {
        createPlayer: async (_, { player }) => {
            const existingScore = await scores.findOne({ player });
            if (existingScore) {
                throw new Error(`${existingScore.player} already exists`);
            } else {
                const newScore = await scores.insert({
                    player,
                    score: 0,
                    updated: new Date()
                });
                return newScore;
            }
        },
        updatePlayer: async (_, param) => {
            const { player, info: body } = param;

            if (body.steam_id) {
                const response = await axios(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${body.steam_id}`);
                body.picture = response.data.response.players[0].avatarfull;
            }

            if (Object.keys(body).length === 0) {
                throw new Error(`cant update ${player} without some data`);
            }
            return await scores.findOneAndUpdate({ player }, {
                $set: { ...body, updated: new Date() }
            });
        }
    }
}

module.exports = { typeDefs, resolvers };