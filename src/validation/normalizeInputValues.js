import {
  changeMaxWidthValue,
  changeColumnsValue,
  changeMinGutterValue,
  changeMaxGutterValue,
  changeMarginValue,
  switchMaxValueError,
  switchNotNumberError,
  showError,
  hideError,
} from "../store/reducers/formReducer";

export default function getActionOfChangingValues(name, value, allValues) {
  if (isNaN(value)) {
    return (dispatch) => {
      dispatch(switchNotNumberError(name));
      dispatch(showError());
      setTimeout(dispatch, 2200, switchMaxValueError(name));
      setTimeout(dispatch, 2000, switchNotNumberError(name));
    };
  }

  switch (name) {
    case "maxWidth":
      if (Number(value) >= 5000) {
        return (dispatch) => {
          dispatch(changeMaxWidthValue(5000));
          dispatch(switchMaxValueError(name));
          dispatch(showError());
          setTimeout(dispatch, 2200, switchMaxValueError(name));
          setTimeout(dispatch, 2000, hideError());
        };
      }

      return (dispatch) => {
        dispatch(hideError());
        dispatch(changeMaxWidthValue(value));
      };
    case "columns":
      if (Number(value) >= 24) {
        return (dispatch) => {
          dispatch(changeColumnsValue(24));
          dispatch(switchMaxValueError(name));
          dispatch(showError());
          setTimeout(dispatch, 2200, switchMaxValueError(name));
          setTimeout(dispatch, 2000, switchMaxValueError(name));
        };
      }

      return (dispatch) => {
        dispatch(hideError());
        dispatch(changeColumnsValue(value));
      };
    case "minGutter":
      if (Number(value) > allValues.maxWidth) {
        return (dispatch) => {
          dispatch(changeMinGutterValue(0));
          dispatch(switchMaxValueError(name));
          dispatch(showError());
          setTimeout(dispatch, 2200, switchMaxValueError(name));
          setTimeout(dispatch, 2000, switchMaxValueError(name));
        };
      }

      return (dispatch) => {
        dispatch(hideError());
        dispatch(changeMinGutterValue(value));
      };
    case "maxGutter":
      if (Number(value) > allValues.maxWidth) {
        return (dispatch) => {
          dispatch(changeMaxGutterValue(allValues.maxWidth));
          dispatch(switchMaxValueError(name));
          dispatch(showError());
          setTimeout(dispatch, 2200, switchMaxValueError(name));
          setTimeout(dispatch, 2000, switchMaxValueError(name));
        };
      }

      return (dispatch) => {
        dispatch(hideError());
        dispatch(changeMaxGutterValue(value));
      };
    case "margin":
      if (Number(value) >= allValues.maxWidth) {
        return (dispatch) => {
          dispatch(changeMarginValue(0));
          dispatch(switchMaxValueError(name));
          dispatch(showError());
          setTimeout(dispatch, 2200, switchMaxValueError(name));
          setTimeout(dispatch, 2000, switchMaxValueError(name));
        };
      }

      return (dispatch) => {
        dispatch(hideError());
        dispatch(changeMarginValue(value));
      };

    default:
      break;
  }
}
