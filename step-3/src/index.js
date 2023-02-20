import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { configureStore } from "./store/index";
import App from "./App";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
