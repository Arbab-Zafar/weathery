// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Loading from "../pages/Loading";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Verify from "../pages/Verify";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
// import { useFirebase } from "../context/Firebase";

function App() {
  // const firebase = useFirebase();
  return (
    <Routes>
      <Route path="/" element={<Loading />} />;
      <Route path="/home" element={<Home />} />;
      <Route path="/signup" element={<Signup />} />;
      <Route path="/verify" element={<Verify />} />;
      <Route path="/login" element={<Login />} />;
      <Route path="/settings" element={<Settings />} />;
    </Routes>
  );
}

export default App;
