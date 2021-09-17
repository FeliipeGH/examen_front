import React from 'react';
import {Box, Container, makeStyles} from "@material-ui/core";
import {footerStyles} from "./styles/footerStyles";
import {useSelector} from "react-redux";

const useStyles = makeStyles(footerStyles);
export const Footer = ({fluid = false}) => {
    const classes = useStyles();
    const {versionApp} = useSelector((state) => state.mainReducer);
    return (
        <Box className={classes.content}>
            <Container maxWidth={fluid ? true : "lg"}>
                <Box className={classes.left}>
                    <Box className={"flex flex-nowrap " + classes.copyRight}>
                        Copyright &copy; {new Date().getFullYear()}. Hecho por &nbsp;
                        <Box
                            className={classes.copyRightBy}
                        >
                            Felipe Guadarrama Herrera
                        </Box>
                    </Box>
                </Box>
                <div className={classes.right + " " + classes.copyRight}>
                    <Box className="flex flex-nowrap">
                        Versión:&nbsp;
                        <Box
                            className={classes.copyRightBy}
                        >
                            {versionApp ?? ""}
                        </Box>
                    </Box>
                </div>
            </Container>
        </Box>
    );
};