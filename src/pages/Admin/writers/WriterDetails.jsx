import ProfileBanner from "~/pages/Admin/users/components/ProfileBanner";
import General from "~/pages/Admin/writers/components/General";
import Project from "~/pages/Admin/writers/components/Project";
import OtherInfo from "~/pages/Admin/writers/components/OtherInfo";
import PersonalInfo from "~/pages/Admin/writers/components/PersonalInfo";

const WriterDetails = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-full mt-3 flex h-fit flex-col gap-5 lg:grid  lg:!grid-cols-9 ">
        <div className="col-span-4 lg:!mb-0">
          <ProfileBanner />
        </div>
        <div className="col-span-5 lg:!mb-0 ">
          <General />
        </div>
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <PersonalInfo />
        </div>
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <OtherInfo />
        </div>

        {/* <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div> */}
      </div>

      <div className="grid h-full grid-cols-1 gap-5  ">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div>
      </div>
    </div>
  );
};

export default WriterDetails;
