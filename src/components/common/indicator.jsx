import React from "react";
import "./indicator.css";

export default function Indicator(props) {
  switch (props.type) {
    case "checkbox":
      return (
        <div className={"indicator-block " + props.className}>
          <button
            onClick={props.onClick}
            name={props.divider}
            className={
              "indicator-block__checkbox indicator " +
              getStatusClass(props.type, props.isActive)
            }
          />
          <label
            htmlFor={"checkbox_" + props.divider.toString()}
            className="indicator-block__label text"
          >
            {props.divider.toString()}
          </label>
        </div>
      );
    default:
      return (
        <div className={"indicator-block " + props.className}>
          <div
            className={
              "indicator " + getStatusClass(props.type, props.isActive)
            }
          />
          <span className="indicator-block__label text">
            {props.divider.toString()}
          </span>
        </div>
      );
  }

  function getStatusClass(type, isActive) {
    switch (type) {
      case "checkbox":
        return isActive ? "indicator-block__indicator_active" : "";
      default:
        return isActive
          ? "indicator-block__indicator_active"
          : "indicator-block__indicator_disabled";
    }
  }
}
