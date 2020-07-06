import React from "react";
import GridPreviewContainer from "./grid-preview-container";
import "./result-block.css";
import GridConfigPanelContainer from "./grid-config-panel-container";
import DividersBlockContainer from "./dividers-block-container";

export default function ResultBlock(props) {
  return (
    <div className={"result-block " + props.className}>
      <GridPreviewContainer className="result-block__grid-preview" />
      <GridConfigPanelContainer className="result-block__grid-config-panel" />
      <DividersBlockContainer className="result-block__dividers-block" />
    </div>
  );
}
