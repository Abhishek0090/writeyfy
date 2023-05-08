import React from "react";

// Admin Imports
import MainDashboard from "~/layouts/AdminLayout/default/index"; 
import Users from "~/pages/Admin/users/index"; 

// Icon Imports
import {
  MdHome, 
  MdBorderColor,
  MdAssignment
} from "react-icons/md"; 
import { AiOutlineWechat } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import UserDetails from "~/pages/Admin/users/UserDetails";
import WriterDetails from "~/pages/Admin/writers/WriterDetails"; 
import Assignment from "~/pages/Admin/assignments/index"; 
import Chats from "~/pages/Admin/chats/index"; 
import AssignmentDetails from "~/pages/Admin/assignments/AssignmentDetails"; 
import ChatDetails from "~/pages/Admin/chats/ChatDetails"; 
import Writers from "~/pages/Admin/writers";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "users",
    icon: <HiUserGroup className="h-6 w-6" />,
    component: <Users />,
    secondary: true,
  },
  {
    name: "Writers",
    layout: "/admin",
    path: "writers",
    icon: <MdBorderColor className="h-6 w-6" />,
    component: <Writers />,
    secondary: true,
  },
  {
    name: "Assignments",
    layout: "/admin",
    path: "assignments",
    icon: <MdAssignment className="h-6 w-6" />,
    component: <Assignment />,
    secondary: true,
  },
  {
    name: "All Chats",
    layout: "/admin",
    path: "chats",
    icon: <AiOutlineWechat className="h-6 w-6" />,
    component: <Chats />,
    secondary: true,
  },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  { 
    layout: "/admin",
    path: "users/details", 
    component: <UserDetails />,
    secondary: true,
  },
  { 
    layout: "/admin",
    path: "users/details", 
    component: <UserDetails />,
    secondary: true,
  },
  { 
    layout: "/admin",
    path: "writers/details", 
    component: <WriterDetails />,
    secondary: true,
  },
  { 
    layout: "/admin",
    path: "assignments/details", 
    component: <AssignmentDetails />,
    secondary: true,
  },
  { 
    layout: "/admin",
    path: "chats/details", 
    component: <ChatDetails />,
    secondary: true,
  },
];
export default routes;
