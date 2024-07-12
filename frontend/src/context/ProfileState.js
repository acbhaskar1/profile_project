import React, { useReducer } from 'react';
import axios from 'axios';
import ProfileContext from './ProfileContext';
import profileReducer from './profileReducer';
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

const ProfileState = props => {
    const initialState = {
        profiles: [],
        current: null,
        error: null,
    };

    const [state, dispatch] = useReducer(profileReducer, initialState);

    // Get Profiles
    const getProfiles = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/profiles');
            dispatch({ type: GET_PROFILES, payload: res.data });
        } catch (err) {
            dispatch({ type: PROFILE_ERROR, payload: err.response?.data?.msg || err.message });
        }
    };
    
    const addProfile = async profile => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        try {
            const res = await axios.post('http://localhost:5000/api/profiles', profile, config);
            dispatch({ type: ADD_PROFILE, payload: res.data });
        } catch (err) {
            dispatch({ type: PROFILE_ERROR, payload: err.response?.data?.msg || err.message });
        }
    };
    

    // Delete Profile
    const deleteProfile = async id => {
        try {
            await axios.delete(`http://localhost:5000/api/profiles/${id}`);
            dispatch({ type: DELETE_PROFILE, payload: id });
        } catch (err) {
            dispatch({ type: PROFILE_ERROR, payload: err.response.msg });
        }
    };

    // Update Profile
    const updateProfile = async profile => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios.put(`http://localhost:5000/api/profiles/${profile.id}`, profile, config);
            dispatch({ type: UPDATE_PROFILE, payload: res.data });
        } catch (err) {
            dispatch({ type: PROFILE_ERROR, payload: err.response.msg });
        }
    };

    // Set Current Profile
    const setCurrent = profile => {
        dispatch({ type: SET_CURRENT, payload: profile });
    };

    // Clear Current Profile
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // Clear Profiles
    const clearProfiles = () => {
        dispatch({ type: CLEAR_PROFILES });
    };

    return (
        <ProfileContext.Provider
            value={{
                profiles: state.profiles,
                current: state.current,
                error: state.error,
                getProfiles,
                addProfile,
                deleteProfile,
                setCurrent,
                clearCurrent,
                updateProfile,
                clearProfiles,
            }}
        >
            {props.children}
        </ProfileContext.Provider>
    );
};

export default ProfileState;
