import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Home from "./components/Home";
import Scores from "./components/Scores";
import Navigation from "./components/Navigation";
import Player from "./components/Player";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? process.env.APOLLO_CLIENT_URI
      : "http://localhost:5000/graphql",
  connectToDevtools: true,
  cache: new InMemoryCache({
    typePolicies: {
      Scores: { keyFields: ["_id"] },
    },
  }),
});

console.log(process.env.NODE_ENV);

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/scores" component={Scores} />
          <Route path={`/scores/:player`} component={Player} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
