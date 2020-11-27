import { gql, useQuery } from "@apollo/client";

import Loading from "./Loading";
import PlayerCard from "./PlayerCard";
import style from "./Scores.module.css";

const GET_SCORES = gql`
  query GetScores {
    scores {
      _id
      player
      score
      updated
      color
      picture
    }
  }
`;

const Scores = () => {
  const { loading, error, data } = useQuery(GET_SCORES);

  if (loading)
    return (
      <div className={style.container}>
        <Loading />
      </div>
    );

  if (error) return `Error! ${error.message}`;
  
  return (
    <div className={style.container}>
      {data.scores.map((p) => (
        <PlayerCard key={p._id} {...p} />
      ))}
    </div>
  );
};

export default Scores;
