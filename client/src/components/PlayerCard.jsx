import style from "./PlayerCard.module.css";

const PlayerCard = ({ player, score, updated, color, picture }) => {
  const updatedString = new Intl.DateTimeFormat("en", {
    timeStyle: "short",
    dateStyle: "short",
  }).format(new Date(updated));

  return (
    <div className={style.card}>
      <div className={style.container}>
        <img
          className={style.profilePic}
          src={picture || "https://picsum.photos/200"}
          alt={player}
        ></img>
        <h2
          className={`${style.name} ${color === "White" ? style.white : ""}`}
          style={{
            color,
          }}
        >
          {player}
        </h2>
        <div>
          <div className={`${style.score} ${score < 0 ? style.negative : ""}`}>
            {Math.abs(score).toFixed(2)}
          </div>
          <div className={style.updated}>Last Updated: {updatedString}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
