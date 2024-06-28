import React from "react";
import "./Main.css";
import Cards1 from "./Cards/Cards1";
import Card2 from "./Cards/Card2";
const Main = () => {
  return (
    <>
      <div className="main">
        <div
          className="container"
          style={{ display: "flex", margin: "0px 30px 30px 30px" }}
        >
          <Cards1 />
          <Cards1 />
          <Cards1 />
          <Cards1 />
        </div>

        <div
          className="container2"
          style={{ margin: "10px", marginLeft: "30px" }}
        >
          <Card2 />
        </div>

        <div
          className="container"
          style={{ display: "flex", margin: "0px 30px 30px 30px" }}
        >
          <Cards1 />
          <Cards1 />
          <Cards1 />
          <Cards1 />
        </div>

        <div
          className="container"
          style={{ display: "flex", margin: "0px 30px 30px 30px" }}
        >
          <Cards1 />
          <Cards1 />
          <Cards1 />
          <Cards1 />
        </div>

        <div
          className="container2"
          style={{ margin: "10px", marginLeft: "30px" }}
        >
          <Card2 />
        </div>
      </div>
    </>
  );
};

export default Main;
