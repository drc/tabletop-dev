import axios from "axios";
import { useState, useEffect } from "react";
import style from "./Profile.module.css";
import Loading from "./Loading";

const Profile = ({ player }) => {
  
  const [profile, setProfile] = useState();

  const handleColorChange = ({ target }) => {
    setProfile({ ...profile, color: target.value });
  };

  useEffect(() => {
    async function getData() {
      const { data } = await axios(`/api/scores/${player}`);
      const updatedStr = new Intl.DateTimeFormat("en", {
        timeStyle: "short",
        dateStyle: "short",
      }).format(new Date(data.updated));

      setProfile({ ...data, updatedStr });
    }
    getData();
  }, [player]);

  return (
    <>
      {!profile && <Loading />}
      {profile && (
        <div className={style.card}>
          <div className={style.container}>
            <div className={style.imageContainer}>
              <img
                src={profile.picture || "https://picsum.photos/200"}
                alt={profile.player}
              />
            </div>
            <div className={style.info}>
              <div
                className={style.playerName}
                style={{ color: profile.color }}
              >
                {profile.player}
              </div>
              <div>
                <label className={style.label} htmlFor="score">
                  Score
                </label>
                <input
                  className={style.input}
                  type="number"
                  value={profile.score}
                  readOnly
                />
              </div>
              <div>
                <label className={style.label} htmlFor="color">
                  Last Color Played as
                </label>
                <input
                  className={style.input}
                  type="color"
                  value={profile.color}
                  onChange={handleColorChange}
                />
              </div>
              <div>
                <label className={style.label} htmlFor="updated">
                  Last Updated
                </label>
                {profile.updatedStr}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
