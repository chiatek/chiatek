import React from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import "./assets/css/main.css";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </div>
    );
}

export default App;