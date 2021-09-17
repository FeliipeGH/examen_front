import {button, defaultFont, transition} from "../../../../assets/styles/jss/globalStyles";

export const mainPageStyles = (theme) => ({
    mainContent: {
        ...transition,
        [theme.breakpoints.up("xs")]: {
            width: "100vw"
        },
        [theme.breakpoints.up("sm")]: {
            width: "63vw"
        },
        [theme.breakpoints.up("md")]: {
            width: "40vw"
        },
        [theme.breakpoints.up("lg")]: {
            width: "27vw"
        },
        [theme.breakpoints.up("xl")]: {
            width: "23vw"
        },
    },
    welcomeText: {
        ...defaultFont,
        textAlign: "center",
        fontWeight: "500",
        fontSize: "1.25rem",
        color: "#555"
    },
    userText: {
        ...defaultFont,
        textAlign: "center",
        fontWeight: "400",
        color: "#555"
    },
    button,
});