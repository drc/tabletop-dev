import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import Scores from "./components/Scores";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/scores">
          <Scores />
        </Route>
        <Route path={`/scores/:player`}>
          <Player />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const Player = () => {
  let { player } = useParams();
  return <div>{player}</div>;
};

export default App;
