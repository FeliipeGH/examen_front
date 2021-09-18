import {useEffect, useState} from "react";
import {useIsMounted} from "./useIsMounted";
import {processTableList} from "../helpers/processTableList";


export const useRequestListData = (requestFunc, index, createObjectRow) => {
    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState([]);
    const isMounted = useIsMounted();

    const init = () => {
        if (isMounted.current) setLoading(true);
        requestFunc(index).then((result) => {
            if (result.resolved && isMounted.current) {
                setListData([...processTableList(result.list, createObjectRow)]);
            }
            if (isMounted.current) setLoading(false);
        });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(init, [isMounted, requestFunc, index]);

    const onDeleteElement = (index) => {
        let newList = [...listData];
        newList.splice(index, 1);
        if (isMounted.current) {
            setListData([...newList]);
        }
    };

    return {
        listData,
        loading,
        onDeleteElement,
        setListData,
    };
};