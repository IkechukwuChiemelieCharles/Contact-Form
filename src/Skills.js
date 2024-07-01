import React from "react";

const Skills = (props) => {
  return (
    <div className="">
      <div className="  flex gap-1 p-1 mt-2">
        <p className="text-white text-xs text-nowrap ">{props.name}</p>
        <img className="w-5" src={props.img} alt="img" />
      </div>
    </div>
  );
};

export default Skills;
