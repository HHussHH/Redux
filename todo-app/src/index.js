import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { configureStore } from "./store/index";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":filter" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
