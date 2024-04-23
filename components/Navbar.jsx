import Logo from "../src/images/Logo.png";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full items-center justify-around bg-transparent py-3 text-white shadow-md shadow-gray-500">
      <img
        src={Logo}
        alt=""
        width={180}
        className="cursor-pointer mix-blend-lighten"
        onClick={() => navigate("/home")}
      />
      {/* <NavLink to="/">Loading Page</NavLink> */}
    </div>
  );
};

export default Navbar;
