import ProfileBanner from "~/pages/Admin/users/components/ProfileBanner";
import General from "~/pages/Admin/users/components/General";
import Notification from "~/pages/Admin/profile/components/Notification";
import Project from "~/pages/Admin/profile/components/Project";
import Storage from "~/pages/Admin/profile/components/Storage";
import Upload from "~/pages/Admin/profile/components/Upload";

const UserDetails = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-full mt-3 flex h-fit flex-col gap-5 lg:grid  lg:!grid-cols-9 ">
        <div className="col-span-3 lg:!mb-0">
          <ProfileBanner />
        </div>
        <div className="col-span-6 lg:!mb-0 ">
          <General />
        </div>

        {/* <div className="col-span-3 lg:!mb-0">
          <Storage />
        </div> */}

        {/* <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div> */}
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        {/* <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div> */}
      

        {/* <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div> */}
      </div>
    </div>
  );
};

export default UserDetails;
