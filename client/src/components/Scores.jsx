import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "./Loading";
import PlayerCard from "./PlayerCard";
import style from "./Scores.module.css";

const Scores = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios("/api/scores");
      setPlayers(data.results);
    }

    getData();
  }, []);

  return (
    <div className={style.container}>
      {players.length === 0 && <Loading/>}
      {players.map((p) => (
        <PlayerCard key={p._id} {...p} />
      ))}
    </div>
  );
};

export default Scores;
