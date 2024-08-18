export interface Alert {
    type: string,
    message: string
}

export interface alertSuccess{

    type: 'SET_SUCCESS',
    alert: Alert
}
export interface alertInfo{

    type: 'SET_INFO',
    alert: Alert
}
export interface alertDanger{

    type: 'SET_DANGER',
    alert: Alert
}
export interface alertWarning{

    type: 'SET_WARNING',
    alert: Alert
}

export type AlertTypes = alertSuccess | alertDanger | alertInfo | alertWarning;
