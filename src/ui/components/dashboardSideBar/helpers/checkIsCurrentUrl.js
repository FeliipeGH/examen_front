export const checkIsCurrentUrl = (collapseList) => {
    for (let i = 0; i < collapseList.length; i++) {
        if (collapseList[i].url === window.location.pathname) {
            return true;
        }
    }
    return false;
};
