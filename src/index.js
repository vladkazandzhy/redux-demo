import React from "react";
import ReactDOM from "react-dom";
import Preview from "./preview";

import * as serviceWorker from "./serviceWorker";

/**
 * @render react
 * @name App
 * @description A List of DC Comics Superheroes
 * @example
 * <Provider store={store}>
 *  <App />
 * </Provider>
 */

ReactDOM.render(<Preview />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
