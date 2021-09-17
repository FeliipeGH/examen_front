import React, {useState} from 'react';
import {AppBar, Box, Button, Container, Drawer, Hidden, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import {mainAppBarStyle} from "./styles/mainAppBarStyles";
import {Link} from 'react-router-dom';
import {useIsMounted} from "../../hooks/useIsMounted";
import {RouteConstants} from "../../router/constants/RouteConstants";
import {Close, Menu} from "@material-ui/icons";

const useStyles = makeStyles(mainAppBarStyle);
export const MainAppBar = ({logo, description, branding, links, useOffSet = true}) => {
    const classes = useStyles();
    const isMounted = useIsMounted();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        if (isMounted.current) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Container>
                    <Container>
                        <Toolbar className={classes.toolBarContainer}>
                            <Button component={Link} to={RouteConstants.MAIN_PAGE}>
                                <img src={logo} alt="adpmx-logo" className={classes.imageContainer}/>
                                <Box className={classes.boxContent}>
                                    <Box className={classes.branding}>
                                        {branding}
                                    </Box>
                                    <Box className={classes.subBrandinTitle}>
                                        {description}
                                    </Box>
                                </Box>
                            </Button>
                            <Hidden smDown implementation="css">
                                <div className={classes.collapse}>{links}</div>
                            </Hidden>
                            <Hidden mdUp>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerToggle}
                                >
                                    <Menu/>
                                </IconButton>
                            </Hidden>
                        </Toolbar>
                        <Hidden mdUp implementation="js">
                            <Drawer
                                variant="temporary"
                                anchor={"right"}
                                open={mobileOpen}
                                classes={{
                                    paper: classes.drawerPaper
                                }}
                                onClose={handleDrawerToggle}
                            >
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerToggle}
                                    className={classes.closeButtonDrawer}
                                >
                                    <Close/>
                                </IconButton>
                                <div className={classes.appResponsive}>{links}</div>
                            </Drawer>
                        </Hidden>
                    </Container>
                </Container>
            </AppBar>
            {
                useOffSet && (
                    <div className={classes.offset}/>
                )
            }
        </>
    );
};