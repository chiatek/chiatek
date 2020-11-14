import React from "react";
import logo from "../assets/images/logo_sm_white.png";
import {FaAlignRight} from "react-icons/fa";
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        }
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    handleClick = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (         
            <div className="navbar">
                <div className="wrapper">
                    <header>
                        <NavLink to="/"><img src={logo} className="logo" alt="chiatek" /></NavLink>
                            
                        <button type="button" className="nav-btn">
                            <FaAlignRight className="nav-icon" onClick={this.handleToggle} />
                        </button>
                    </header>
                    <nav>
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li><NavLink exact={true} activeClassName="active" onClick={this.handleClick} to="/">home</NavLink></li>
                            <li><NavLink activeClassName="active" onClick={this.handleClick} to="/services">services</NavLink></li>
                            <li><NavLink activeClassName="active" onClick={this.handleClick} to="/contact">contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;