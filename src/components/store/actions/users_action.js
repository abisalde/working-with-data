import axios from 'axios';

//GET ALLUSERS, MALEUSERS, FEMALEUSERS
import { getMaleUsers, getFemaleUsers, getAllUsers } from './userType_action';

//REQUEST ACTION
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FTECH_USERS_FAILURE';


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (err) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: err
    }
}

export const fetchAllUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://randomuser.me/api/?results=20')
        .then(resp => {
            const users = resp.data;
            dispatch(fetchUsersSuccess(users));
            dispatch(getAllUsers());
        })
        .catch(err => {
            const errMsg = err.message;
            dispatch(fetchUsersFailure(errMsg))
        })
    }
}

export const fetchMaleUsers = () => {
    return (dispatch) => {
        axios.get('https://randomuser.me/api/?gender=male&results=10')
        .then(resp => {
            const users = resp.data;
            dispatch(fetchUsersSuccess(users));
            dispatch(getMaleUsers());
        })
        .catch(err => {
            const errMsg = err.message;
            dispatch(fetchUsersFailure(errMsg));
        })
    }
}

export const fetchFemaleUsers = () => {
    return (dispatch) => {
        axios.get('https://randomuser.me/api/?gender=female&results=10')
        .then(resp => {
            const users = resp.data;
            dispatch(fetchUsersSuccess(users));
            dispatch(getFemaleUsers());
        })
        .catch(err => {
            const errMsg = err.message;
            dispatch(fetchUsersFailure(errMsg));
        })
    }
}
