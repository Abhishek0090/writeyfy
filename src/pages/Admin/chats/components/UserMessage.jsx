import React from "react";
import * as timeago from 'timeago.js';

const UserMessage = () => {
  return (
    <div className="item">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Osama_bin_Laden_portrait.jpg"
        alt=""
      />
      <p>
      <span className="text-[#000] font-[700]">~ Osama</span>
      <span className=" font-[700] float-right"> User</span>

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

export default UserMessage;
