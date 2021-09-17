import React from 'react';
import {Box, Button, Card, makeStyles} from "@material-ui/core";
import {cardContainerStyles} from "./styles/cardContainerStyles";

const useStyles = makeStyles(cardContainerStyles);
export const CardContainer = ({
                                  icon: Icon,
                                  title = "Lista de elementos",
                                  showButton = true,
                                  children,
                                  onClick = () => {
                                  }
                              }) => {

    const classes = useStyles();

    return (
        <Box className={classes.cardContainer}>
            <Box className={classes.cardIcon}>
                <Icon fontSize="medium"/>
            </Box>
            <Card className={classes.cardContent}>
                <Box className={classes.titleContent}>
                    <Box component="p" className={classes.title}>
                        {title}
                    </Box>
                    {
                        showButton && (
                            <Button color="primary" variant="contained" className={classes.button} onClick={onClick}>
                                Agregar
                            </Button>
                        )
                    }
                </Box>
                <Box className={classes.content}>
                    {children}
                </Box>
            </Card>
        </Box>
    );
};
