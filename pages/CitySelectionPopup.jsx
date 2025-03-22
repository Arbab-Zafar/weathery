import { useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import backGroundVideo from "../src/images/home-bg-video.mp4";

export default function CitySelectionPopup() {
  const [isDropdownSelected, setIsDropdownSelected] = useState(true);
  const navigate = useNavigate();
  const popupRef = useRef(null);

  return (
    <>
      <div className="hero h-[100vh] w-full">
        <Navbar />
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            ref={popupRef}
            className="w-[95%] max-w-2xl rounded-xl bg-transparent p-6 text-white shadow-xl"
          >
            <h2 className="text-xl font-semibold">Select Your City</h2>
            <p className="text-sm text-gray-400">
              You can confirm or change your city below.
            </p>

            <div className="relative mt-4">
              <SearchBar setIsDropdownSelected={setIsDropdownSelected} />
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => navigate("/home")}
                disabled={!isDropdownSelected}
                className="select-none rounded-lg bg-gray-500 px-4 py-2 text-white transition-all duration-200 hover:bg-gray-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
