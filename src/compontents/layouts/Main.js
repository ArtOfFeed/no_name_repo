import React from 'react';
import {Route} from "react-router";
import UsersContainer from "../Users/UsersContainer";
import PostsContainer from "../Posts/PostsContainer";

const Main = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <Route path="/users" component={UsersContainer} />
                <Route path="/posts" component={PostsContainer} />
                https://gorest.co.in/
            </div>
        </div>
    )
};

export default Main;