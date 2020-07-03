import React from "react";
import Form from "./form";
import { useSelector } from "react-redux";

export default function FormContainer(props) {
  const values = useSelector((state) => state.form);

  function onCheckboxClick(e) {
    e.preventDefault();
  }

  return <Form className={props.className} values={values} onCheckboxClick={onCheckboxClick} />;
}
