import WriterTable from "~/pages/Admin/writers/components/WriterTable";

import { columnsDataComplex } from "./variables/columnsData";
import tableDataComplex from "./variables/tableDataComplex.json";
import { useEffect, useState } from "react";
import axios from "axios";

const Writers = () => {
  // const []

  const [writers, setWriters] = useState(null);

  // useEffect(() => {
  //   const getwriterDetails = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:9000/writersData/getWriters"
  //       );

  //       console.log(res.data);

  //       setWriters(res.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getwriterDetails();
  // });

  return (
    <div className="mt-9 grid h-full grid-cols-1 gap-5 xl:grid-cols-2  ">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}

        {/* <WriterTable columnsData={columnsDataComplex} tableData={writers} /> */}

        <WriterTable />
      </div>
    </div>
  );
};

export default Writers;
