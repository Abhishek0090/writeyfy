<tbody {...getTableBodyProps()}>
{page.map((row, index) => {
  prepareRow(row);
  return (
    <tr {...row.getRowProps()} key={index}>
      {row.cells.map((cell, index) => {
        let data = "";
        if (cell.column.Header === "WRITER ID") {
          data = (
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {cell.value}
            </p>
          );
        } else if (cell.column.Header === "NAME") {
          data = (
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {cell.value}
            </p>
          );
        } else if (cell.column.Header === "EMAIL") {
          data = (
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {cell.value}
            </p>
          );
        } else if (cell.column.Header === "CONTACT") {
          data = (
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {cell.value}
            </p>
          );
        } else if (cell.column.Header === "CITY") {
          data = (
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {cell.value}
            </p>
          );
        } else if (cell.column.Header === "STATUS") {
          data = (
            <div className="flex items-center gap-2">
              <div className={`rounded-full text-xl`}>
                {cell.value === "Approved" ? (
                  <MdCheckCircle className="text-green-500" />
                ) : cell.value === "Disable" ? (
                  <MdCancel className="text-red-500" />
                ) : cell.value === "Error" ? (
                  <MdOutlineError className="text-orange-500" />
                ) : null}
              </div>
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {cell.value}
              </p>
            </div>
          );
        } else if (cell.column.Header === "DATE") {
          data = (
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {cell.value}
            </p>
          );
        } else if (cell.column.Header === "PROGRESS") {
          data = <Progress width="w-[68px]" value={cell.value} />;
        } else if (cell.column.Header === "VIEW DETAILS") {
          data = (
            <Link to="/admin/writers/details">
              <MdVisibility className="h-5 w-5 cursor-pointer ml-7" />
            </Link>
          );
        }
        return (
          <td
            className="pt-[14px] pb-[18px] sm:text-[14px]"
            {...cell.getCellProps()}
            key={index}
          >
            {data}
          </td>
        );
      })}
    </tr>
  );
})}
</tbody>