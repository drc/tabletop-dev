import "./PlayerCard.css";

const PlayerCard = ({ player, score, updated, color, picture }) => {
  const updatedString = new Intl.DateTimeFormat("en", {
    timeStyle: "short",
    dateStyle: "short",
  }).format(new Date(updated));

  return (
    <div className="card">
      <div className="container">
        <img
          className="profilePic"
          src={picture || "https://picsum.photos/200"}
          alt={player}
        ></img>
        <h2
          className={`name ${color === "White" ? "white" : ""}`}
          style={{
            color,
          }}
        >
          {player}
        </h2>
        <div>
          <div className={`score ${score < 0 ? "negative" : ""}`}>
            {Math.abs(score).toFixed(2)}
          </div>
          <div className="updated">Last Updated: {updatedString}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
