import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import PlayerCard from "./components/PlayerCard"

function App() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios("/api/scores");
      setPlayers(data.results);
    }

    getData();
  }, []);

  return (
    <div className="App">
      {players.map(p => <PlayerCard key={p._id} {...p} />)}
    </div>
  );
}

export default App;
