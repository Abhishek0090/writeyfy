import Card from "~/components/Card";
import React from "react";
import { MdCheckCircle } from "react-icons/md";


const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Assignment Details
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600"></p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Assignment ID</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            1
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Name</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Project
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">User Name</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Osama Bin La den
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Writer Name</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            John Cena
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">City</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Kalyan
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Status</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          <div className="flex items-center gap-2">
          <MdCheckCircle className="text-green-500" /> Approved
          </div>
          </p>
        </div>

        {/* <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Birthday</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
                09 July 2001
            </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Qualification</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
                Simmmple Web LLC
            </p>
            </div> */}
      </div>
    </Card>
  );
};

export default General;
