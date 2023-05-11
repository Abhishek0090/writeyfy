// Soft UI Dashboard React layouts
import Dashboard from "~/layouts/WriterPanel/dashboard/index"; 
import Billing from "~/pages/WriterPanel/billing/index"; 
import MyProfile from "~/pages/WriterPanel/MyProfile/index";
import Inquiry from "~/pages/WriterPanel/Inquiry/index";
import Chats from "~/pages/WriterPanel/Chats/index";
import WriterDetails from "~/pages/WriterPanel/WriterDetails/index";
import Assignments from "~/pages/WriterPanel/Assignments/index";

// Soft UI Dashboard React icons
import Shop from "~/components/icons/Shop"; 
import CustomerSupport from "~/components/icons/CustomerSupport"; 

import { MdChat, MdOutlineAddTask, MdOutlineGrading ,MdEditSquare } from "react-icons/md";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/writers/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   route: "/writers/billing",
  //   icon: <CreditCard size="12px" />,
  //   component: <Billing />,
  //   noCollapse: true,
  // },

  {
    type: "collapse",
    name: "Inquiry",
    key: "inquiry",
    route: "/writers/inquiry",
    icon: <MdOutlineAddTask size="12px" />,
    component: <Inquiry />,
    noCollapse: true,
  },

  // {
  //   type: "collapse",
  //   name: "Writer",
  //   key: "writer",
  //   route: "/writers/writerdetails",
  //   icon: <MdEditSquare size="12px" />,
  //   component: <WriterDetails />,
  //   noCollapse: true,
  // },

  {
    type: "collapse",
    name: "Assignments",
    key: "assignments",
    route: "/writers/assignments",
    icon: <MdOutlineGrading size="12px" />,
    component: <Assignments />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "My Profile",
    key: "myprofile",
    route: "/writers/myprofile",
    icon: <CustomerSupport size="12px" />,
    component: <MyProfile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Chats",
    key: "chats",
    route: "/writers/chats",
    icon: <MdChat size="12px" />,
    component: <Chats />,
    noCollapse: true,
  }, 
];

export default routes;
