import React from 'react';
import {CardContainer} from "../../components/cardContainer/CardContainer";
import GroupIcon from "@material-ui/icons/Group";
import {useForm} from "react-hook-form";
import {Button, Grid, makeStyles} from "@material-ui/core";
import {supplierStyles} from "./styles/supplierStyles";
import {MaterialInput} from "../../components/materialInput/MaterialInput";
import {anyValueRule} from "../../rules/globalRules";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import RoomIcon from '@material-ui/icons/Room';
import {useHistory} from "react-router";
import {saveSupplier} from "./requests/supplierRequests";
import {RouteConstants} from "../../router/constants/RouteConstants";

const useStyles = makeStyles(supplierStyles);
export const SupplierCreatePage = () => {
    const classes = useStyles();
    const {handleSubmit, control} = useForm();
    const history = useHistory();

    const onSubmit = async (data) => {
        const resolved = await saveSupplier(data);
        if (resolved) {
            history.push(RouteConstants.SUPPLIER_LIST_PAGE);
        }
    }

    return (
        <CardContainer icon={GroupIcon} showButton={false} title="Guardar proveedores">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <MaterialInput
                            title="Nombre"
                            inputId="supplierName"
                            control={control}
                            rules={{...anyValueRule("Ingresa tu nombre")}}
                        />
                        <MaterialInput
                            title="Razón social"
                            inputId="businessName"
                            icon={BusinessCenterIcon}
                            control={control}
                            rules={{...anyValueRule("Ingresa la razón social")}}
                        />
                        <MaterialInput
                            title="Dirección"
                            inputId="direction"
                            icon={RoomIcon}
                            control={control}
                            rules={{...anyValueRule("Ingresa la dirección")}}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" color="primary" variant="contained" className={classes.submitButton}>
                    Guardar
                </Button>
            </form>
        </CardContainer>
    );
};