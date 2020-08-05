import React from "react";
import TableData from "./TableData/TableData";

const Table = (props) => {
  const table = props.rowData;

  let tableData =
    table.length > 0
      ? table.map(function (object) {
          return (
            <TableData
              key={object.TicketID}
              Type={object.Type}
              TicketID={object.TicketID}
              Summary={object.Summary}
              Status={object.Status}
              CreatedDate={object.CreatedDate}
            />
          );
        })
      : "";

  return (
    <table>
      <tbody>
        <tr>
          <th>Type</th>
          <th>TicketID</th>
          <th>Summary</th>
          <th>Status</th>
          <th>CreatedDate</th>
        </tr>
        {tableData}
      </tbody>
    </table>
  );
};

export default Table;
