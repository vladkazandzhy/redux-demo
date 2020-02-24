import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import App from "./App";

/**
 * @render react
 * @name Preview
 * @example
 * <Preview/>
 */

const store = createStore(reducers);

export default class Preview extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
