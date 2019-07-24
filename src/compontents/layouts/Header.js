import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className="container clearfix">
                <a className="logo" href="#" className="logo"><img src={props.logo} alt=""/></a>
                <div className="toolbar">
                    <nav className="navigation">
                        <ul>
                            <li><NavLink exact to="/users">Users</NavLink></li>
                            <li><NavLink exact to="/posts">Posts</NavLink></li>
                        </ul>
                    </nav>
                    <div className="auth">
                        <a href="" className="sign_in">SignIn</a>
                        <a href="" className="sign_up">SignUp</a>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;