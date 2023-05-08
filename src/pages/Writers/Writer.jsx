import React, { useEffect, useState } from "react";
import Card from "~/components/Card/Card";
import "~/pages/Writers/Writer.css";
import handwrittenImg from "~/assets/handwritten.svg";
import TechnicalDrawingImg from "~/assets/technicaldrawing.svg";
import ArtCraftImg from "~/assets/artcraft.svg";
import WriterPPTImg from "~/assets/writer_ppt.svg";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Writer = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("form")));
  const [isPresent, setIsPresent] = useState({
    "/writer/techdrawing": false,
    "/writer/handwritten": false,
    "/writer/artcraft": false,
    "/writer/writerppt": false,
  });

  const [color, setColor] = useState(null);

  const customArray = [];

  const navigate = useNavigate();

  const handleClick = (item, index) => {
    let arr = [];

    if (localStorage.getItem("form")) {
      arr = JSON.parse(localStorage.getItem("form"));

      if (!arr.includes(item)) {
        //checking weather array contain the id
        arr.push(item); //adding to array because value doesnt exists
        setIsPresent({ ...isPresent, [item]: true });
      } else {
        arr.splice(arr.indexOf(item), 1); //deleting
        setIsPresent({ ...isPresent, [item]: false });
      }
      localStorage.setItem("form", JSON.stringify(arr));
    } else {
      arr.push(item);
      localStorage.setItem("form", JSON.stringify(arr));
      setIsPresent({ ...isPresent, [item]: true });
    }
    setData(JSON.parse(localStorage.getItem("form")));
  };

  useEffect(() => {
    if (data !== null) {
      let obj = {};
      data.forEach((el) => {
        obj[el] = true;
      });
      setIsPresent(obj);
    }
  }, []);

  const nextHandler = () => {
    if (data !== null) {
      // navigate(data.at(-1));

      // data.forEach((el, idx) => {
      //   if (el == '/writer/handwritten') {
      //     // customArray.push(<General />);
      //     navigate('/writer/handwritten');
      //   } else if (el == '/writer/techdrawing') {
      //     // customArray.push(<General />);
      //     navigate('/writer/techdrawing');
      //   } else if (el == '/writer/artcraft') {
      //     // customArray.push(<General />);
      //     navigate('/writer/artcraft');
      //   } else if (el == '/writer/writerppt') {
      //     // customArray.push(<General />);
      //     navigate('/writer/writerppt');
      //   }
      // });

      navigate(data[0]);
    }
  };

  const WriterData = [
    {
      id: 1,
      name: "Hand Written",
      img: handwrittenImg,
      description:
        "Choose from the best writers to help you with hand written work, journal writing, copy paste content writing related assignments.",
      path: "/writer/handwritten",
    },
    {
      id: 2,
      name: "Technical Drawing",
      img: TechnicalDrawingImg,
      description:
        "Here you will find freelancers for technical drawings, biology diagrams, Engineering sheets, etc. type assignment help.",
      path: "/writer/techdrawing",
    },
    {
      id: 3,
      name: "Art & Craft",
      img: ArtCraftImg,
      description:
        "Need help in Scrap book making, chart paper work, colourful projects, etc. ? You’ll find related people here.",
      path: "/writer/artcraft",
    },
    {
      id: 4,
      name: "Writer PPT",
      img: WriterPPTImg,
      description:
        "Need help in Scrap book making, chart paper work, colourful projects, etc. ? You’ll find related people here.",
      path: "/writer/writerppt",
    },
  ];

  return (
    <>
      <div className="title"> SELECT Specification</div>
      <p className="text-gray-500 text-sm md:text-xl font-medium text-center max-w-[20rem] pt-2 md:max-w-xl mx-auto">
        Aliqua consequat anim nostrud ut in veniam aliquip do sint voluptate.
      </p>
      <div className="WriterSection">
        {WriterData?.map((item, index) => {
          return (
            <Card
              isPresent={isPresent[item.path]}
              key={index}
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.img}
              path={item.path}
              handleClick={handleClick}
              color={color}
            />
          );
        })}
      </div>
      {data !== null ? (
        <div className="mt-3 text-center">
          <button className="text-center button" onClick={nextHandler}>
            Proceed <KeyboardTabIcon color="white" />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Writer;
