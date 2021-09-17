import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {RouteConstants} from "../constants/RouteConstants";
import {SupplierListPage} from "../../modules/suppliers/SupplierListPage";
import {SupplierCreatePage} from "../../modules/suppliers/SupplierCreatePage";
import {DashboardContainer} from "../../components/dashboard/DashboardContainer";
import {dashboardModuleList} from "../constants/dashboardModulesList";

export const DashboardRoutes = () => {
    return (
        <DashboardContainer moduleList={dashboardModuleList}>
            <Switch>
                <Route exact path={RouteConstants.SUPPLIER_LIST_PAGE} component={SupplierListPage}/>
                <Route exact path={RouteConstants.SUPPLIER_CREATE_PAGE} component={SupplierCreatePage}/>
                <Redirect to={RouteConstants.SUPPLIER_LIST_PAGE}/>
            </Switch>
        </DashboardContainer>
    );
};
