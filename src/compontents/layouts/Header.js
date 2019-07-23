import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <a href="#" className="logo"><img src="" alt=""/></a>
                <nav>
                    <ul>
                        <li><a href="#">item1</a></li>
                        <li><a href="#">item2</a></li>
                        <li><a href="#">item3</a></li>
                    </ul>
                </nav>
                <div className="auth">
                    <a href="" className="sign_in">SignIn</a>
                    <a href="" className="sign_up">SignUp</a>
                </div>
            </div>
        </header>
    )
};

export default Header;