import calculateDividers from "../../calculations/calculateDividers";
import {
  calculateGridWithNewContainer,
  calculateGridWithNewColumnAmount,
  calculateGridWithNewColumnWidth,
  calculateGridWithNewGutter,
} from "../../calculations/changeGrid";

let initialState = {
  container: 1200,
  gutter: 24,
  column: 78,
  amountOfColumn: 12,
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

const CHANGE_COLUMN_WIDTH = "CHANGE_COLUMN_WIDTH";
export function changeColumnWidth(delta) {
  return {
    type: CHANGE_COLUMN_WIDTH,
    delta,
  };
}

const CHANGE_GUTTER_WIDTH = "CHANGE_GUTTER_WIDTH";
export function changeGutter(delta) {
  return {
    type: CHANGE_GUTTER_WIDTH,
    delta,
  };
}

export default function gridConfigReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case SET_NEW_GRID_CONFIG:
      return {
        ...action.gridConfig,
        columnDividers: calculateDividers(action.gridConfig).columnDividers,
        gutterDividers: calculateDividers(action.gridConfig).gutterDividers,
      };
    case CHANGE_CONTAINER_WIDTH:
      newState = calculateGridWithNewContainer(action.delta, state);

      return {
        ...newState,
        columnDividers: calculateDividers(newState).columnDividers,
        gutterDividers: calculateDividers(newState).gutterDividers,
      };
    case CHANGE_COLUMNS_AMOUNT:
      newState = calculateGridWithNewColumnAmount(action.delta, state);

      return {
        ...newState,
        columnDividers: calculateDividers(newState).columnDividers,
        gutterDividers: calculateDividers(newState).gutterDividers,
      };
    case CHANGE_COLUMN_WIDTH:
      newState = calculateGridWithNewColumnWidth(action.delta, state);

      return {
        ...newState,
        columnDividers: calculateDividers(newState).columnDividers,
        gutterDividers: calculateDividers(newState).gutterDividers,
      };
    case CHANGE_GUTTER_WIDTH:
      newState = calculateGridWithNewGutter(action.delta, state);

      return {
        ...newState,
        columnDividers: calculateDividers(newState).columnDividers,
        gutterDividers: calculateDividers(newState).gutterDividers,
      };
    default:
      return state;
  }
}
