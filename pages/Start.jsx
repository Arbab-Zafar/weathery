import { useNavigate } from "react-router-dom";
import background from "../src/images/start-bg.jpeg";
import Navbar from "../components/Navbar";
import illustration from "../src/images/illustrations/start.png";

const Start = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero h-[100vh] w-full">
        <Navbar />
        <img
          src={background}
          alt=""
          className="-z-50 h-full w-full object-cover brightness-50 grayscale filter"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <div className="flex justify-between">
          <div></div>
          <div className="absolute right-6 -z-50 mt-8 w-80">
            <img
              src={illustration}
              alt="Illustration"
              className="w-full mix-blend-lighten brightness-50
             contrast-200 grayscale filter"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
