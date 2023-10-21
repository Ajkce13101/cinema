import { Link, useRouteError } from "react-router-dom";
import Error1 from "../assets/error1.svg";
import Error2 from "../assets/error2.svg";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className="flex justify-between items-center flex-row h-[100vh] max-container padding-x  ">
        <div className="flex items-center flex-col w-full">
          <h3 className="text-4xl mb-5">Oops!</h3>
          <p className="text-slate-400">
            We can't seem to find page you are looking for
          </p>
          <Link to="/" className="gradient-btn mt-5">
            back home
          </Link>
        </div>
        <div className="flex items-center justify-center w-full">
          <img className="w-[500px]" src={Error2} alt="not found" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3>something went wrong </h3>
    </div>
  );
};
export default Error;
