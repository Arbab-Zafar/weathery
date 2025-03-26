const HeroTwo = ({ background, heading, para, illustration }) => {
  return (
    <section className="hero2 relative flex h-[100vh] w-full items-center">
      <img
        src={background}
        alt=""
        className="absolute left-0 top-0 -z-50 h-[100vh] w-full object-cover brightness-50 grayscale filter"
      />
      <div className="relative flex w-full items-center justify-between px-14">
        {/* Image on the Left */}
        <div className="w-80">
          <img
            src={illustration}
            alt="Illustration"
            className="contrast-25 w-full mix-blend-lighten brightness-100 grayscale filter"
          />
        </div>

        {/* Text on the Right */}
        <div className="w-[70%] text-left">
          <h1 className="bg-gradient-to-r from-white via-[#c7b587] to-gray-500 bg-clip-text py-4 text-3xl font-extrabold text-transparent">
            {heading}
          </h1>
          {/* Line */}
          <div className="h-[1px] w-1/2 bg-gray-600"></div>
          <p className="mt-4 text-sm leading-8">{para}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
