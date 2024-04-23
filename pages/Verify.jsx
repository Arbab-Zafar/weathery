import background from "../src/images/dayBg2.jpeg";
import verifyIllus from "../src/images/verify.png";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Verify = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  //   console.log(firebase.user);
  const handleVerify = () => {
    firebase.verifyEmail();
    setShow(true);
  };
  if (!firebase.user) return <h1>Loading...</h1>;
  return (
    <>
      <div className="h-[97vh] w-full">
        <img
          src={background}
          alt=""
          className="-z-50 h-full w-full object-cover brightness-50 grayscale filter"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <div className="absolute right-6 -z-50 mt-8 w-96">
          <img
            src={verifyIllus}
            alt="Verify Illustration"
            className="w-full brightness-50
                 contrast-200 grayscale filter"
          />
        </div>
        <div className="relative mx-auto my-4 w-fit">
          <h1 className="text-center text-4xl font-extrabold">
            Account Verification
          </h1>
          <div className="absolute -right-5 h-1 w-4/6 bg-[#f5f5dc]"></div>
        </div>
        <div className="mx-auto mt-14 flex h-1/2 w-1/2 flex-col items-center  justify-evenly rounded-xl border bg-black bg-opacity-50 p-4 outline-none">
          <h2 className="open-sans-regular text-xl font-bold">
            Verify your email account!
          </h2>
          {show && (
            <span className=" text-sm">
              Click on the verification link we sent on{" "}
              <u>{firebase.user.email}</u>
            </span>
          )}
          {!show && (
            <button
              className="mb-4 flex w-52 select-none items-center justify-center rounded-3xl border border-gray-500 bg-transparent bg-opacity-100 px-3 py-1 text-sm text-gray-300 shadow-sm shadow-white ring-gray-400 hover:bg-black hover:bg-opacity-50 hover:text-white active:translate-y-1 active:shadow-md active:ring-1 hover:font-semibold"
              onClick={handleVerify}
            >
              <span className="material-symbols-outlined mr-1 text-xl">
                check_circle
              </span>
              <span>Verify</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Verify;
