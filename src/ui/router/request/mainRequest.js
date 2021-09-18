import axios from "axios";
import {GeneralConstants} from "../../constants/GeneralConstants";
import {GENERAL_ERROR_TEXT, showGenericAlert} from "../../alerts/showAlerts";


export const mainRequest = async () => {
    try {
        const response = await axios({
            url: `${GeneralConstants.BASE_URL}/mainController/getWelcome`,
            method: 'GET',
        });
        if (response.status === 200) {
            return {
                ...response.data,
                resolved: true,
            }
        } else {
            showGenericAlert(GENERAL_ERROR_TEXT, "Error", "error").then();
            return {
                resolved: false,
            };
        }
    } catch (e) {
        showGenericAlert(GENERAL_ERROR_TEXT, "Error", "error").then();
        return {
            resolved: false,
        };
    }
};