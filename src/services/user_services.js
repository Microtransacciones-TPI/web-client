import { url } from "./utils";

function TestRequest(id, callbackFunction){

    const body = {
        query: id
    }
    const request = {
        method: "POST",
        body: JSON.stringify(body),
        callback: (data) => callbackFunction(data)
    };

    try {
        sendRequest(request);
    } catch (error) {
        console.error(error);
    }
}

function sendRequest(request) {
    fetch(url, {
      method: request.method,
      body: request.body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        request.callback(responseJson)
      });
}

export { TestRequest };