import convertUserValues from "./utility/convertUserValues";
import getGridConfigByUserValues from "./utility/getGridConfigByUserValues";
import alertOnBadParameters from "./utility/alertOnBadParameters";
import { setNewGridConfig } from "../store/reducers/gridConfigReducer";

export default function calculateGrid(values) {
  const userValues = convertUserValues(values);

    if (!getGridConfigByUserValues(userValues)) {
      return (dispatch) => dispatch(alertOnBadParameters());
    } else {
      return (dispatch) => {
        dispatch(setNewGridConfig(getGridConfigByUserValues(userValues)));
      };
    }
}
