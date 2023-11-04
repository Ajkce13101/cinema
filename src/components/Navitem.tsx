import "./navitem.css";
import "../hooks/useUpcomingMovieList";
import { NavLink } from "react-router-dom";

const Navitem = ({ name, link }: { name: string; link: string }) => {
  return (
    <li>
      <NavLink
        to={link}
        style={({ isActive }) =>
          isActive
            ? {
                backgroundImage:
                  "linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "",
              }
            : {}
        }
        // className="hover:text-primary "
        className={({ isActive }) =>
          isActive
            ? "custom-gradient-text "
            : "hover:custom-gradient-text "
        }
      >
        <span className="font-bold">{name}</span>
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
