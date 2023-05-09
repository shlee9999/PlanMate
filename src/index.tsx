import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Main from "./page";
import { Globals } from "./types";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function reducer(
  state: Globals = { isRunning: false, todos: [] },
  action
): Globals {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.value] };
    // case "DEL_TODO":
    //   return;
    case "RUN_STUDY":
      return { ...state, isRunning: true };
    case "STOP_STUDY":
      return { ...state, isRunning: false };
    // case "RUN_EXERCISE":
    //   break;
    // case "STOP_EXERCISE":
    //   break;
    default:
      return state;
  }
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
