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
  console.log("getting scores");
  console.log(loading);
  if (loading)
    return (
      <div className={style.container}>
        <Loading />
      </div>
    );

  if (error) return `Error! ${error.message}`;
  console.log("done getting scores");
  return (
    <div className={style.container}>
      {data.scores.map((p) => (
        <PlayerCard key={p._id} {...p} />
      ))}
    </div>
  );
};

export default Scores;
