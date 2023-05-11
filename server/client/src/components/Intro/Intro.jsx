import React from "react";
import "./Intro.css";
import App_Store from "~/assets/App_Store.png";
import Google_Play from "~/assets/Google_Play.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import phone from "~/assets/phone.png";
import Tilt from "react-parallax-tilt";

const Intro = () => {
  return (
    <div className="Intro flex h-[100vh] mt-8  ">
      <div className="Intro-left flex relative flex-[1] flex-col gap-4 ">
        <div className=" flex flex-col items-start gap-4 ">
          <span className="tracking-[3px] text-[color:var(--black)] font-bold  text-[2rem] mt-2">
            WRITEYFY{" "}
          </span>
          <span className=" text-[1rem] font-bold ml-0.5 -mt-5">
            by BLUEPEN
          </span>

          <span className="text-[2.3rem]">
            An app that helps you in handwritten assignments & much & more .
          </span>
          <span className="gap-2 tracking-wide flex flex-col text-base ">
            Right from copy paste hand writers to writers for needs such as PPT,
            Technical drawings and art and craft
            <br />
            Just WRITEYFY.
          </span>
        </div>
        <div className="links_icon flex gap-[2rem]">
          <Tilt>
            <a
              href="http://google.com"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <img src={App_Store} alt="" className="download_icon1" />
            </a>
          </Tilt>
          <Tilt>
            <a
              href="http://google.com"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <img src={Google_Play} alt="" className="download_icon1" />
            </a>
          </Tilt>
        </div>

        <div className="Intro-icons flex gap-[2rem] cursor-pointer ">
          <FacebookIcon style={{ color: "black", fontSize: "2.5rem" }} />
          <InstagramIcon style={{ color: "black", fontSize: "2.5rem" }} />
          <TwitterIcon style={{ color: "black", fontSize: "2.5rem" }} />
        </div>
      </div>

      <div className="Intro-right relative flex-1 flex left-20 justify-center">
        <Tilt>
          <img src={phone} alt="" style={{ height: "500px" }} />
        </Tilt>
      </div>
    </div>
  );
};

export default Intro;
