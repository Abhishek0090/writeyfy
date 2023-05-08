import React, { useEffect, useState } from "react";

const Card = ({
  id,
  name,
  description,
  image,
  path,
  handleClick,
  color,
  selectedId,
  isPresent,
}) => {
  console.log("isPresent", isPresent);
  return (
    <div
      className={`shadow-[0_4px_8px_0_rgba(0,0,0,0.3)] transition-[0.3s] w-[300px] h-[500px] flex flex-wrap items-center justify-center mt-10 rounded-[15px] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] hover:-translate-y-2.5 hover:cursor-pointer ${
        isPresent ? "bg-[#90EE90]" : ""
      }`}
      onClick={() => handleClick(path)}
      // style={{ backgroundColor: id === selectedId ? color : 'blue' }}
    >
      <div className="h-auto m-5 cardContainer">
        <div className="mainContent">
          <img src={image} className="" alt="content" />
          <div className="flex justify-between mt-3 text-lg titleSection">
            <b>{name}</b>
          </div>
          <div className="text-lg companyName">
            <p style={{ color: "grey" }}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
