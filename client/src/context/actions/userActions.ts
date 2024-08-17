import { User, SetUserAction, GetUserAction } from '../reducers/types';

export const SET_USER: 'SET_USER' = 'SET_USER';
export const GET_USER = 'GET_USER';

export const setUserDetails = (user: User): SetUserAction => {
    return {
        type: SET_USER,
        user: user
    };
};

export const getUserDetails = (): GetUserAction => {
    return {
        type: GET_USER
    };
};
