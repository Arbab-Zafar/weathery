import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFirebase } from "../context/Firebase";

import background from "../src/images/signup-bg.jpeg";
import signupIllus from "../src/images/illustrations/signup.png";

const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{6,}$/;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [emailValidate, setEmailValidate] = useState(null);
  const [passwordValidate, setPasswordValidate] = useState(null);
  const [confPasswordValidate, setConfPasswordValidate] = useState(null);

  const firebase = useFirebase();
  const navigate = useNavigate();
  console.log("User", firebase.user);

  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  // const confPasswordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValidated = validateEmail(email);
    const passwordValidated = validatePassword(password);
    const confPasswordValidated = validateConfPassword(confPassword);
    console.log(emailValidated, passwordValidated, confPasswordValidated);

    if (emailValidated && passwordValidated && confPasswordValidated) {
      firebase
        .createUserWithEmail(email, password)
        .then((userCred) => {
          console.log("UserCred", userCred);
          toast.success("Account created!", {
            autoClose: 2000,
            closeOnClick: true,
            draggable: true,
            theme: "dark",
          });
          navigate("/verify");
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
      .then(() => {
        toast.success("Account created!", {
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
          theme: "dark",
        });
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

  const validatePassword = (password) => {
    if (!passwordRegex.test(password)) {
      setPasswordValidate(false);
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long!", {
          autoClose: 2500,
          closeOnClick: true,
          draggable: true,
          theme: "dark",
        });
      } else {
        toast.error("Password must contain both letters and numbers!", {
          autoClose: 2500,
          closeOnClick: true,
          draggable: true,
          theme: "dark",
        });
      }
      return false;
    } else {
      setPasswordValidate(true);
    }
    return passwordRegex.test(password);
  };

  const validateConfPassword = (confPassword) => {
    if (confPassword !== password) {
      setConfPasswordValidate(false);
      toast.error("Retype the password correctly!", {
        autoClose: 2500,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
      });
      return false;
    } else {
      setConfPasswordValidate(true);
    }
    return true;
  };
  console.log("pass", password, "confPass", confPassword);
  // if (firebase.user) return navigate("/home");
  return (
    <>
      <div className="relative w-full overflow-hidden">
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
        <div className="absolute right-6 -z-50 mt-8 w-80">
          <img
            src={signupIllus}
            alt="Signup Illustration"
            className="w-full mix-blend-lighten brightness-50
             contrast-200 grayscale filter"
          />
        </div>
        <div className="relative mx-auto my-4 w-fit">
          <h1 className="text-center text-4xl font-extrabold">
            Let&apos;s get started
          </h1>
          <div className="absolute -right-5 h-1 w-4/6 bg-[#f5f5dc]"></div>
        </div>
        <p className="text-center text-sm text-gray-400">
          Create an account for the best experience, access settings options,
          and unlock more features!
        </p>
        <div className="flex h-[85vh] w-full items-start justify-center bg-transparent">
          <div className="mt-6 flex flex-col items-center justify-center">
            <form action="" onSubmit={handleSubmit}>
              <div className="relative mb-6 flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-lg text-gray-300">
                  mail
                </span>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className={`w-96 rounded-2xl border ${emailValidate === false ? "border-red-500" : "border-gray-500"} roboto-slab-normal bg-black bg-opacity-25 py-2.5 pl-11 text-sm text-gray-400 outline-none`}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  autoComplete="username"
                  required
                  // ref={emailRef}
                />
              </div>
              <div className="relative mb-6 flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-lg text-gray-300">
                  lock
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`w-96 rounded-2xl border ${passwordValidate === false ? "border-red-500" : "border-gray-500"} bg-black bg-opacity-25 py-2.5 pl-11 text-sm text-gray-400 outline-none`}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  autoComplete="new-password"
                  required
                  // ref={passwordRef}
                />
              </div>
              <div className="relative mb-6 flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-lg text-gray-300">
                  lock
                </span>
                <input
                  type="password"
                  id="confPassword"
                  name="confPassword"
                  className={`w-96 rounded-2xl border ${confPasswordValidate === false ? "border-red-500" : "border-gray-500"} bg-black bg-opacity-25 py-2.5 pl-11 text-sm text-gray-400 outline-none`}
                  placeholder="Confirm password"
                  onChange={(e) => setConfPassword(e.target.value)}
                  value={confPassword}
                  autoComplete="new-password"
                  required
                  // ref={confPasswordRef}
                />
              </div>

              <button
                type="submit"
                className="mb-4 flex w-96 select-none items-center justify-center rounded-2xl border border-gray-500 bg-transparent bg-opacity-100 px-3 py-1 text-sm text-gray-300 shadow-sm shadow-white ring-gray-400 hover:bg-black hover:bg-opacity-50 hover:font-semibold hover:text-white active:translate-y-1 active:shadow-md active:ring-1"
                // onClick={() => handleSubmit()}
              >
                <span className="material-symbols-outlined mr-1 text-xl">
                  person_add
                </span>
                <span>Sign Up</span>
              </button>
            </form>
            <span className="mb-4 text-sm text-gray-300">or continue with</span>
            <button
              type="submit"
              className="mb-4 flex w-96 select-none items-center justify-center rounded-2xl border border-gray-500 bg-transparent bg-opacity-100 px-3 py-2 text-sm text-gray-300 shadow-sm shadow-white ring-gray-400 hover:bg-black hover:bg-opacity-50 hover:font-semibold hover:text-white active:translate-y-1 active:shadow-md active:ring-1"
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
              <span>Already have an account?</span>
              <span
                className="ml-1 cursor-pointer font-bold hover:underline"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
