export interface User {
    id: string;
    name: string;
    email: string;
}

export interface SetUserAction {
    type: 'SET_USER';
    user: User;
}

export interface GetUserAction {
    type: 'GET_USER';
}

export type UserActionTypes = SetUserAction | GetUserAction;

