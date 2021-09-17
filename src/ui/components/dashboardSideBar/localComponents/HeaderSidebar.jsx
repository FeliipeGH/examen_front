import React from 'react';
import {Box, makeStyles} from "@material-ui/core";
import {headerSidebarStyles} from "../styles/headerSidebarStyles";

const useStyles = makeStyles(headerSidebarStyles);
export const HeaderSidebar = ({title, isOpenTemporalMenu, logo, isMini}) => {

    const classes = useStyles();
    const logoTitleClass = isMini && isOpenTemporalMenu ? classes.logoTitle + " " + classes.logoTitleMini : classes.logoTitle;

    return (
        <Box className={classes.logoContainer}>
            <Box className={classes.logoImgContent}>
                <img src={logo} alt={title}/>
            </Box>
            <Box className={logoTitleClass}>
                {title}
            </Box>
        </Box>
    );
};

