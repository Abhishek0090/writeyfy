import ProfileBanner from "~/pages/Admin/assignments/components/Banner";
import General from "~/pages/Admin/assignments/components/General";
import Project from "~/pages/Admin/assignments/components/Project";
import OtherInfo from "~/pages/Admin/assignments/components/OtherInfo";
import PersonalInfo from "~/pages/Admin/assignments/components/PersonalInfo";

const AssignmentDetails = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-full mt-3 flex h-fit flex-col gap-5 lg:grid  ">
        <div className="col-span-5 lg:!mb-0 ">
          <General />
        </div>
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        {/* <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <PersonalInfo />
        </div> */}
        {/* <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <OtherInfo />
        </div> */}

        {/* <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div> */}
      </div>

      <div className="grid h-full grid-cols-1 gap-5  ">
        {/* <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div> */}
      </div>
    </div>
  );
};

export default AssignmentDetails;
