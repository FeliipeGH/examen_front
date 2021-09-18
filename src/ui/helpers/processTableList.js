export const processTableList = (list, crateRowFunc) => {
    const processList = [];
    for (let i = 0; i < list.length; i++) {
        let objAux = crateRowFunc(list[i], i);
        processList.push(objAux);
    }
    return [...processList];
};