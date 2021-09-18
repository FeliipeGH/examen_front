import React from 'react';
import {MainContainer} from "../../components/mainContainer/MainContainer";
import {Box, Button, makeStyles, Typography} from "@material-ui/core";
import {mainPageStyles} from "./styles/mainPageStyles";
import {ImageContent} from "./localComponents/ImageContent";
import {Link} from "react-router-dom";
import {RouteConstants} from "../../router/constants/RouteConstants";
import {useSelector} from "react-redux";

const useStyles = makeStyles(mainPageStyles);
export const MainPage = () => {
    const classes = useStyles();
    const {applicantName} = useSelector((state) => state.mainReducer);

    return (
        <MainContainer>
            <Box className={classes.mainContent + " p-4"}>
                <Box className="p-5 card shadow-xl rounded-lg bg-white">
                    <ImageContent/>
                    <Box className="w-full">
                        <Typography className={classes.welcomeText + " my-3"}>
                            Bienvenido
                        </Typography>
                        <Typography className={classes.userText + " my-3"}>
                            {applicantName ?? ""}
                        </Typography>
                        <Box className="grid place-content-center my-4">
                            <Button color="primary" variant="contained" className={classes.button} component={Link}
                                    to={RouteConstants.SUPPLIER_LIST_PAGE}
                            >
                                Continuar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </MainContainer>
    );
};