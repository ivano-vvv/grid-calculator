import React from "react";
import DividersBlock from "./dividers-block";
import { useSelector } from "react-redux";

export default function DividersBlockContainer(props) {
  const gridConfig = useSelector((state) => state.gridConfig);

  return <DividersBlock {...props} values={gridConfig} />;
}
