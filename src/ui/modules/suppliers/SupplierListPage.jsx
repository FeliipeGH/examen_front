import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, makeStyles, Typography} from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import {CardContainer} from "../../components/cardContainer/CardContainer";
import {useHistory} from "react-router";
import {RouteConstants} from "../../router/constants/RouteConstants";
import {supplierStyles} from "./styles/supplierStyles";
import MaterialTable from "../../components/table/MaterialTable";
import {useRequestListData} from "../../hooks/useRequestListData";
import {requestDeleteSupplier, requestSupplierList} from "./requests/supplierRequests";
import {EditDeleteButtonsToTable} from "../../components/buttons/EditDeleteButtonsToTable";
import {useIsMounted} from "../../hooks/useIsMounted";
import {CONTINUE_QUESTION_TITLE, showGenericAlert} from "../../alerts/showAlerts";


const useStyles = makeStyles(supplierStyles);
export const SupplierListPage = () => {
    const classes = useStyles();
    const isMounted = useIsMounted();
    const history = useHistory();
    const [index, setIndex] = useState(0);
    const listRef = useRef([]);

    const createObjectRow = (obj, index) => {
        return {
            supplierName: obj["supplierName"],
            businessName: obj["businessName"],
            direction: obj["direction"],
            actions: <EditDeleteButtonsToTable
                onDeleteButton={() => handleDelete(obj["supplierId"], index)}
                showEdit={false}
            />
        };
    };

    const {listData, setListData} = useRequestListData(requestSupplierList, index, createObjectRow);

    const onConfirmDelete = (id, index) => {
        requestDeleteSupplier(id).then((resolved) => {
            if (resolved) {
                let auxList = [...listRef.current];
                auxList.splice(index, 1);
                if (isMounted.current) {
                    setListData([...auxList]);
                }
            }
        });
    };

    const onListChange = () => {
        listRef.current = [...listData];
    };

    useEffect(onListChange, [listData]);

    const handleDelete = async (id, index) => {
        await showGenericAlert(
            "¡El elemento no se podrá recuperar!", CONTINUE_QUESTION_TITLE, "question", {
                onConfirm: () => onConfirmDelete(id, index),
            }, true
        );
    };

    const handleClick = () => {
        history.push(RouteConstants.SUPPLIER_CREATE_PAGE);
    };

    const handleNextBtn = () => {
        const newValue = index + 1;
        if (listData.length > 0 && isMounted.current) {
            setIndex(newValue);
        }
    };

    const handleBackBtn = () => {
        if (index > 0 && isMounted.current) {
            const newValue = index - 1;
            setIndex(newValue);
        }
    };

    return (
        <CardContainer icon={GroupIcon} title="Lista de proveedores" onClick={handleClick}>
            {
                listData.length === 0 && index > 0 ? (
                    <Typography>
                        No hay más resultados para mostrar
                    </Typography>
                ) : listData.length === 0 && index === 0 ? (
                    <Typography>
                        No hay resultados para mostrar
                    </Typography>
                ) : (
                    <MaterialTable
                        list={listData}
                        columns={[
                            {
                                width: 400,
                                label: 'Proveedor',
                                dataKey: 'supplierName',
                            },
                            {
                                width: 400,
                                label: 'Razón social',
                                dataKey: 'businessName',
                            },
                            {
                                width: 400,
                                label: 'Dirección',
                                dataKey: 'direction',
                            },
                            {
                                width: 400,
                                label: 'Acciones',
                                dataKey: 'actions',
                            },
                        ]}
                    />
                )
            }
            <Box className="flex justify-end mb-2 mt-4 space-x-4">
                <Button className={classes.button} variant="outlined" color="primary"
                        onClick={handleBackBtn}
                >
                    Anterior
                </Button>
                <Button className={classes.button} variant="contained" color="primary"
                        onClick={handleNextBtn}
                >
                    Siguiente
                </Button>
            </Box>
        </CardContainer>
    );
};