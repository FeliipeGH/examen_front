import React, {useState} from 'react';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {CustomInput} from "./localComponents/CustomInput";
import {Adornment} from "./localComponents/Adornment";
import {Controller} from 'react-hook-form';

export const MaterialInput = ({
                                  title,
                                  type = "text",
                                  inputId,
                                  inputProps = {},
                                  icon = AccountCircleIcon,
                                  onClick,
                                  autoComplete = "on",
                                  control,
                                  rules,
                                  staticInput = false,
                                  staticValue = "",
                                  errorText = "",
                              }) => {


    const [hideText, setHideText] = useState(type === 'password');

    const handleClickShowPassword = () => {
        setHideText(!hideText);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    if (staticInput) {
        return (
            <CustomInput
                onClick={onClick}
                value={staticValue}
                title={title}
                error={errorText !== ""}
                errorText={errorText}
                type={type === 'password' ? hideText ? 'password' : 'text' : type}
                inputId={inputId}
                formControlProps={{
                    fullWidth: true,
                }}
                inputProps={{
                    ...inputProps,
                    endAdornment: (
                        <Adornment inputId={inputId}
                                   error={errorText}
                                   handleClickShowPassword={handleClickShowPassword}
                                   handleMouseDownPassword={handleMouseDownPassword}
                                   hideText={hideText}
                                   type={type} icon={icon}/>
                    ),
                    autoComplete: autoComplete,
                    value: staticValue
                }}
            />
        );
    }

    return (
        <Controller
            name={inputId}
            control={control}
            rules={{...rules}}
            defaultValue=""
            render={({
                         field: {onChange, value},
                         fieldState: {error},
                     }) => (
                <CustomInput
                    title={title}
                    value={value}
                    type={type === 'password' ? hideText ? 'password' : 'text' : type}
                    inputId={inputId}
                    onClick={onClick}
                    onChange={onChange}
                    errorText={error?.message}
                    error={!!error}
                    formControlProps={{fullWidth: true}}
                    inputProps={{
                        ...inputProps,
                        endAdornment: (
                            <Adornment inputId={inputId} error={error}
                                       handleClickShowPassword={handleClickShowPassword}
                                       handleMouseDownPassword={handleMouseDownPassword}
                                       hideText={hideText}
                                       type={type} icon={icon}
                            />
                        ),
                        autoComplete: autoComplete,
                    }}
                />
            )}
        />
    );
};