import "./navitem.css";
import "../hooks/useUpcomingMovieList";
import { NavLink } from "react-router-dom";

const Navitem = ({ name, link }: { name: string; link: string }) => {
  return (
    <li>
      <NavLink
        to={link}
        style={({ isActive }) =>
          isActive ? { color: "hsl(13, 100%, 50%)" } : {}
        }
        className="hover:text-primary"
      >
        {name}
      </NavLink>
    </li>
    // <li>
    //   <a href={link} className="hover:text-primary">
    //     {name}{" "}
    //   </a>
    // </li>
  );
};

export default Navitem;
