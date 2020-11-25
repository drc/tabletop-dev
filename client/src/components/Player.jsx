import { useParams } from "react-router-dom";
import style from "./Player.module.css";
import Profile from "./Profile";

const Player = () => {
  let { player } = useParams();

  return (
    <div className={style.container}>
      <Profile {...{ player }} />
    </div>
  );
};

export default Player;
