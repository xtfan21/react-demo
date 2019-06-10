import React from 'react';
import {HashRouter, Route, Switch, NavLink} from 'react-router-dom';
import home from '../app/home';
import about from '../app/about';
import index from '../app/index';

const BasicRoute = () => (
    <HashRouter>
        <div className="nav">
            <NavLink to='/index' activeClassName="active"> 首页 </NavLink>
            <NavLink to='/about' activeClassName="active"> 关于 </NavLink>
            <NavLink to='/home' activeClassName="active"> 我的</NavLink>
        </div>
        <Switch>
            <Route path="/index" component={index}></Route>
            <Route path="/home" component={home}></Route>
            <Route path="/about" component={about}></Route>
        </Switch>
    </HashRouter>
);

export default BasicRoute;
