import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Main from "./page/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

function reducer(currentState, action) {
  if (currentState === undefined) return [];
  const newState = [...currentState];
  if (action.type === "ADD") {
    return [...newState, action.value];
  }
  return newState;
}

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
