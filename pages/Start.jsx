import { useNavigate } from "react-router-dom";
import background from "../src/images/start-bg.jpeg";
import Navbar from "../components/Navbar";
import illustration from "../src/images/illustrations/start.png";

const Start = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero h-[100vh] w-full">
        <Navbar show={false} />
        <img
          src={background}
          alt=""
          className="-z-50 h-full w-full object-cover brightness-50 grayscale filter"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <div className="flex justify-between">
          <div className="ml-14 w-[68%]">
            <h1 className="relative top-0 mt-16 flex w-fit select-auto items-center justify-center bg-gradient-to-r from-white via-[#c7b587] to-gray-500 bg-clip-text py-4 text-center text-3xl font-extrabold text-transparent shadow-sm shadow-gray-800">
              Weatherly: Your Ultimate Free Weather Companion
            </h1>
            <p className="mt-2 w-[80%] pl-6 text-sm leading-8">
              Stay informed with Weatherly&apos;s live weather updates all for
              free. Customize your weather experience with our tailored options,
              ensuring you have the most relevant information at your
              fingertips. Whether you&apos;re planning your day or staying safe,
              Weatherly has you covered.
            </p>
            <div className="flex items-center justify-center">
              <div className="group relative inline-flex">
                <div className="animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-white via-[#c7b587] to-gray-500 opacity-70 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="#"
                  title="Get quote now"
                  className="font-pj relative inline-flex h-[40px] w-[120px] items-center justify-center rounded-xl bg-gray-900 text-xs text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  role="button"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
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
