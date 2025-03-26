import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import backGroundVideo from "../src/images/home-bg-video.mp4";
import { useFirebase } from "../context/Firebase";
import { toast } from "react-toastify";

export default function CitySelectionPopup() {
  const [isDropdownSelected, setIsDropdownSelected] = useState(true);
  const [toastShown, setToastShown] = useState(false);
  const navigate = useNavigate();
  const firebase = useFirebase();
  const popupRef = useRef(null);

  useEffect(() => {
    firebase.getLocationFunc();
  }, []);

  const handleClick = () => {
    if (!isDropdownSelected || firebase.locationName === "") {
      if (toastShown) return;
      else {
        toast.error("Please select a city to proceed.", {
          autoClose: 2500,
          closeOnClick: true,
          draggable: true,
          theme: "dark",
        });
        setToastShown(true);
        setTimeout(() => {
          setToastShown(false);
        }, 2600);
      }
    } else {
      navigate("/home");
    }
  };

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
            className="z-50 w-[95%] max-w-2xl rounded-xl bg-transparent p-6 text-white shadow-xl"
          >
            <h2 className="text-xl font-semibold">Select Your City</h2>
            <p className="text-sm text-gray-400">
              You can confirm or change your city below.
            </p>

            <div className="relative mt-4">
              <SearchBar setIsDropdownSelected={setIsDropdownSelected} />
            </div>
            {/* alert(
                      "You've blocked location access. Please enable it manually:\n\n" +
                        "🔹 Chrome: Settings > Privacy & Security > Site Settings > Location\n" +
                        "🔹 Firefox: Click the lock icon in the address bar > Permissions\n" +
                        "🔹 Safari: Settings > Privacy & Security > Location Services",
                    ) */}
            <div className="mt-8 flex justify-between gap-3">
              <div className="text-sm">
                <span>Trouble selecting a city?</span>
                <span
                  className="ml-1 cursor-pointer font-semibold hover:underline"
                  onClick={() =>
                    firebase.locationDenied
                      ? toast.error(
                          <>
                            Location access is blocked. Enable it manually:
                            <br />
                            <br />
                            🔹 <b>Chrome:</b> Settings &gt; Privacy & Security
                            &gt; Site Settings &gt; Location
                            <br />
                            🔹 <b>Firefox:</b> Click the lock icon in the
                            address bar &gt; Permissions
                            <br />
                            🔹 <b>Safari:</b> Settings &gt; Privacy & Security
                            &gt; Location Services
                            <br />
                            🔹 <b>Edge:</b> Settings &gt; Site Permissions &gt;
                            Location
                          </>,
                          {
                            autoClose: 7000,
                            closeOnClick: true,
                            draggable: true,
                            theme: "dark",
                          },
                        )
                      : toast.success(
                          "Location access granted. Please click 'Confirm' to proceed.",
                          {
                            autoClose: 2000,
                            closeOnClick: true,
                            draggable: true,
                            theme: "dark",
                          },
                        )
                  }
                >
                  Allow location access.
                </span>
              </div>
              <button
                onClick={() => handleClick()}
                // disabled={!isDropdownSelected || firebase.locationName === ""}
                className="select-none rounded-lg bg-[#2c2c2c] px-4 py-2 text-white transition-all duration-150 hover:bg-[#363636]"
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
