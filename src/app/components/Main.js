import React from 'react';
// import { Switch, Route, Router } from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom';
import { Home } from './Home';
import { User } from './User';
import { Switch, Route } from 'react-router-dom';
export const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
        </Switch>
    );

}

 /* <ul class="navbar-nav">
                <li class="nav-item active">
                    <li><Link to="/">Home</Link></li>
                </li>
                <li class="nav-item">
                    <li><Link to="/user">User</Link></li>
                </li>
                <li class="nav-item">
                </li>
            </ul> 
 <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul> */