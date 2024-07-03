import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Output from "./components/Output";
import Code from "./components/Code";

function App() {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden ">
      <div>
        <Navbar />
      </div>

      <div className="max-w-max">
        <Sidebar />
      </div>
      <div className=" absolute top-16 right-0 h-full">
        <Output />
      </div>
      <div className="bg-slate-400 h-full w-[100vh] absolute top-14 left-16">
        <Code />
      </div>
    </div>
  );
}

export default App;
