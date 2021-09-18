import {ColorList} from "../../../theme/ColorList";
import {defaultFont} from "../../../../assets/styles/jss/globalStyles";

export const customInputStyles = (theme) => ({
    errorStyle: {
        fontSize: "0.75rem",
        lineHeight: "rem",
        "--tw-text-opacity": "1",
        color: "rgba(239, 68, 68, var(--tw-text-opacity))"
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: "0 0 17px 0",
        paddingTop: "27px",
        position: "relative",
        "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
            color: "#495057"
        }
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
    labelRootError: {
        color: "#f44336 !important",
    },
    labelRootSuccess: {
        color: "#4caf50 !important"
    },
    underlineError: {
        "&:after": {
            borderBottomColor: "#f44336"
        }
    },
    underlineSuccess: {
        "&:after": {
            borderBottomColor: "#4caf50"
        }
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderBottomColor: "#D2D2D2 !important",
            borderBottomWidth: "1px !important"
        },
        "&:after": {
            borderBottomColor: ColorList.primaryMain,
        }
    },
    whiteUnderline: {
        "&:hover:not($disabled):before,&:before": {
            borderBottomColor: "#fff"
        },
        "&:after": {
            borderBottomColor: "#fff"
        }
    },
    input: {
        color: "#495057",
        height: "unset",
        "&,&::placeholder": {
            fontSize: "14px",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "400",
            lineHeight: "1.42857",
            opacity: "1"
        },
        "&::placeholder": {
            color: "#AAA"
        }
    },
    whiteInput: {
        "&,&::placeholder": {
            color: "#fff",
            opacity: "1"
        }
    },
    labelRoot: {
        ...defaultFont,
        color: "#AAA !important",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "1.42857",
        top: "10px",
        letterSpacing: "unset",
        "& + $underline": {
            marginTop: "0px"
        }
    },
    disabled: {
        "&:before": {
            backgroundColor: "transparent !important"
        }
    },
});