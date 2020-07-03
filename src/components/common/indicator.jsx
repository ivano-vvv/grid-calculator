import React from "react";
import "./indicator.css";

export default function Indicator(props) {
  switch (props.type) {
    case "checkbox":
      return (
        <div className={"indicator-block " + props.className}>
          <button
            onClick={props.onClick}
            className={
              "indicator-block__checkbox indicator " +
              getStatusClass(props.type, props.isActive)
            }
          />
          <label
            htmlFor={"checkbox_" + props.value}
            className="indicator-block__label text"
          >
            {props.divider.toString()}
          </label>
        </div>
      );
  }

  function getStatusClass(type, isActive) {
    switch (type) {
      case "checkbox":
        return isActive ? "indicator-block__checkbox_active" : "";
      default:
        break;
    }
  }
}
