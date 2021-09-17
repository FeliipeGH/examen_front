import React, {useState} from 'react';
import {dashboardStyles} from "./styles/dashboardStyles";
import {Box, Divider, makeStyles} from "@material-ui/core";
import {useIsMounted} from "../../hooks/useIsMounted";
import {DashboardAppBar} from "../dashboardAppBar/DashboardAppBar";
import {routeComponentNames} from "../../router/constants/routeComponentNames";
import {DashboardSideBar} from "../dashboardSideBar/DashboardSideBar";
import {Footer} from "../footer/Footer";

const useStyles = makeStyles(dashboardStyles);
export const DashboardContainer = ({moduleList = [], children}) => {
    const classes = useStyles();
    const isMounted = useIsMounted();

    const [openMenuMini, setOpenMenuMini] = useState(false);
    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    const handleMiniActive = () => {
        if (isMounted) setOpenMenuMini(!openMenuMini);
    };

    const handleMenuMobile = () => {
        if (isMounted) setOpenMenuMobile(!openMenuMobile);
    };

    const mainContainerClass = openMenuMini ? classes.mainContainer + " " + classes.mainContainerMiniMenu
        : classes.mainContainer;

    return (
        <Box className={classes.wrapper}>
            <DashboardAppBar title={routeComponentNames[window.location.pathname] ?? ""}
                             openMenuMini={openMenuMini}
                             handleMenuDesktop={handleMiniActive}
                             handleMenuMobile={handleMenuMobile}
            />
            <DashboardSideBar open={openMenuMobile} handleOpen={handleMenuMobile} isOpenMenuMini={openMenuMini}
                              moduleList={moduleList}
            />
            <Box className={mainContainerClass}>
                <Box className={classes.container}>
                    <Box className={classes.content}>
                        {children}
                    </Box>
                </Box>
                <Box>
                    <Divider/>
                    <Footer fluid={true}/>
                </Box>
            </Box>
        </Box>
    );
};