// import { useState } from 'react'
import backGroundVideo from "../src/images/home-bg-video.mp4";
import illustration1 from "../src/images/illustrations/home.png";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="hero h-[100vh] w-full">
        <Navbar show={true} />
        <video
          loop
          muted
          autoPlay
          className="-z-50 h-full w-full object-cover brightness-50 grayscale filter"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <source src={backGroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute right-4 -z-50 mt-8">
          <img
            src={illustration1}
            alt="illustration1"
            className=" w-80 mix-blend-lighten brightness-50
             contrast-150 grayscale filter"
          />
        </div>
        <div className="mt-8 flex w-full items-center justify-between">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            minima assumenda! Cum excepturi voluptate esse dolor rem repudiandae
            error magni omnis distinctio optio modi nihil unde minus, dolorem
            natus, consequatur quod a iure numquam magnam dolores! Dolorum
            cupiditate id impedit modi laborum eum nostrum nulla eius possimus.
            Eum, temporibus nemo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            minima assumenda! Cum excepturi voluptate esse dolor rem repudiandae
            error magni omnis distinctio optio modi nihil unde minus, dolorem
            natus, consequatur quod a iure numquam magnam dolores! Dolorum
            cupiditate id impedit modi laborum eum nostrum nulla eius possimus.
            Eum, temporibus nemo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            minima assumenda! Cum excepturi voluptate esse dolor rem repudiandae
            error magni omnis distinctio optio modi nihil unde minus, dolorem
            natus, consequatur quod a iure numquam magnam dolores! Dolorum
            cupiditate id impedit modi laborum eum nostrum nulla eius possimus.
            Eum, temporibus nemo.
          </p> */}
        </div>
      </div>
    </>
  );
}

export default Home;
