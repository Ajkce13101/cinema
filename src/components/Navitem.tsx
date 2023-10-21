import "./navitem.css";
import "../hooks/useMovieList";

const Navitem = ({ name, link }: { name: string; link: string }) => {
  return (
    <li>
      <a href={link} className="hover:text-primary">
        {name}{" "}
      </a>
    </li>
  );
};

export default Navitem;