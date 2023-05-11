import ProfileBanner from "~/pages/Admin/writers/components/ProfileBanner";
import General from "~/pages/Admin/writers/components/General";
import Project from "~/pages/Admin/writers/components/Project";
import OtherInfo from "~/pages/Admin/writers/components/OtherInfo";
import PersonalInfo from "~/pages/Admin/writers/components/PersonalInfo";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const WriterDetails = () => {
  const [writers, setWriters] = useState([]);
  const [detail, setDetails] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getwriterDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9000/writersData/getSpecificWriter/${id}`
        );

        setWriters(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getwriterDetails();
  }, []);

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-full mt-3 flex h-fit flex-col gap-5 lg:grid  lg:!grid-cols-9 ">
        <div className="col-span-4 lg:!mb-0">
          {writers.map((data) => {
            return <ProfileBanner data={data} />;
          })}
        </div>
        <div className="col-span-5 lg:!mb-0 ">
          {writers.map((data) => {
            return <General data={data} />;
          })}
        </div>
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          {writers.map((data) => {
            return <PersonalInfo data={data} />;
          })}
        </div>
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          {writers.map((data) => {
            return <OtherInfo data={data} />;
          })}
        </div>
      </div>

      <div className="grid h-full grid-cols-1 gap-5  ">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          {writers.map((data) => {
            return <Project data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WriterDetails;
