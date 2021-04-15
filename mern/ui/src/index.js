import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import home from "./containers/Home";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { dataReducer } from "./store/reducers";
import "antd/dist/antd.css";
// import Forum from "./containers/fourm";

// import history from "./history";
const store = createStore(dataReducer);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={home} />
                {/* <Route path="/forum" component={Forum} /> */}
                {/*  <Route path="/register" component={RegisterPage} /> */}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
