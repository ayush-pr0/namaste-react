import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const WebPage = () => {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WebPage />);
