import {
  authAddress
} from "../constants/back-address";
import { removeState } from "../store/localStorage";

export const userService = {
  login,
  logout
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  };

  return fetch(authAddress, requestOptions)
    .then(handleResponse)
    .then(token => {
      // localStorage.setItem("token");
      return token;
    });
}

function logout() {
  // remove user from local storage to log user out
  removeState();
}

function handleResponse(response) {
  return response.text().then(text => {
    // console.log(text);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
