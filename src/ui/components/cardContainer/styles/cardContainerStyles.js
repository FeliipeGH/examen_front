import {button, defaultFont} from "../../../../assets/styles/jss/globalStyles";
import {ColorList} from "../../../theme/ColorList";

export const cardContainerStyles = (theme) => ({
    cardContainer: {
        ...defaultFont,
        color: "inherit",
        minHeight: "8rem",
        position: "relative",
    },
    cardIcon: {
        position: "absolute",
        top: "-0.6rem",
        left: "1.3rem",
        color: "white",
        display: "grid",
        placeContent: "center",
        height: "3.375rem",
        width: "3.375rem",
        borderRadius: "3.5px",
        boxShadow: '0 4px 6px -6px black',
        zIndex: "10",
        background:
            "linear-gradient(60deg, " + ColorList.primaryMain + ", " + ColorList.primaryLight + ")",
    },
    cardContent: {
        zIndex: "1",
        minHeight: "8rem",
        position: "relative",
        padding: "0.75rem"
    },
    titleContent: {
        display: "flex",
        justifyContent: "space-between",
        margin: "0.38rem 0 0 4.5rem",
        padding: "0.35rem 0.35rem"
    },
    title: {
        ...defaultFont,
        fontSize: "1.25rem",
        lineHeight: "1.75rem"
    },
    button,
    content: {
        padding: "0.45rem",
        marginTop: "1rem"
    }
});