import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FirebaseProvider from "../context/Firebase.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <App />
        <ToastContainer
          autoClose={3000}
          theme="dark"
          bodyClassName="toastBody"
        />
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
