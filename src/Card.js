import React from "react";
import Skills from "./Skills";

const Card = (props) => {
  return (
    <div className="bg-white border-2 border-solid border-black m-5 ">
      <img className=" w-full  " src={props.img} />
      <h2 className="text-black text-xl font-bold text-center mt-2">
        Jonas Schmedtmann
      </h2>
      <p className="text-black text-center mt-2">
        Full stack web developer and teacher at udemy. when not coding or
        preparing a course i play board games to cook and eat or just to enjoy
        the portugese sun at the beach.
      </p>
      <div className="flex gap-2 mt-2">
        <div className="bg-blue-900 rounded-md">
          <Skills name="HTML & CSS" img="funghi.jpg" />
        </div>
        <div className="bg-yellow-900 rounded-md">
          <Skills name="Javascript" img="focaccia.jpg" />
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <div className="bg-green-900 rounded-md">
          <Skills name="web design" img="margherita.jpg" />
        </div>
        <div className="bg-red-900  rounded-md">
          <Skills name="Git and Github" img="prosciutto.jpg" />
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <div className="bg-blue-500  rounded-md">
          <Skills name="React" img="salamino.jpg" />
        </div>
        <div className="bg-red-900  rounded-md">
          <Skills name="Svelte" img="spinaci.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Card;
