import React from "react";
import { MdArrowOutward } from "react-icons/md";

function WorkCard(props) {
  return (
    <div className="text-white w-[300px] md:w-[700px] lg:w-[1000px] container pt-2 md:pt-12 mx-auto">
      <div>
        <img src={props.image} alt="Image" />
      </div>
      <div className="py-6 w-[300px] md:w-[600px] lg:w-[850px]">
        <p className="text-lg md:text-xl font-thin text-gray">
          {props.altText}
        </p>
        <h1 className="font-bold text-2xl md:text-3xl mt-4">{props.title}</h1>
        <p className="text-lg md:text-xl font-thin text-gray mt-4">
          {props.description}
        </p>
        <a href={props.path} target="_blanK" rel="noreferrer">
          <span className="text-yellowish flex items-center hover:underline text-lg mt-4">
            {props.link}
            {props.hasArrow === "No" ? (
              ""
            ) : (
              <MdArrowOutward className="text-2xl ml-1" />
            )}
          </span>
        </a>{" "}
      </div>
    </div>
  );
}

export default WorkCard;
