import Card from "~/components/Card";
import React from "react";

const OtherInfo = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Other Information
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600"></p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Pan Number</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            FYJPAMO33
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Account Number</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            65621213235
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">IFSC Code</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            KAPOSJE3
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Branch Code</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            911
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Beneficiary Name</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Osama Bin Laden
          </p>
        </div>
      </div>
    </Card>
  );
};

export default OtherInfo;
