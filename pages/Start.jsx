import { useNavigate } from "react-router-dom";
import background from "../src/images/start-bg.jpeg";
import Navbar from "../components/Navbar";
import start_1 from "../src/images/illustrations/start_1.svg";

const Start = () => {
  return (
    <>
      <section className="hero relative h-[100vh] w-full">
        <Navbar show={false} signup={true} />
        <img
          src={background}
          alt=""
          className="-z-50 h-full w-full object-cover brightness-50 grayscale filter"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <div className="flex justify-between">
          <div className="ml-14 w-[75%]">
            <h1 className="relative top-0 mt-10 flex w-fit select-auto items-center justify-center bg-gradient-to-r from-white via-[#c7b587] to-gray-500 bg-clip-text py-4 pl-6 text-center text-3xl font-extrabold text-transparent">
              Weatherly: Your Ultimate Free Weather Companion
            </h1>
            {/* line */}
            <div className="ml-6 h-[1px] w-1/2 bg-gray-600"></div>
            <p className="mt-4 w-[90%] pl-6 text-sm leading-8">
              Weatherly is your <b>go-to weather companion</b>, providing
              <b> real-time</b>, <b>hyper-local forecasts</b> with precision.
              Whether planning a trip, heading to work, or enjoying the
              outdoors, stay prepared with <b>AI-powered insights</b> and
              <b> accurate weather data.</b>
              <br /> <br />
              With an intuitive interface, you can track{" "}
              <b>temperature, humidity, wind speeds</b>, and more. Get{" "}
              <b>instant alerts</b> for{" "}
              <b>rain, storms, and extreme conditions</b>, ensuring you never
              get caught off guard. Unlike generic forecasts, Weatherly delivers{" "}
              <b>precise, location-based updates </b>
              tailored to your needs.
              <br /> <br />
              Perfect for travelers, adventurers, and professionals, Weatherly
              offers{" "}
              <b>
                interactive maps, radar tracking, and custom alerts—keeping{" "}
              </b>
              you ahead of any weather changes. Stay informed, stay safe, stay
              <b> Weatherly.</b>
            </p>
          </div>
          <div className="absolute right-6 -z-50 mt-24 w-80">
            <img
              src={start_1}
              alt="Illustration"
              className="w-full mix-blend-lighten brightness-50
             contrast-75 grayscale filter"
            />
          </div>
        </div>
      </section>
      <div className="flex h-[2px] w-full items-center justify-center bg-black">
        <div className="h-full w-1/2 bg-gray-600"></div>
      </div>
      {/* Line */}
      <section className="hero2 relative w-full">
        <img
          src={background}
          alt=""
          className="-z-50 h-[100vh] w-full object-cover brightness-50 grayscale filter"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <div className="relative flex justify-between">
          <div className="ml-14 w-[75%]">
            <h1 className="relative top-0 mt-10 flex w-fit select-auto items-center justify-center bg-gradient-to-r from-white via-[#c7b587] to-gray-500 bg-clip-text py-4 pl-6 text-center text-3xl font-extrabold text-transparent">
              Weather Insights, Anytime, Anywhere.
            </h1>
            {/* line */}
            <div className="ml-6 h-[1px] w-1/2 bg-gray-600"></div>
            <p className="mt-4 w-[90%] pl-6 text-sm leading-8">
              Weatherly is your <b>go-to weather companion</b>, providing
              <b> real-time</b>, <b>hyper-local forecasts</b> with precision.
              Whether planning a trip, heading to work, or enjoying the
              outdoors, stay prepared with <b>AI-powered insights</b> and
              <b> accurate weather data.</b>
              <br /> <br />
              With an intuitive interface, you can track{" "}
              <b>temperature, humidity, wind speeds</b>, and more. Get{" "}
              <b>instant alerts</b> for{" "}
              <b>rain, storms, and extreme conditions</b>, ensuring you never
              get caught off guard. Unlike generic forecasts, Weatherly delivers{" "}
              <b>precise, location-based updates </b>
              tailored to your needs.
              <br /> <br />
              Perfect for travelers, adventurers, and professionals, Weatherly
              offers{" "}
              <b>
                interactive maps, radar tracking, and custom alerts—keeping{" "}
              </b>
              you ahead of any weather changes. Stay informed, stay safe, stay
              <b> Weatherly.</b>
            </p>
          </div>
          <div className="absolute right-6 -z-50 mt-24 w-80">
            <img
              src={start_1}
              alt="Illustration"
              className="w-full mix-blend-lighten brightness-50
             contrast-75 grayscale filter"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Start;
