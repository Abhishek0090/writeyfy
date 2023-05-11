import React, { useEffect, useState } from "react";

const Card = ({ name, description, image, path, handleClick, isPresent }) => {
  // console.log("isPresent", isPresent);
  return (
    <div
      className={` max-w-sm
      rounded-2xl
      text-[#1A2421]
      backdrop-blur-lg 
      [ bg-gradient-to-b from-white/60 to-white/30 ]
      [ border-[1px] border-solid border-white border-opacity-30 ]
      [ shadow-black/70 shadow-2xl ] transition-[0.3s] w-[300px] h-[500px] flex flex-wrap items-center justify-center mt-10 rounded-[15px] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]  hover:cursor-pointer   ${
        isPresent ? "bg-[#e38aed]" : ""
      }`}
      onClick={() => handleClick(path)}
    >
      <div className="h-auto m-5 cardContainer">
        <div className="mainContent">
          <img
            src={image}
            className="hover:scale-110 transition-all duration-500"
            alt="content"
          />
          <div className="flex justify-between mt-3 text-lg titleSection">
            <b>{name}</b>
          </div>
          <div className="text-lg companyName">
            <p style={{ color: "black" }}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
