import React from "react";

export const View = ({ datas }) => {
  return datas.map((data) => (
    <tr key={data.name}>
      <td>{data.name}</td>
      <td>{data.branch}</td>
      <td>{data.phoneNo}</td>
      <td>{data.address}</td>
    </tr>
  ));
};
