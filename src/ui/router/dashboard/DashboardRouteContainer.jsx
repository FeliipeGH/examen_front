import React from 'react';
import {Route} from "react-router";

export const DashboardRouteContainer = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => <Component {...props}/>}/>
    );
};