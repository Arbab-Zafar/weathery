import Logo from "../src/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const firebase = useFirebase();

  return (
    <div className="flex w-full items-center justify-between bg-transparent px-4 py-3 text-white shadow-md shadow-gray-700">
      <div className="flex w-1/3 items-center">
        {props.show && (
          <div
            className="ml-6 mr-5 box-border flex cursor-pointer items-center rounded-xl  bg-gray-500 bg-opacity-10 bg-clip-padding  px-3 py-1 shadow-sm shadow-gray-700 backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter"
            onClick={() => navigate("/settings")}
          >
            <span className="material-symbols-outlined pr-[0.15rem] text-xl text-gray-400 hover:text-gray-300">
              location_on
            </span>
            <span className="text-sm text-gray-300">
              {firebase.locationName}...
            </span>
          </div>
        )}
        {props.show && (
          <div className="flex items-center gap-1 text-sm text-gray-300">
            <span
              className={`cursor-pointer hover:text-white ${firebase.unit === "C" ? "font-semibold text-white" : ""}`}
              onClick={() => firebase.setUnit("C")}
            >
              °C
            </span>
            <span>/</span>
            <span
              className={`cursor-pointer hover:text-white ${firebase.unit === "F" ? "font-semibold text-white" : ""}`}
              onClick={() => firebase.setUnit("F")}
            >
              °F
            </span>
          </div>
        )}
      </div>
      <div className="flex w-1/3 items-center justify-center gap-10">
        <img
          src={Logo}
          alt="Logo"
          width={180}
          className="cursor-pointer mix-blend-lighten"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className="mr-6 flex w-1/3 items-center justify-end">
        {props.signup && (
          <div className="mr-4 flex items-center">
            <div className="group relative inline-flex">
              <div className="animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-white via-[#c7b587] to-gray-500 opacity-70 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
              <Link
                to="/signup"
                title="Get quote now"
                className="font-pj relative inline-flex h-[40px] w-[120px] items-center justify-center rounded-xl bg-[#222] text-xs text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                role="button"
              >
                Signup
              </Link>
            </div>
          </div>
        )}
        {props.show && (
          <div className="mr-4 flex items-center">
            <span className="material-symbols-outlined cursor-pointer px-1 text-[1.37rem] text-gray-400 hover:text-gray-300">
              person
            </span>
            {firebase.user ? (
              <span className="text-sm text-gray-300">
                {firebase.user.displayName
                  ? firebase.user.displayName
                  : firebase.user.email}
              </span>
            ) : (
              <span className="text-sm text-gray-300">Unknown</span>
            )}
          </div>
        )}
        {props.show && (
          <div onClick={() => navigate("/settings")}>
            <span className="material-symbols-outlined cursor-pointer px-2 text-2xl text-gray-400 hover:text-gray-300">
              settings
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
