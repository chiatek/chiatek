import React from "react";
import {Link} from "react-router-dom";

function Error() {
    return (
        <div className="wrapper">
            <div className="error">
                <div className="error-code">404</div>
                <h1>Oops.. You just found an error page...</h1>
                <h4>We're sorry but the page you request was not found.</h4>
                <Link className="btn-primary" to="/">Go Home</Link>
            </div>
        </div>
    );
}

export default Error;