import { useNavigate } from "react-router-dom";
import background from "../src/images/start-bg.jpeg";
import background2 from "../src/images/start_bg_2.jpg";
import start_1 from "../src/images/illustrations/start_1.svg";
import start_2 from "../src/images/illustrations/start_2.svg";
import HeroOne from "../components/HeroOne";
import HeroTwo from "../components/HeroTwo";

const Start = () => {
  return (
    <>
      <HeroOne
        isNavbar={true}
        background={background}
        heading="Weatherly: Your Ultimate Free Weather Companion"
        para=<>
          Weatherly is your <b>go-to weather companion</b>, providing
          <b> real-time</b>, <b>hyper-local forecasts</b> with precision.
          Whether planning a trip, heading to work, or enjoying the outdoors,
          stay prepared with <b>AI-powered insights</b> and
          <b> accurate weather data.</b>
          <br /> <br />
          With an intuitive interface, you can track{" "}
          <b>temperature, humidity, wind speeds</b>, and more. Get{" "}
          <b>instant alerts</b> for <b>rain, storms, and extreme conditions</b>,
          ensuring you never get caught off guard. Unlike generic forecasts,
          Weatherly delivers <b>precise, location-based updates </b>
          tailored to your needs.
          <br /> <br />
          Perfect for travelers, adventurers, and professionals, Weatherly
          offers{" "}
          <b>interactive maps, radar tracking, and custom alerts—keeping </b>
          you ahead of any weather changes. Stay informed, stay safe, stay
          <b> Weatherly.</b>
        </>
        illustration={start_1}
        brightnessBg={75}
      />

      {/* Line */}
      <div className="flex h-[2px] w-full items-center justify-center bg-black">
        <div className="h-full w-1/2 bg-gray-600"></div>
      </div>

      <HeroTwo
        background={background2}
        heading="Weather Insights, Anytime, Anywhere."
        para=<>
          Weatherly brings you real-time weather updates no matter where you
          are. Whether you're heading to work, planning an outdoor adventure, or
          traveling, you can rely on accurate forecasts to keep you prepared.
          With AI-powered insights, Weatherly provides precise temperature,
          humidity, and wind speed data tailored to your location.
          <br />
          <br />
          Stay ahead of sudden weather changes with instant alerts for storms,
          rain, and extreme conditions. Our advanced technology ensures you
          receive timely notifications, helping you make informed decisions. No
          more unexpected downpours or heatwaves ruining your day—Weatherly has
          you covered.
          <br />
          <br />
          Designed for convenience, Weatherly offers a user-friendly experience
          across all devices. Whether on your smartphone, tablet, or smartwatch,
          accessing weather insights is seamless. Wherever you go, Weatherly
          ensures you stay informed and ready for any forecast.
        </>
        illustration={start_2}
      />

      {/* Line */}
      <div className="flex h-[2px] w-full items-center justify-center bg-black">
        <div className="h-full w-1/2 bg-gray-600"></div>
      </div>
    </>
  );
};

export default Start;
