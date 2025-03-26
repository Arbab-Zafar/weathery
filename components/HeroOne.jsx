import Navbar from "./Navbar";

const HeroOne = ({
  isNavbar,
  background,
  heading,
  para,
  illustration,
  brightnessBg,
  brightnessIllus,
  contrastIllus,
}) => {
  return (
    <section className="relative h-[100vh] w-full">
      {isNavbar && <Navbar show={false} signup={true} />}
      <img
        src={background}
        alt=""
        className={`-z-50 h-full w-full object-cover brightness-${brightnessBg ? brightnessBg : 50} grayscale filter`}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div className="flex justify-between">
        <div className="ml-14 w-[75%]">
          <h1 className="relative top-0 mt-10 flex w-fit select-auto items-center justify-center bg-gradient-to-r from-white via-[#c7b587] to-gray-500 bg-clip-text py-4 pl-6 text-center text-3xl font-extrabold text-transparent">
            {heading}
          </h1>
          {/* line */}
          <div className="ml-6 h-[1px] w-1/2 bg-gray-600"></div>
          <p className="mt-4 w-[90%] pl-6 text-sm leading-8">{para}</p>
        </div>
        <div className="absolute right-6 -z-50 mt-24 w-80">
          <img
            src={illustration}
            alt="Illustration"
            className={`w-full mix-blend-lighten brightness-${brightnessIllus ? brightnessIllus : 50}
             contrast-${contrastIllus ? contrastIllus : 75} grayscale filter`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
