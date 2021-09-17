import React, {useEffect, useState} from 'react';
import {MainContainer} from "../../components/mainContainer/MainContainer";
import {Box, Button, CircularProgress, makeStyles, Typography} from "@material-ui/core";
import {mainPageStyles} from "./styles/mainPageStyles";
import {ImageContent} from "./localComponents/ImageContent";
import {Link} from "react-router-dom";
import {RouteConstants} from "../../router/constants/RouteConstants";
import {mainRequest} from "./request/mainRequest";
import {useIsMounted} from "../../hooks/useIsMounted";
import {useDispatch, useSelector} from "react-redux";
import {initMainData} from "../../../store/modules/main/mainActions";

const useStyles = makeStyles(mainPageStyles);
export const MainPage = () => {
    const classes = useStyles();
    const isMounted = useIsMounted();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const {applicantName} = useSelector((state) => state.mainReducer);

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
            <MainContainer>
                <Box className={classes.mainContent + " p-4"}>
                    <Box className="p-5 card shadow-xl rounded-lg bg-white grid place-content-center">
                        <CircularProgress color="primary" size="2.5rem"/>
                    </Box>
                </Box>
            </MainContainer>
        );
    }

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