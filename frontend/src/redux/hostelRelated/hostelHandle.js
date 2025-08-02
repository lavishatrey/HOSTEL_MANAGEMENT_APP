import axios from 'axios';
import { getRequest, getSuccess, getFailed, getError } from './hostelSlice';

export const getAllHostels = (adminID, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/${address}/${adminID}`);
        if (result.data) {
            dispatch(getSuccess(result.data));
        } else {
            dispatch(getFailed("Failed to fetch hostels"));
        }
    } catch (error) {
        if (error.response) {
            dispatch(getError(error.response.data));
        } else {
            dispatch(getError("Failed to fetch hostels"));
        }
    }
};

export const getHostelList = (adminID, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/${address}/${adminID}`);
        if (result.data) {
            dispatch(getSuccess(result.data));
        } else {
            dispatch(getFailed("Failed to fetch hostel list"));
        }
    } catch (error) {
        if (error.response) {
            dispatch(getError(error.response.data));
        } else {
            dispatch(getError("Failed to fetch hostel list"));
        }
    }
};

export const createHostel = (fields, adminID) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/HostelCreate`, {
            ...fields,
            adminID
        });
        if (result.data) {
            dispatch(getSuccess(result.data));
        } else {
            dispatch(getFailed("Failed to create hostel"));
        }
    } catch (error) {
        if (error.response) {
            dispatch(getError(error.response.data));
        } else {
            dispatch(getError("Failed to create hostel"));
        }
    }
};

export const getHostelDetail = (hostelID) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/Hostel/${hostelID}`);
        if (result.data) {
            dispatch(getSuccess(result.data));
        } else {
            dispatch(getFailed("Failed to fetch hostel details"));
        }
    } catch (error) {
        if (error.response) {
            dispatch(getError(error.response.data));
        } else {
            dispatch(getError("Failed to fetch hostel details"));
        }
    }
};

export const updateHostel = (hostelID, fields) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/Hostel/${hostelID}`, fields);
        if (result.data) {
            dispatch(getSuccess(result.data));
        } else {
            dispatch(getFailed("Failed to update hostel"));
        }
    } catch (error) {
        if (error.response) {
            dispatch(getError(error.response.data));
        } else {
            dispatch(getError("Failed to update hostel"));
        }
    }
}; 