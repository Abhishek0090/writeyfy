import React from "react";
import * as timeago from "timeago.js";

const AdminMessage = ({message}) => {
  return (
    <div className="item owner">
      <img
        src="https://e0.pxfuel.com/wallpapers/162/752/desktop-wallpaper-kokushibo-demon-slayer-kokushibo.jpg"
        alt=""
      />
      <p>
        <span className=" font-[700]">~ Admin</span>
        <span className=" font-[700] float-right"> Admin</span>
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
        mollitia perspiciatis officiis voluptate? Sequi quae officia possimus,
        iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi!
        Error, tenetur!
        <br />
        <span className="float-right  ">23 min ago</span>
      </p>
    </div>
  );
};

export default AdminMessage;
