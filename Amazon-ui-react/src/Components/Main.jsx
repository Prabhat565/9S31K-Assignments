import React from "react";
import "./Main.css";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="container" style={{ display: "flex" }}>
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>

        <Card2 />

        <div className="container" style={{ display: "flex" }}>
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>

        <div className="container" style={{ display: "flex" }}>
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
        <Card2 />
      </div>
    </>
  );
};

export default Main;
