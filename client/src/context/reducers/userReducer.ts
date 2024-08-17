import { User, UserActionTypes } from './types';

interface UserState {
    user: User | null;
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