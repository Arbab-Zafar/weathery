import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import Loading1 from "../src/images/Loading-1.jpg";
import Loading2 from "../src/images/Loading-2.jpg";
import Logo from "../src/images/Logo.png";
import "../src/LoadingStyle.css";
// import Navbar from "../components/Navbar";

const Loading = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;
    if (firebase.opened) {
      navigate("/popup");
    } else if (!firebase.opened) {
      timeoutId = setTimeout(() => {
        firebase.setOpened(true);
        navigate("/popup"); // Navigate to "/home" route after 3.8 seconds
      }, 3800); // 3.8 seconds delay
    }

    return () => clearTimeout(timeoutId);
  }, [firebase, navigate]);
  if (!firebase.opened) {
    return (
      <>
        {/* <Navbar /> */}
        <div className="relative -z-10 h-[100vh] w-full overflow-hidden bg-[#373737]">
          <div className="flex h-full w-full justify-between">
            <img
              src={Loading1}
              alt=""
              className="slide-left w-1/2 brightness-50 grayscale filter"
              loading="eager"
            />
            <img
              src={Loading2}
              alt=""
              className="slide-right w-1/2 brightness-50 grayscale filter"
              loading="eager"
            />
          </div>
          <img
            src={Logo}
            alt=""
            className="logo absolute mix-blend-lighten transition-all duration-1000"
            loading="eager"
          />
        </div>
      </>
    );
  }
};

export default Loading;
