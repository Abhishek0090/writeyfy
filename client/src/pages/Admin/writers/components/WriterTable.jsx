import CardMenu from "~/components/Card/CardMenu";
import Card from "~/components/Card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";

import { DataGrid } from "@mui/x-data-grid";

import { MdVisibility } from "react-icons/md";

import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "name", headerName: "name", width: 130 },
//   { field: "email", headerName: "email", width: 130 },
//   { field: "number", headerName: "number", width: 130 },
//   { field: "city", headerName: "city", width: 130 },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", Name: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", Name: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", Name: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", Name: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", Name: "Daenerys", age: 34 },
//   { id: 6, lastName: "Melisandre", Name: null, age: 150 },
//   { id: 7, lastName: "Clifford", Name: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", Name: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", Name: "Harvey", age: 65 },
// ];

const WriterTable = (props) => {
  const [writers, setWriters] = useState([]);
  const [col, setcol] = useState(null);

  useEffect(() => {
    const getwriterDetails = async () => {
      try {
        const res = await axios.get(
          "http://localhost:9000/writersData/getWriters"
        );

        console.log(res.data);
        setWriters(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getwriterDetails();
  }, []);

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div class="relative flex items-center justify-between  ">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
          Writers
        </div>
        {/* <CardMenu /> */}
      </div>

      <div class="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 pr-30  pb-[10px] text-start dark:!border-navy-700">
              <th>
                <p className="text-xs tracking-wide text-gray-600">ID</p>
              </th>
              <th>
                <p className="text-xs tracking-wide text-gray-600">Name</p>
              </th>
              <th>
                <p className="text-xs tracking-wide text-gray-600">Email</p>
              </th>
              <th>
                <p className="text-xs tracking-wide text-gray-600">Contact</p>
              </th>
              <th>
                <p className="text-xs tracking-wide text-gray-600">City</p>
              </th>
              <th>
                <p className="text-xs tracking-wide ml-[-40px] text-gray-600">
                  View Details
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {writers.map((data) => {
              return (
                <>
                  <tr className="text-center h-[70px]">
                    <td>{data.id}</td>

                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.number}</td>
                    <td>{data.city}</td>
                    <td>
                      {" "}
                      <Link to={`/admin/writers/details/${data.id}`}>
                        <MdVisibility className="h-5 w-5 cursor-pointer ml-7 text-center" />
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        {/* <div style={{ height: 400, width: "100%" }}> */}
        {/* 
        {writers.map((data) => {
          <DataGrid
            rows={{
              id: data.id,
              name: data.name,
              email: data.email,
              number: data.number,
              city: data.city,
            }}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            style={{ color: "#fff" }}
            sx={{
              border: 0,
              textDecoration: "none",
              "& .MuiTablePagination-root": {
                color: "white",
              },
              "& .MuiDataGrid-root": {
                color: "white",
              },
              "& .MuiCheckbox-root": {
                color: "blue",
              },
            }}
          />;
        })} */}
        {/* </div> */}
      </div>
    </Card>
  );
};

export default WriterTable;
