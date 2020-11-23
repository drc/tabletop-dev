import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const routes = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/scores",
    text: "Scores",
  },
];

const Navigation = () => {
  console.log(style);
  return (
    <nav className={style.navbar}>
      {routes.map((r,idx) => (
        <NavLink key={idx} to={r.to} className={style.link}>
          {r.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
