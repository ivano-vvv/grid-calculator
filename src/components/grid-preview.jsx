import React from "react";
import "./grid-preview.css";
import getPreviewStyle from "../calculations/previewStyles";

export default function GridPreview(props) {
  let columns = [];

  if (props.gridConfig.amountOfColumn !== 0) {
    for (let i = 0; i < props.gridConfig.amountOfColumn; i++) {
      columns.push(
        <div
          key={i}
          className={"grid-preview__column"}
          style={
            i === props.gridConfig.amountOfColumn - 1
              ? null
              : getPreviewStyle(props.gridConfig).columnStyle
          }
        ></div>
      );
    }
  }

  return (
    <div
      className={"grid-preview " + props.className}
      style={getPreviewStyle(props.gridConfig).previewStyle}
    >
      {columns}
    </div>
  );
}
