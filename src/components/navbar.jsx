import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavbarStyles.css";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        console.log("clic")
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        return (
            <div>
                <nav>
                    <a href="/">
                        Evaluator
                    </a>

                    <div>
                        <ul id="navbar" >
                            <li>
                                <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/" >
                                    Full view
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/" >
                                    Tree view
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="profile">Profile editor</NavLink>
                            </li>
                            <li>
                                <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="evaluate">expression evaluator</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier"> <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" /> </g>
                        </svg>
                    </div>
                </nav >
            </div >
        );
    }
}
export default Navbar;
