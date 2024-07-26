import Logo from "../src/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
// import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const firebase = useFirebase();

  return (
    <div className="flex w-full items-center justify-between bg-transparent px-4 py-3 text-white shadow-md shadow-gray-700">
      <div className="w-1/3"></div>
      <div className="flex flex-grow justify-center gap-10">
        <img
          src={Logo}
          alt="Logo"
          width={180}
          className="cursor-pointer mix-blend-lighten"
          onClick={() => navigate("/home")}
        />
        {props.show && (
          <div className="flex items-center">
            <span className="material-symbols-outlined cursor-pointer pr-[0.15rem] text-xl text-gray-400 hover:text-gray-300">
              location_on
            </span>
            <span className="text-sm text-gray-300">Gaya</span>
          </div>
        )}
        {props.show && (
          <div className="flex items-center gap-1 text-sm text-gray-300">
            <span className="cursor-pointer hover:font-semibold hover:text-white">
              °C
            </span>
            <span>/</span>
            <span className="cursor-pointer hover:font-semibold hover:text-white">
              °F
            </span>
          </div>
        )}
      </div>
      <div className="flex w-1/3 items-center justify-end">
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
