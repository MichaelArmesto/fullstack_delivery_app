import { Alert, AlertTypes } from "./alertTypes";

export interface RootAlertState {
    alert: Alert | null;
}

const initialState: RootAlertState = {
    alert: null,
}

const alertReducer = (state = initialState, action: AlertTypes): RootAlertState => {
    switch(action.type){
        case 'SET_SUCCESS':
            return{
                ...state,
                alert: action.alert
            }
        case 'SET_INFO':
            return{
                ...state,
                alert: action.alert
            }
        case 'SET_DANGER':
            return{
                ...state,
                alert: action.alert
            }
        case 'SET_WARNING':
            return{
                ...state,
                alert: action.alert
            }
        default:
            return state;
    }
}

export default alertReducer;