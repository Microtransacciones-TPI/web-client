import { userConstants } from "../constants/types";
import { userService } from "../services/user-services";
import { history } from "../helpers/history";

export const userActions = {
  login,
  logout
};

function login(user) {
  return dispatch => {
    dispatch(success(user));
    history.push("/Profile");
  };

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
}

function logout() {

  return dispatch => {
    console.log("Dispatching landing");
    dispatch(success());
    // history.push("/");
  };

  function success() {
    return { type: userConstants.LOGOUT };
  }
}