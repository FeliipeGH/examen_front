import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {MainPage} from "../modules/main/MainPage";
import {RouteConstants} from "./constants/RouteConstants";
import {DashboardRouteContainer} from "./dashboard/DashboardRouteContainer";
import {DashboardRoutes} from "./dashboard/DashboardRoutes";
import {useDispatch} from "react-redux";
import {mainRequest} from "../modules/main/request/mainRequest";
import {initMainData} from "../../store/modules/main/mainActions";
import {useIsMounted} from "../hooks/useIsMounted";
import {Box, CircularProgress, makeStyles} from "@material-ui/core";
import {mainPageStyles} from "../modules/main/styles/mainPageStyles";

const useStyles = makeStyles(mainPageStyles);
export const AppRouter = () => {
    const classes = useStyles();
    const isMounted = useIsMounted();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const onInit = () => {
        if (isMounted.current) setLoading(true);
        mainRequest().then((response) => {
            if (isMounted.current) setLoading(false);
            if (response.resolved) {
                delete response.resolved;
                dispatch(initMainData(response));
            }
        });
    };

    useEffect(onInit, [isMounted, dispatch]);

    if (loading) {
        return (
            <Box className={"bg-gray-50 p-4 grid place-content-center " + classes.mainContentRequest}>
                <CircularProgress color="primary" size="2.5rem"/>
            </Box>
        );
    }

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

