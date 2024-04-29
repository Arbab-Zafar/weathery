import { useFirebase } from "../context/Firebase";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import background from "../src/images/login-bg.jpeg";
import signinIllus from "../src/images/illustrations/login.png";

const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{6,}$/;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValidate, setEmailValidate] = useState(null);

  const firebase = useFirebase();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValidated = validateEmail(email);
    console.log(emailValidated);

    if (emailValidated) {
      firebase
        .signInWithEmail(email, password)
        .then((userCred) => {
          console.log("UserCred", userCred);
          toast.success(
            `Signed in as ${userCred.user.displayName === null ? userCred.user.email : userCred.user.displayName}!`,
            {
              autoClose: 3000,
              closeOnClick: true,
              draggable: true,
              theme: "dark",
            },
          );
          navigate("/home");
        })
        .catch((err) => {
          toast.error(err.code, {
            autoClose: 2000,
            closeOnClick: true,
            draggable: true,
            theme: "dark",
          });
        });
    }
  };

  const googleSignin = () => {
    firebase
      .signInWithGoogle()
      .then((userCred) => {
        toast.success(
          `Signed In as ${userCred.user.displayName === null ? userCred.user.email : userCred.user.displayName}!`,
          {
            autoClose: 3000,
            closeOnClick: true,
            draggable: true,
            theme: "dark",
          },
        );
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.code, {
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
          theme: "dark",
        });
      });
  };

  const passwordResetFunc = () => {
    console.log("hgdgfg");
    firebase
      .passwordReset()
      .then(() => {
        console.log("Sent!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
      setEmailValidate(false);
      toast.error("Enter valid email", {
        autoClose: 2500,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
      });
      return false;
    } else {
      setEmailValidate(true);
    }
    return emailRegex.test(email);
  };

  return (
    <div className="h-[97vh] w-full">
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
        className="-z-50 h-full w-full object-cover object-bottom brightness-50 grayscale filter"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div className="absolute right-6 -z-50 mt-10 w-96">
        <img
          src={signinIllus}
          alt="Signup Illustration"
          className="w-full mix-blend-lighten brightness-50
       contrast-200 grayscale filter"
        />
      </div>
      <div className="relative mx-auto my-4 w-fit">
        <h1 className="text-center text-4xl font-extrabold">Welcome back!</h1>
        <div className="absolute -right-5 h-1 w-4/6 bg-[#f5f5dc]"></div>
      </div>

      <div className="flex h-[85vh] w-full items-start justify-center bg-transparent">
        <div className="relative mt-10 flex flex-col items-center justify-center">
          <form action="" onSubmit={handleSubmit}>
            <div className="relative mb-8 flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-lg text-gray-300">
                mail
              </span>
              <input
                type="text"
                id="email"
                name="email"
                className={`h-[41px] w-96 rounded-3xl border ${emailValidate === false ? "border-red-500" : "border-gray-500"} bg-black bg-opacity-25 py-2.5 pl-11 text-sm text-gray-400 outline-none`}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="username"
                required
                // ref={emailRef}
              />
            </div>
            <div className="relative mb-12 flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-lg text-gray-300">
                lock
              </span>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-96 rounded-3xl border border-gray-500 bg-black bg-opacity-25 py-2.5 pl-11 text-sm text-gray-400 outline-none`}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                autoComplete="new-password"
                required
                // ref={passwordRef}
              />
              <div
                className="absolute right-1 top-12 mb-8"
                onClick={passwordResetFunc}
              >
                <span className="cursor-pointer text-sm font-bold hover:underline">
                  Forgot Password?
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="mb-4 flex w-96 select-none items-center justify-center rounded-3xl border border-gray-500 bg-transparent bg-opacity-100 px-3 py-1 text-sm text-gray-300 shadow-sm shadow-white ring-gray-400 hover:bg-black hover:bg-opacity-50 hover:font-bold hover:text-white active:translate-y-1 active:shadow-md active:ring-1"
              // onClick={() => handleSubmit()}
            >
              <span className="material-symbols-outlined mr-1 text-xl">
                login
              </span>
              <span>Sign In</span>
            </button>
          </form>
          <span className="mb-4 text-sm text-gray-300">or continue with</span>
          <button
            type="submit"
            className="mb-4 flex w-96 select-none items-center justify-center rounded-3xl border border-gray-500 bg-transparent bg-opacity-100 px-3 py-2 text-sm text-gray-300 shadow-sm shadow-white ring-gray-400 hover:bg-black hover:bg-opacity-50 hover:font-semibold hover:text-white active:translate-y-1 active:shadow-md active:ring-1"
            onClick={googleSignin}
          >
            <svg
              className="me-2 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>
          <div className="text-sm">
            <span>Don&apos;t have an account?</span>
            <span
              className="ml-1 cursor-pointer font-bold hover:underline"
              onClick={() => navigate("/signup")}
            >
              Signup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
