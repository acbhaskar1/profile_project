import {
    GET_PROFILES,
    ADD_PROFILE,
    DELETE_PROFILE,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILES,
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_PROFILES:
            return {
                ...state,
                profiles: action.payload,
                loading: false,
            };
        case ADD_PROFILE:
            return {
                ...state,
                profiles: [action.payload, ...state.profiles],
                loading: false,
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                profiles: state.profiles.map(profile =>
                    profile.id === action.payload.id ? action.payload : profile
                ),
                loading: false,
            };
        case DELETE_PROFILE:
            return {
                ...state,
                profiles: state.profiles.filter(profile => profile.id !== action.payload),
                loading: false,
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
            };
        case CLEAR_PROFILES:
            return {
                ...state,
                profiles: [],
                error: null,
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
