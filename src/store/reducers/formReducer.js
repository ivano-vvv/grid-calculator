const initialState = {
  maxWidth: 1200,
  columns: 12,
  minGutter: 24,
  maxGutter: 0,
  margin: 0,
  checkboxes: [
    { divider: 2, value: false },
    { divider: 3, value: false },
    { divider: 4, value: false },
    { divider: 5, value: false },
    { divider: 6, value: false },
    { divider: 7, value: false },
    { divider: 8, value: false },
    { divider: 9, value: false },
    { divider: 10, value: false },
    { divider: 11, value: false },
    { divider: 12, value: false },
  ],
  maxValueErrors: {
    maxWidth: false,
    columns: false,
    minGutter: false,
    maxGutter: false,
    margin: false,
  },
  notNumberErrors: {
    maxWidth: false,
    columns: false,
    minGutter: false,
    maxGutter: false,
    margin: false,
  },
  errorsMessage: "",
  isErrorVisible: false,
  isBadParameters: false,
};

const CHANGE_MAX_WIDTH_VALUE = "CHANGE_MAX_WIDTH_VALUE";
export function changeMaxWidthValue(value) {
  return {
    type: CHANGE_MAX_WIDTH_VALUE,
    value,
  };
}

const CHANGE_COLUMNS_VALUE = "CHANGE_COLUMNS_VALUE";
export function changeColumnsValue(value) {
  return {
    type: CHANGE_COLUMNS_VALUE,
    value,
  };
}

const CHANGE_MIN_GUTTER_VALUE = "CHANGE_MIN_GUTTER_VALUE";
export function changeMinGutterValue(value) {
  return {
    type: CHANGE_MIN_GUTTER_VALUE,
    value,
  };
}

const CHANGE_MAX_GUTTER_VALUE = "CHANGE_MAX_GUTTER_VALUE";
export function changeMaxGutterValue(value) {
  return {
    type: CHANGE_MAX_GUTTER_VALUE,
    value,
  };
}

const CHANGE_MARGIN_VALUE = "CHANGE_MARGIN_VALUE";
export function changeMarginValue(value) {
  return {
    type: CHANGE_MARGIN_VALUE,
    value,
  };
}

const SET_MAX_VALUE_ERROR_ON_MAX_WIDTH = "SET_MAX_VALUE_ERROR_ON_MAX_WIDTH";
const SET_MAX_VALUE_ERROR_ON_COLUMNS = "SET_MAX_VALUE_ERROR_ON_COLUMNS";
const SET_MAX_VALUE_ERROR_ON_MIN_GUTTER = "SET_MAX_VALUE_ERROR_ON_MIN_GUTTER";
const SET_MAX_VALUE_ERROR_ON_MAX_GUTTER = "SET_MAX_VALUE_ERROR_ON_MAX_GUTTER";
const SET_MAX_VALUE_ERROR_ON_MARGIN = "SET_MAX_VALUE_ERROR_ON_MARGIN";
export function switchMaxValueError(inputName) {
  switch (inputName) {
    case "maxWidth":
      return {
        type: SET_MAX_VALUE_ERROR_ON_MAX_WIDTH,
      };
    case "columns":
      return {
        type: SET_MAX_VALUE_ERROR_ON_COLUMNS,
      };
    case "minGutter":
      return {
        type: SET_MAX_VALUE_ERROR_ON_MIN_GUTTER,
      };
    case "maxGutter":
      return {
        type: SET_MAX_VALUE_ERROR_ON_MAX_GUTTER,
      };
    case "margin":
      return {
        type: SET_MAX_VALUE_ERROR_ON_MARGIN,
      };
    default:
      break;
  }
}

const SET_NOT_A_NUMBER_ERROR_ON_MAX_WIDTH =
  "SET_NOT_A_NUMBER_ERROR_ON_MAX_WIDTH";
const SET_NOT_A_NUMBER_ERROR_ON_COLUMNS = "SET_NOT_A_NUMBER_ERROR_ON_COLUMNS";
const SET_NOT_A_NUMBER_ERROR_ON_MIN_GUTTER =
  "SET_NOT_A_NUMBER_ERROR_ON_MIN_GUTTER";
const SET_NOT_A_NUMBER_ERROR_ON_MAX_GUTTER =
  "SET_NOT_A_NUMBER_ERROR_ON_MAX_GUTTER";
const SET_NOT_A_NUMBER_ERROR_ON_MARGIN = "SET_NOT_A_NUMBER_ERROR_ON_MARGIN";
export function switchNotNumberError(inputName) {
  switch (inputName) {
    case "maxWidth":
      return {
        type: SET_NOT_A_NUMBER_ERROR_ON_MAX_WIDTH,
      };
    case "columns":
      return {
        type: SET_NOT_A_NUMBER_ERROR_ON_COLUMNS,
      };
    case "minGutter":
      return {
        type: SET_NOT_A_NUMBER_ERROR_ON_MIN_GUTTER,
      };
    case "maxGutter":
      return {
        type: SET_NOT_A_NUMBER_ERROR_ON_MAX_GUTTER,
      };
    case "margin":
      return {
        type: SET_NOT_A_NUMBER_ERROR_ON_MARGIN,
      };
    default:
      break;
  }
}

