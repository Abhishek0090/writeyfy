import MiniCalendar from "~/components/calendar/MiniCalendar";
import WeeklyRevenue from "~/layouts/AdminLayout/default/components/WeeklyRevenue";
import TotalSpent from "~/layouts/AdminLayout/default/components/TotalSpent";
import PieChartCard from "~/layouts/AdminLayout/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "~/components/widget/Widget";
import CheckTable from "~/layouts/AdminLayout/default/components/CheckTable";
import ComplexTable from "~/layouts/AdminLayout/default/components/ComplexTable";
import DailyTraffic from "~/layouts/AdminLayout/default/components/DailyTraffic";
import TaskCard from "~/layouts/AdminLayout/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import CountUp from "react-countup";
import { HiUsers } from "react-icons/hi";
import { IoIosApps } from "react-icons/io";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<HiUsers className="h-7 w-7" />}
          title={"Total Users"}
          subtitle={<CountUp end={4000} />}
        />
        <Widget
          icon={<IoIosApps className="h-6 w-6" />}
          title={"Total Writers"}
          subtitle={<CountUp  start={0} end={50000}  />}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Assignments"}
          subtitle={<CountUp  start={0} end={9999}  />}
        />
        {/* <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
        /> */}
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
