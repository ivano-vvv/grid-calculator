import calculateDividers from "../../calculations/calculateDividers";

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

export default function gridConfigReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_GRID_CONFIG:
      return {
        ...action.gridConfig,
        columnDividers: calculateDividers(action.gridConfig).columnDividers,
        gutterDividers: calculateDividers(action.gridConfig).gutterDividers,
      };
    default:
      return state;
  }
}
