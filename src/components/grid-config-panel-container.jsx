import React from "react";
import GridConfigPanel from "./grid-config-panel";
import { useSelector } from "react-redux";

export default function GridConfigPanelContainer(props) {
  const gridConfig = useSelector((state) => state.gridConfig);

  return <GridConfigPanel {...props} gridConfig={gridConfig} />;
}
