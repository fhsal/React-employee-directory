import React from "react";
import "../styles/Employees.css";

const Filter = (props) => {

  

  return (
    <tr className="tr">
      <td style-prop="margin-top: 10px" >
      <img  alt={props.firstName} src={props.icon} /></td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone} </td>

    </tr>
  );
};

export default Filter;


