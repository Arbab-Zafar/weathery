import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  reload,
  sendPasswordResetEmail,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBu78-VTpvf0Hg9UqPpF3Ckfwaij7-UFIc",
  authDomain: "weathery-1.firebaseapp.com",
  projectId: "weathery-1",
  storageBucket: "weathery-1.appspot.com",
  messagingSenderId: "355097884881",
  appId: "1:355097884881:web:5257a1c4b6b8fc6a5c2df0",
};

const FirebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(FirebaseApp);
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [locationCord, setLocationCord] = useState({});
  const [locationName, setLocationName] = useState("");
  const [locationDenied, setLocationDenied] = useState(true);

  const [user, setUser] = useState(null);
  const [unit, setUnit] = useState("C"); // default:Celsius

  const navigate = useNavigate();
  let verificationInterval;

  const getLocationFunc = () => {
    if (!navigator.geolocation) {
      setLocationDenied(true);
      console.error("Geolocation is not supported by this browser.");
      toast.error(
        "Location access unavailable. Please select your city manually!",
        {
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
          theme: "dark",
        },
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationCord({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });

        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data?.address) {
              setLocationName(
                `${data.address.city || data.address.town || data.address.village}, ${data.address.state}, ${data.address.country}`,
              );
              setLocationDenied(false);
              console.log(data);
            } else {
              setLocationName("");
              setLocationDenied(true);
              toast.error("Unable to determine your location!", {
                autoClose: 2000,
                closeOnClick: true,
                draggable: true,
                theme: "dark",
              });
            }
          })
          .catch(() => {
            setLocationDenied(true);
            toast.error("Unable to determine your location!", {
              autoClose: 2000,
              closeOnClick: true,
              draggable: true,
              theme: "dark",
            });
          });
      },
      (error) => {
        setLocationDenied(true);
        console.error("Error getting user location:", error);

        if (error.code === error.PERMISSION_DENIED) {
          toast.error(
            "Location permission denied. Enable it in your browser settings.",
            {
              autoClose: 2000,
              closeOnClick: true,
              draggable: true,
              theme: "dark",
            },
          );
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          toast.error("Location unavailable. Try again later.", {
            autoClose: 2000,
            closeOnClick: true,
            draggable: true,
            theme: "dark",
          });
        } else if (error.code === error.TIMEOUT) {
          toast.error("Location request timed out. Please retry.", {
            autoClose: 2000,
            closeOnClick: true,
            draggable: true,
            theme: "dark",
          });
        } else {
          toast.error("An unknown error occurred while fetching location.", {
            autoClose: 2000,
            closeOnClick: true,
            draggable: true,
            theme: "dark",
          });
        }
      },
    );
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        if (!user.emailVerified) {
          try {
            await reload(user); // Force refresh the user's authentication state
          } catch (error) {
            console.error("Error reloading user:", error);
          }
        }
      }
    });
  }, []);

  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  const passwordReset = () => {
    return sendPasswordResetEmail(auth, user.email);
  };

  const verifyEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      toast.info("Verification email sent!", {
        autoClose: 2000,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
      });
      verificationInterval = setInterval(checkVerificationStatus, 2000);
    } catch (error) {
      toast.error(error.code, {
        autoClose: 2000,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
      });
    }
  };
  const checkVerificationStatus = async () => {
    // Refresh user data
    if (auth.currentUser) {
      await auth.currentUser.reload();

      // Check if the user's email is verified
      if (auth.currentUser.emailVerified) {
        toast.success("Email verified!", {
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
          theme: "dark",
        });
        // Redirect the user to the dashboard or another page
        clearInterval(verificationInterval);
        navigate("/home");
      } else {
        console.log("Email not verified yet.");
        // Show a message or handle accordingly
      }
    }
  };

  console.log("LocationCord", locationCord);
  console.log("LocationName", locationName);
  // console.log(opened);

  return (
    <FirebaseContext.Provider
      value={{
        opened,
        setOpened,
        unit,
        setUnit,
        createUserWithEmail,
        signInWithEmail,
        signInWithGoogle,
        verifyEmail,
        user,
        passwordReset,
        getLocationFunc,
        locationCord,
        locationName,
        setLocationName,
        locationDenied,
        setLocationDenied,
        signOutUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export default FirebaseProvider;
