import React from "react";
import GridConfigPanel from "./grid-config-panel";
import { useSelector, useDispatch } from "react-redux";
import { changeContainerWidth, changeColumnAmount } from "../store/reducers/gridConfigReducer";

export default function GridConfigPanelContainer(props) {
  const gridConfig = useSelector((state) => state.gridConfig);
  const dispatch = useDispatch();

  const functionsOfChange = {
    decreaseContainer() {
      dispatch(changeContainerWidth(-1));
    },
    increaseContainer() {
      dispatch(changeContainerWidth(1));
    },

    decreaseColumnsAmount() {
      dispatch(changeColumnAmount(-1));
    },
    increaseColumnsAmount() {
      dispatch(changeColumnAmount(1));
    },
  };

  return (
    <GridConfigPanel
      {...props}
      gridConfig={gridConfig}
      functionsOfChange={functionsOfChange}
    />
  );
}
