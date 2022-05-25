import React from "react";
import Header from "./Header";
import "./Home.css";

function Home() {
  return (
    <div>
      <div
        id="home"
        className="container-fluid d-flex align-items-center justify-content-center bg-black m-0 text-light"
        style={{ height: "100vh" }}
      >
        <Header/>
      </div>
    </div>
  );
}

export default Home;
