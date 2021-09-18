import React from 'react';
import {customInputStyles} from "../styles/customInputStyles";
import {Box, FormControl, Input, InputLabel, makeStyles} from "@material-ui/core";
import classNames from "classnames";


const useStyles = makeStyles(customInputStyles);
export const CustomInput = ({
                                title,
                                type = "text",
                                inputId,
                                inputProps = {},
                                onClick,
                                errorText = null,
                                value,
                                onChange,
                                formControlProps,
                                error,
                            }) => {

    const classes = useStyles();

    const labelClasses = classNames({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: !error
    });

    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: false,
    });
    const inputClasses = classNames({
        [classes.input]: true,
        [classes.whiteInput]: false
    });

    return (
        <>
            <FormControl {...formControlProps} className={classes.formControl}>
                <InputLabel htmlFor={inputId}
                            className={classes.labelRoot + " " + labelClasses}>
                    <Box style={{
                        color: (error ? "red" : "inherit"),
                    }}>
                        {title}
                    </Box>
                </InputLabel>
                <Input
                    classes={{
                        input: inputClasses,
                        disabled: classes.disabled,
                        underline: underlineClasses
                    }}
                    id={inputId}
                    value={value}
                    onWheel={(_) => null}
                    onChange={onChange}
                    type={type}
                    {...inputProps}
                    onClick={onClick}
                    fullWidth={true}
                    inputProps={{
                        min: "0", step: "0.01",
                    }}
                />
            </FormControl>
            {errorText !== null && (
                <div className={classes.errorStyle}>{errorText}</div>
            )}
        </>
    );
};