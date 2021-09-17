const boxShadow = {
    boxShadow:
        "0 10px 30px -12px rgba(#000)" +
        ", 0.42), 0 4px 25px 0px rgba(#000)" +
        ", 0.12), 0 8px 10px -5px rgba(#000)" +
        ", 0.2)"
};

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
};

const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const button = {
    ...defaultFont,
    fontSize: "0.75rem",
    fontWeight: "400",
    padding: "0.75rem 1.875rem"
};

const hideElement = {
    opacity: "0",
    transform: "translate3d(-25px, 0, 0)",
};

const drawerWidth = 260;
const drawerMiniWidth = 80;

export {
    boxShadow,
    defaultFont,
    transition,
    button,
    hideElement,
    drawerWidth,
    drawerMiniWidth
}