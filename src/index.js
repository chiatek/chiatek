import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import {DataProvider} from "./AppData";
import ScrollToTop from "./components/ScrollToTop";

ReactDom.render(
    <DataProvider>
        <Router>
            <ScrollToTop>
                <App />   
            </ScrollToTop>
        </Router>
    </DataProvider>,
    document.getElementById("root")
);