import { Alert, alertSuccess, alertDanger, alertInfo, alertWarning } from "../reducers/alertTypes";

export const SET_SUCCESS = 'SET_SUCCESS';
export const SET_INFO = 'SET_INFO';
export const SET_WARNING = 'SET_WARNING';
export const SET_DANGER = 'SET_DANGER';

export const setAlertSuccess = (alert: Alert): alertSuccess => {
    return{
        type: SET_SUCCESS,
        alert: alert
    }
}

export const setAlertInfo = (alert: Alert): alertInfo => {
    return{
        type: SET_INFO,
        alert: alert
    }
}
export const setAlertWarning = (alert: Alert): alertWarning => {
    return{
        type: SET_WARNING,
        alert: alert
    }
}
export const setAlertDanger = (alert: Alert): alertDanger => {
    return{
        type: SET_DANGER,
        alert: alert
    }
}
