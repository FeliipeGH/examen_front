import {useEffect, useState} from "react";
import {useIsMounted} from "./useIsMounted";


export const useRequestListData = (requestFunc) => {
    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState([]);
    const isMounted = useIsMounted();

    const init = () => {
        if (isMounted.current) setLoading(true);
        requestFunc().then((result) => {
            if (result.resolved && isMounted.current) {
                setListData([...result.list]);
            }
            if (isMounted.current) setLoading(false);
        });
    };

    useEffect(init, [isMounted, requestFunc]);

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
    };
};