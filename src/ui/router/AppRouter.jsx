import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {MainPage} from "../modules/main/MainPage";
import {RouteConstants} from "./constants/RouteConstants";
import {DashboardRouteContainer} from "./dashboard/DashboardRouteContainer";
import {DashboardRoutes} from "./dashboard/DashboardRoutes";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={RouteConstants.MAIN_PAGE} component={MainPage}/>
                <DashboardRouteContainer path={RouteConstants.DASHBOARD_ROUTE} component={DashboardRoutes}/>
                <Redirect to={RouteConstants.MAIN_PAGE}/>
            </Switch>
        </BrowserRouter>
    );
};

