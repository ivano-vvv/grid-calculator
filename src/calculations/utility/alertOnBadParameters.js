import {
  errorBadParameters,
  showError,
  hideError,
} from "../../store/reducers/formReducer";

export default function alertOnBadParameters() {
  return (dispatch) => {
    dispatch(errorBadParameters());
    dispatch(showError());
    setTimeout(dispatch, 5000, hideError());
    setTimeout(dispatch, 5200, errorBadParameters());
  };
}
