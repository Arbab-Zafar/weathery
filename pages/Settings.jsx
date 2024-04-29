import { useNavigate } from "react-router-dom";

import background from "../src/images/settings-bg.gif";
import signupIllus from "../src/images/illustrations/settings.png";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute left-5 cursor-pointer text-gray-400 hover:text-gray-300"
          onClick={() => navigate("/home")}
        >
          <span className="material-symbols-outlined text-4xl">
            arrow_left_alt
          </span>
        </div>
        <img
          src={background}
          alt=""
          className="-z-50 h-full w-full object-cover brightness-50 grayscale filter"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <div className="absolute right-6 -z-50 mt-16 w-[22rem]">
          <img
            src={signupIllus}
            alt="Signup Illustration"
            className="w-full mix-blend-lighten brightness-50
             contrast-200 grayscale filter"
          />
        </div>
        <div className="relative mx-auto my-4 w-fit">
          <h1 className="text-center text-4xl font-extrabold">Modify</h1>
          <div className="absolute -right-5 h-1 w-4/6 bg-[#f5f5dc]"></div>
        </div>
        <div className="ml-40 mt-10 flex h-[85vh] flex-col bg-transparent">
          <div className="flex w-fit items-center rounded-md bg-black bg-opacity-10 px-6 py-1 text-gray-300">
            <span className="text-lg font-semibold">Unit: </span>
            <label className="mx-5 flex items-center text-sm">
              <input
                type="radio"
                name="temperatureUnit"
                value="celsius"
                checked
                className="mr-1"
              />
              Celsius
            </label>
            <label className="flex items-center text-sm">
              <input
                type="radio"
                name="temperatureUnit"
                value="fahrenheit"
                className="mr-1"
              />
              Fahrenheit
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
