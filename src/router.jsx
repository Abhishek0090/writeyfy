import { Triangle } from "react-loader-spinner";

//hero section
import Intro from "~/components/Intro/Intro";

//writers Section
import HandWritten from "~/pages/Writers/HandWritten/HandWritten";
import TechnicalDrawing from "~/pages/Writers/TechnicalDrawing/TechnicalDrawing";
import ArtCraft from "~/pages/Writers/ArtCraft/ArtCraft";
import WriterPPT from "~/pages/Writers/WriterPPT/WriterPPT";

//writers Section
import { Suspense, lazy } from "react";
import Layout from "~/layouts/BaseLayout";

//Writer Panel
import Dashboard from "~/layouts/WriterPanel/dashboard/index";
import Billing from "~/pages/WriterPanel/billing/index";
import MyProfile from "~/pages/WriterPanel/MyProfile/index";
import Chats from "~/pages/WriterPanel/Chats/index";
import Assignments from "~/pages/WriterPanel/Assignments/index";
import AssignmentsDetails from "~/pages/WriterPanel/Assignments/components/details/index";
import Inquiry from "~/pages/WriterPanel/Inquiry/index";
import WriterDetails from "~/pages/WriterPanel/WriterDetails/index";
import InquiryDetails from "~/pages/WriterPanel/Inquiry/components/details/index";


//Admin Panel

import ChatDetails from "~/components/ChatDetails/index";

const Loader = (Component) => (props) => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Triangle
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "300px auto",
              }}
              wrapperClassName=""
              visible={true}
            />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    </>
  );
};

const WriterLayout = Loader(lazy(() => import("~/pages/Writers/Writer")));

const WriterPanel = Loader(
  lazy(() => import("~/layouts/WriterPanel/WriterDashboardLayout"))
);

const AdminLayout = Loader(lazy(() => import("~/layouts/AdminLayout/index")));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Intro />,
      },
      {
        path: "/writer",
        element: <WriterLayout />,
      },
      {
        path: "/about",
        element: <div>hi bro</div>,
      },
      {
        path: "/writer/handwritten",
        element: <HandWritten />,
      },
      {
        path: "/writer/techdrawing",
        element: <TechnicalDrawing />,
      },
      {
        path: "/writer/artcraft",
        element: <ArtCraft />,
      },
      {
        path: "/writer/writerppt",
        element: <WriterPPT />,
      },
    ],
  },
  {
    path: "admin/*",
    element: <AdminLayout />,
  },
  {
    path: "/",
    element: <WriterPanel />,
    children: [
      {
        path: "/writers/dashboard",
        element: <Dashboard />,
      },
      // {
      //   path: "/writers/billing",
      //   element: <Billing />,
      // },
      {
        path: "/writers/myprofile",
        element: <MyProfile />,
      },
      // {
      //   path: "/writers/writerdetails",
      //   element: <WriterDetails />,
      // },
      {
        path: "/writers/assignments",
        element: <Assignments />,
      },
      {
        path: "/writers/assignments/details",
        element: <AssignmentsDetails />,
      },
      {
        path: "/writers/chats",
        element: <Chats />,
      },
      {
        path: "/writers/chats/details",
        element: <ChatDetails />,
      },
      {
        path: "/writers/inquiry",
        element: <Inquiry />,
      },
      {
        path: "/writers/inquiry/details",
        element: <InquiryDetails />,
      },
    ],
  },
];

export default routes;
