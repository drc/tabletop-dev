import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Scores from "./components/Scores";
import Navigation from "./components/Navigation";
import Player from "./components/Player";

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/scores" component={Scores} />
        <Route path={`/scores/:player`} component={Player} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
