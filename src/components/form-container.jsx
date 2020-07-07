import React from "react";
import Form from "./form";
import { useSelector, useDispatch } from "react-redux";
import getActionOfChangingValues from "../validation/normalizeInputValues";
import { checkIndicator } from "../store/reducers/formReducer";
import calculateGrid from "../calculations/calculateGrid";

export default function FormContainer(props) {
  const values = useSelector((state) => state.form);
  const isErrorVisible = useSelector((state) => state.form.isErrorVisible);
  const dispatch = useDispatch();

  function onCheckboxClick(e) {
    e.preventDefault();
    dispatch(checkIndicator(e.target.name));
  }

  function onChange(e) {
    dispatch(getActionOfChangingValues(e.target.name, e.target.value, values));
  }

  function onSubmitClick(e) {
    e.preventDefault();
    dispatch(calculateGrid(values));
  }

  function disableSubmitButton(values) {
    if (
      !checkValue(values.maxWidth) ||
      !checkValue(values.columns) ||
      !checkValue(values.minGutter)
    ) {
      return true;
    } else return false;

    function checkValue(value) {
      if (!value) return false;

      if (Number(value) === 0) return false;

      return true;
    }
  }

  return (
    <Form
      className={props.className}
      values={values}
      onCheckboxClick={onCheckboxClick}
      onSubmitClick={onSubmitClick}
      onChange={onChange}
      errorsMessage={values.errorsMessage}
      isErrorVisible={isErrorVisible}
      isDisabled={disableSubmitButton(values)}
    />
  );
}
