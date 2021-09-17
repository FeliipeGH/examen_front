import {boxShadow, drawerMiniWidth, drawerWidth} from "../../../../assets/styles/jss/globalStyles";

export const sideBarStyles = (theme) => ({
    drawer: {
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        ...boxShadow,
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        width: drawerWidth,
    },
    drawerMini: {
        [theme.breakpoints.up("md")]: {
            width: drawerMiniWidth + "px!important",
        },
    }
});