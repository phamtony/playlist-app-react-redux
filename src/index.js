import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from "./components/App";
import reducers from './reducers';

ReactDOM.render(
    //any componenet in our app wrapped around provider can get access to the store.
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);