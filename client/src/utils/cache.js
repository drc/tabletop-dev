import { InMemoryCache, makeVar } from "@apollo/client";

export const colorVar = makeVar("Green");

export const cache = new InMemoryCache({
    typePolicies: {
        Scores: { keyFields: ["_id"] },
        Query: {
            fields: {
                localColor: {
                    read() {
                        return colorVar();
                    }
                }
            }
        }
    },
});