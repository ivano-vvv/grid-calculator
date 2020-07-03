import React from "react";
import "./input.css";

export default function Input(props) {
  return (
    <input
      className={"input" + props.className}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    ></input>
  );
}
