// index.js

import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./App";
import rootReducer from "./reducers";
import { fetchAll } from "./actions/index";

import { BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAll());
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
