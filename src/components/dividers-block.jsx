import React from "react";
import Indicator from "./common/indicator";
import "./dividers-block.css";

export default function DividersBlock(props) {
  return (
    <div className={"dividers-block " + props.className}>
      <div className="dividers-block__column">
        <p className="text dividers-block__label">
          Columns width can be divided by:
        </p>
        <div className="dividers-block__indicators-panel">
          {props.values.columnDividers.map((d) => {
            return (
              <Indicator
                className="dividers-block__indicator"
                key={d.divider}
                divider={d.divider}
                isActive={d.value}
              />
            );
          })}
        </div>
      </div>
      <div className="dividers-block__gutter">
        <p className="text dividers-block__label">
          Gutters width can be divided by:
        </p>
        <div className="dividers-block__indicators-panel">
          {props.values.gutterDividers.map((d) => {
            return (
              <Indicator
                className="dividers-block__indicator"
                key={d.divider}
                divider={d.divider}
                isActive={d.value}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
