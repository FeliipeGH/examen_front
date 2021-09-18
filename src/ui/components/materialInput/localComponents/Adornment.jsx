import React from 'react';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {adornmentStyles} from "../styles/adornmentStyles";
import {Box, InputAdornment, makeStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {red} from "@material-ui/core/colors";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {ColorList} from "../../../theme/ColorList";

const useStyles = makeStyles(adornmentStyles);
export const Adornment = ({
                              hideText,
                              handleClickShowPassword,
                              handleMouseDownPassword,
                              inputId,
                              type,
                              error,
                              icon: Icon = AccountCircleIcon
                          }) => {
    const classes = useStyles();

    const contentWithError = classes.adornmentSecond + " " + classes.errorTextColor;
    const normalContent = classes.adornmentSecond;


    return (
        <InputAdornment position="end">
            {
                type === 'password' ? (
                    <Box className={(!!error ? contentWithError : normalContent)}>
                        <IconButton
                            aria-label={inputId}
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            className={classes.iconButton}
                        >
                            {
                                hideText ? (
                                    <Visibility style={{
                                        color: (!!error ? red[500] : ColorList.primaryLight)
                                    }}/>
                                ) : (
                                    <VisibilityOff
                                        style={{
                                            color: (!!error ? red[500] : ColorList.primaryLight)
                                        }}
                                    />
                                )
                            }
                        </IconButton>
                    </Box>
                ) : (
                    <Box className={classes.adornmentSecond}>
                        <Icon style={{
                            color: (!!error ? red[500] : ColorList.primaryLight)
                        }}/>
                    </Box>
                )
            }
        </InputAdornment>
    );
};