const CHECK_INDICATOR = "CHECK_INDICATOR";
export function checkIndicator(id) {
  return {
    type: CHECK_INDICATOR,
    id: Number(id),
  };
}

const ERROR_BAD_PARAMETERS = "ERROR_BAD_PARAMETERS";
export function errorBadParameters() {
  return {
    type: ERROR_BAD_PARAMETERS,
  };
}

const SHOW_ERROR = "SHOW_ERROR";
export function showError() {
  return {
    type: SHOW_ERROR,
  };
}

const HIDE_ERROR = "HIDE_ERROR";
export function hideError() {
  return {
    type: HIDE_ERROR,
  };
}

export default function FormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MAX_WIDTH_VALUE:
      return { ...state, maxWidth: action.value };
    case CHANGE_COLUMNS_VALUE:
      return { ...state, columns: action.value };
    case CHANGE_MIN_GUTTER_VALUE:
      return { ...state, minGutter: action.value };
    case CHANGE_MAX_GUTTER_VALUE:
      return { ...state, maxGutter: action.value };
    case CHANGE_MARGIN_VALUE:
      return { ...state, margin: action.value };
    case SET_MAX_VALUE_ERROR_ON_MAX_WIDTH:
      return {
        ...state,
        maxValueErrors: {
          ...state.maxValueErrors,
          maxWidth: !state.maxValueErrors.maxWidth,
        },
        errorsMessage: state.maxValueErrors.maxWidth
          ? ""
          : "Max. width is 5000 px",
      };
    case SET_MAX_VALUE_ERROR_ON_COLUMNS:
      return {
        ...state,
        maxValueErrors: {
          ...state.maxValueErrors,
          columns: !state.maxValueErrors.columns,
        },
        errorsMessage: state.maxValueErrors.columns
          ? ""
          : "Max. amount of columns is 24",
      };
    case SET_MAX_VALUE_ERROR_ON_MIN_GUTTER:
      return {
        ...state,
        maxValueErrors: {
          ...state.maxValueErrors,
          minGutter: !state.maxValueErrors.minGutter,
        },
        errorsMessage: state.maxValueErrors.minGutter
          ? ""
          : "Gutter can't be wider than container",
      };
    case SET_MAX_VALUE_ERROR_ON_MAX_GUTTER:
      return {
        ...state,
        maxValueErrors: {
          ...state.maxValueErrors,
          maxGutter: !state.maxValueErrors.maxGutter,
        },
        errorsMessage: state.maxValueErrors.maxGutter
          ? ""
          : "Gutter can't be wider than container",
      };
    case SET_MAX_VALUE_ERROR_ON_MARGIN:
      return {
        ...state,
        maxValueErrors: {
          ...state.maxValueErrors,
          margin: !state.maxValueErrors.margin,
        },
        errorsMessage: state.maxValueErrors.margin
          ? ""
          : "Margin can't be wider than half of the container",
      };
    case SET_NOT_A_NUMBER_ERROR_ON_MAX_WIDTH:
      return {
        ...state,
        maxValueErrors: {
          ...state.notNumberErrors,
          maxWidth: !state.notNumberErrors.maxWidth,
        },
        errorsMessage: state.notNumberErrors.maxWidth ? "" : "Only numbers",
      };
    case SET_NOT_A_NUMBER_ERROR_ON_COLUMNS:
      return {
        ...state,
        maxValueErrors: {
          ...state.notNumberErrors,
          columns: !state.notNumberErrors.columns,
        },
        errorsMessage: state.notNumberErrors.columns ? "" : "Only numbers",
      };
    case SET_NOT_A_NUMBER_ERROR_ON_MIN_GUTTER:
      return {
        ...state,
        maxValueErrors: {
          ...state.notNumberErrors,
          minGutter: !state.notNumberErrors.minGutter,
        },
        errorsMessage: state.notNumberErrors.minGutter ? "" : "Only numbers",
      };
    case SET_NOT_A_NUMBER_ERROR_ON_MAX_GUTTER:
      return {
        ...state,
        maxValueErrors: {
          ...state.notNumberErrors,
          maxGutter: !state.notNumberErrors.maxGutter,
        },
        errorsMessage: state.notNumberErrors.maxGutter ? "" : "Only numbers",
      };
    case SET_NOT_A_NUMBER_ERROR_ON_MARGIN:
      return {
        ...state,
        maxValueErrors: {
          ...state.notNumberErrors,
          margin: !state.notNumberErrors.margin,
        },
        errorsMessage: state.notNumberErrors.margin ? "" : "Only numbers",
      };
    case CHECK_INDICATOR:
      return {
        ...state,
        checkboxes: state.checkboxes.map((c) => {
          if (c.divider === action.id) {
            return {
              divider: action.id,
              value: !c.value,
            };
          } else return c;
        }),
      };
    case ERROR_BAD_PARAMETERS:
      return {
        ...state,
        errorsMessage: state.isBadParameters
          ? ""
          : "Please, choose other parameters",
        isBadParameters: !state.isBadParameters,
      };
    case SHOW_ERROR:
      return { ...state, isErrorVisible: true };
    case HIDE_ERROR:
      return { ...state, isErrorVisible: false };
    default:
      return state;
  }
}
