import React from "react";

const TableData = (props) => {
  return (
    <tr>
      <td>{props.Type}</td>
      <td>{props.TicketID}</td>
      <td>{props.Summary}</td>
      <td>{props.Status}</td>
      <td>{props.CreatedDate}</td>
    </tr>
  );
};

export default TableData;
