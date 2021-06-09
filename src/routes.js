import React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';
import Login from './pages/login';
import Home from './pages/home';

const PrivateRoute = ({ component : Component, ...rest }) => (
    <Route { ...rest} render={ props => (
        isAuthenticated() ? (
            <Component {...props }/>
        ) : ( <Redirect  to={{ pathname: '/', state: {from: props.location} }} />) 
    )} />
);

const Routes = () =>  (
    <BrowserRouter>
        <Switch>
             <Route exact path='/' component={Login}/>
             <PrivateRoute path="/home" component={Home} />
        </Switch> 
    </BrowserRouter>
);


export default Routes; 

