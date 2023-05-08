import React from "react";
import * as timeago from "timeago.js";

const WriterMessage = () => {
  return (
    <div className="item owner">
      <img
        src="https://images.news18.com/ibnlive/uploads/2023/04/john-cena-birthday.jpg"
        alt=""
      />
      <p>
        <span className="text-[#000] font-[700]">~ John Cena</span>
        {/* <span className=" font-[700] float-right"> Writer</span> */}
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
        mollitia perspiciatis officiis voluptate? Sequi quae officia possimus,
        iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi!
        Error, tenetur!
        <br />
        <span className="float-right text-gray-800">23 min ago</span>
      </p>
    </div>
  );
};

export default WriterMessage;
