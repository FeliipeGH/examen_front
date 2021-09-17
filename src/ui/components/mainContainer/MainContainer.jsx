import React from 'react';
import {Box, makeStyles} from "@material-ui/core";
import {MainAppBar} from "../mainAppBar/MainAppBar";
import logo from "../../../assets/img/logo.png";
import {MainAppBarLinks} from "../mainAppBar/localComponents/MainAppBarLinks";
import {mainContainerStyles} from "./styles/mainContainerStyles";
import {Footer} from "../footer/Footer";

const useStyles = makeStyles(mainContainerStyles);
export const MainContainer = ({children}) => {
    const classes = useStyles();
    return (
        <Box className="bg-white">
            <MainAppBar branding="e-Commerce Gapsi" logo={logo} description="" links={<MainAppBarLinks/>}/>
            <Box className={classes.mainContent + " bg-gray-50"}>
                {children}
            </Box>
            <Footer/>
        </Box>
    );
};