import axios from "axios";
import {GeneralConstants} from "../../../constants/GeneralConstants";
import {closeAlert, GENERAL_ERROR_TEXT, showGenericAlert, showLoadingAlert} from "../../../alerts/showAlerts";

export const saveSupplier = async (supplierData) => {
    showLoadingAlert();
    try {
        const response = await axios({
            url: `${GeneralConstants.BASE_URL}/supplierController/saveSupplier`,
            method: 'POST',
            data: supplierData,
        });
        closeAlert();
        if (response.status === 200) {
            return true;
        } else {
            showGenericAlert(GENERAL_ERROR_TEXT, "Error", "error").then();
            return false;
        }
    } catch (e) {
        closeAlert();
        const {response} = e;
        if (response) {
            if (response.status === 409) {
                showGenericAlert("El proveedor ya se encuentra registrado", "Error", "error").then();
            }
        } else {
            showGenericAlert(GENERAL_ERROR_TEXT, "Error", "error").then();
        }
        return false;
    }
}

export const requestSupplierList = async (index) => {
    showLoadingAlert();
    try {
        const response = await axios({
            url: `${GeneralConstants.BASE_URL}/supplierController/getSupplierList/${index}`,
            method: 'GET',
        });
        closeAlert();
        if (response.status === 200) {
            return {
                resolved: true,
                list: response.data,
            };
        } else {
            showGenericAlert(GENERAL_ERROR_TEXT, "Error", "error").then();
            return {
                resolved: false,
            };
        }
    } catch (e) {
        closeAlert();
        const {response} = e;
        if (response) {
            if (response.status === 409) {
                showGenericAlert("El proveedor ya se encuentra registrado", "Error", "error").then();
            }
        } else {
            showGenericAlert(GENERAL_ERROR_TEXT, "Error", "error").then();
        }
        return {
            resolved: false,
        };
    }
}

export const requestDeleteSupplier = async (id) => {
    showLoadingAlert();
    try {
        const response = await axios({
            url: `${GeneralConstants.BASE_URL}/supplierController/deleteSupplierById/${id}`,
            method: 'DELETE',
        });
        closeAlert();
        if (response.status === 200) {
            return true;
        } else {
            showGenericAlert(GENERAL_ERROR_TEXT, "Error", "error").then();
            return false;
        }
    } catch (e) {
        closeAlert();
        const {response} = e;
        if (response) {
            if (response.status === 404) {
                showGenericAlert("No se encontró el proveedor", "Error", "error").then();
            } else if (response.status === 400) {
                showGenericAlert("No se puede eliminar", "Error", "error").then();
            }
            return false;
        } else {
            showGenericAlert(GENERAL_ERROR_TEXT, "Error", "error").then();
        }
        return false;
    }
}