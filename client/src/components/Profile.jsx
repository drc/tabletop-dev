import { gql, useQuery } from "@apollo/client";

import style from "./Profile.module.css";
import Loading from "./Loading";
import colorList from "../utils/colors";

import { colorVar } from "../utils/cache";

const GET_PROFILE = gql`
  query GetProfile($player: String!) {
    score(player: $player) {
      player
      picture
      color
      score
      updated
    }
    localColor @client
  }
`;

const Profile = ({ player }) => {
  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: { player },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return `Error!!! ${error.message}`;
  }

  const updatedStr = new Intl.DateTimeFormat("en", {
    timeStyle: "short",
    dateStyle: "short",
  }).format(new Date(data.score.updated));

  return (
    <div className={style.card}>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img
            className={style.profilePic}
            src={data.score.picture || "https://picsum.photos/200"}
            alt={data.score.player}
          />
        </div>
        <div className={style.info}>
          <div
            className={style.playerName}
            style={{ color: colorList[data.localColor].hex }}
          >
            {data.score.player}
          </div>
          <div>
            <label className={style.label} htmlFor="score">
              Score
            </label>
            <input
              className={style.input}
              type="number"
              value={data.score.score}
              readOnly
            />
          </div>
          <div>
            <label className={style.label} htmlFor="color">
              Last Color Played as
            </label>
            <select
              className={style.input}
              value={colorVar()}
              onChange={({ target: { value } }) => {
                colorVar(value);
              }}
            >
              {Object.keys(colorList).map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={style.label} htmlFor="updated">
              Last Updated
            </label>
            {updatedStr}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
