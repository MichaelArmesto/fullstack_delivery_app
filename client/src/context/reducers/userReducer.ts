import { User, UserActionTypes } from './userTypes';

interface UserState {
    user: User | null;
}
export interface RootState {
    user: UserState;
}
const initialState: UserState = {
    user: null,
};
const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'GET_USER':
            return state;
        default:
            return state;
    }
};

export default userReducer;