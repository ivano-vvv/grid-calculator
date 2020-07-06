import React from "react";
import GridPreview from "./grid-preview";
import { useSelector } from "react-redux";

export default function GridPreviewContainer(props) {
  const gridConfig = useSelector((state) => state.gridConfig);

  return <GridPreview {...props} gridConfig={gridConfig} />;
}
