import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ExchangeRate } from "./components/ExchangeRate";
import "./style.css";
import { store } from "./store/store";
import { getInitialRates } from "./thunks/rates";

store.dispatch(getInitialRates);

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root")
);
