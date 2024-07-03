import React from "react";
import cpp from "../assets/cpp.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import js from "../assets/js.svg";
import Ruby from "../assets/Ruby.svg";
import database from "../assets/database.svg";

function Sidebar() {
  const toolbarIcons = [
    { src: cpp, alt: "C++" },
    { src: java, alt: "Java" },
    { src: js, alt: "JavaScript" },
    { src: python, alt: "Python" },
    { src: Ruby, alt: "Ruby" },
    { src: database, alt: "Database" },
  ];
  return (
    <div className="w-10">
      <div className="flex flex-col max-w-max gap-5  bg-gray-400">
        {toolbarIcons.map((element, index, array) => {
          return (
            <button>
              <img
                src={element.src}
                alt={element.alt}
                key={index}
                width={50}
                height={50}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
