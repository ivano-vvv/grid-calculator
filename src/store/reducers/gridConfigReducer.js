import calculateDividers from "../../calculations/calculateDividers";
import {
  calculateGridWithNewContainer,
  calculateGridWithNewColumnAmount,
} from "../../calculations/changeGrid";

let initialState = {
  container: 1200,
  gutter: 24,
  column: 78,
  amountOfColumn: 12,
  margin: 0,
  columnDividers: [
    { divider: 2, value: true },
    { divider: 3, value: true },
    { divider: 4, value: false },
    { divider: 5, value: false },
    { divider: 6, value: true },
    { divider: 7, value: false },
    { divider: 8, value: false },
    { divider: 9, value: false },
    { divider: 10, value: false },
    { divider: 11, value: false },
    { divider: 12, value: false },
  ],
  gutterDividers: [
    { divider: 2, value: true },
    { divider: 3, value: true },
    { divider: 4, value: true },
    { divider: 5, value: false },
    { divider: 6, value: true },
    { divider: 7, value: false },
    { divider: 8, value: true },
    { divider: 9, value: false },
    { divider: 10, value: false },
    { divider: 11, value: false },
    { divider: 12, value: true },
  ],
};

const SET_NEW_GRID_CONFIG = "SET_NEW_GRID_CONFIG";
export function setNewGridConfig(gridConfig) {
  return { type: SET_NEW_GRID_CONFIG, gridConfig };
}

const CHANGE_CONTAINER_WIDTH = "CHANGE_CONTAINER_WIDTH";
export function changeContainerWidth(delta) {
  return {
    type: CHANGE_CONTAINER_WIDTH,
    delta,
  };
}

const CHANGE_COLUMNS_AMOUNT = "CHANGE_COLUMNS_AMOUNT";
export function changeColumnAmount(delta) {
  return {
    type: CHANGE_COLUMNS_AMOUNT,
    delta,
  };
}

export default function gridConfigReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_GRID_CONFIG:
      return {
        ...action.gridConfig,
        columnDividers: calculateDividers(action.gridConfig).columnDividers,
        gutterDividers: calculateDividers(action.gridConfig).gutterDividers,
      };
    case CHANGE_CONTAINER_WIDTH:
      let newState__changeContainer = calculateGridWithNewContainer(
        action.delta,
        state
      );

      return {
        ...newState__changeContainer,
        columnDividers: calculateDividers(newState__changeContainer)
          .columnDividers,
        gutterDividers: calculateDividers(newState__changeContainer)
          .gutterDividers,
      };
    case CHANGE_COLUMNS_AMOUNT: {
      let newState__changeAmount = calculateGridWithNewColumnAmount(
        action.delta,
        state
      );

      return {
        ...newState__changeAmount,
        columnDividers: calculateDividers(newState__changeAmount)
          .columnDividers,
        gutterDividers: calculateDividers(newState__changeAmount)
          .gutterDividers,
      };
    }
    default:
      return state;
  }
}
