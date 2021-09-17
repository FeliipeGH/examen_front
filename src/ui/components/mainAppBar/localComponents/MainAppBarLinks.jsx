import React from 'react';
import {List, ListItem, makeStyles} from "@material-ui/core";
import {mainAppBarLinksStyle} from "../styles/mainAppBarLinksStyles";

const useStyles = makeStyles(mainAppBarLinksStyle);

export const MainAppBarLinks = () => {
    const classes = useStyles();

    const navLinkNoSelect = classes.navLink + " " + classes.navLinkHover;

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <a href="http://www.gapsi.com.mx/" target="_blank" rel="noopener noreferrer"
                   className={navLinkNoSelect}>
                    Página web
                </a>
            </ListItem>
        </List>
    );
};