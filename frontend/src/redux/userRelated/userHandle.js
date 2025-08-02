import axios from 'axios';
import { getRequest, getSuccess, getFailed, getError, getDeleteSuccess, stuffAdded } from './userSlice';

export const loginUser = (fields, role) => async (dispatch) => {
    dispatch(getRequest());

    try {
        let address;
        if (role === "Student") {
            address = "StudentLogin"
        } else if (role === "Admin") {
            address = "AdminLogin"
        } else {
            address = "WardenLogin"
        }

        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/${address}`, fields);
        if (result.data) {
            dispatch(getSuccess(result.data));
        } else {
            dispatch(getFailed("Login Failed"));
        }
    } catch (error) {
        if (error.response) {
            dispatch(getError(error.response.data));
        } else {
            dispatch(getError("Failed to login"));
        }
    }
}

export const registerUser = (fields, role) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/${role}Reg`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (result.data.collegeName) {
            dispatch(getSuccess(result.data));
        }
        else if (result.data.college) {
            dispatch(stuffAdded());
        }
        else {
            dispatch(getFailed(result.data.message));
        }
    } catch (error) {
        dispatch(getError(error));
    }
};

export const logoutUser = () => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/Logout`);
        if (result.data) {
            dispatch(getSuccess(null));
        } else {
            dispatch(getFailed("Logout Failed"));
        }
    } catch (error) {
        dispatch(getError("Failed to logout"));
    }
}

export const getUserDetails = async (dispatch) => {
    try {
        // Implementation for getting user details
        // This function can be expanded based on requirements
    } catch (error) {
        dispatch(getError(error));
    }
}

export const deleteUser = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getDeleteSuccess());
        }
    } catch (error) {
        if (error.response) {
            dispatch(getError(error.response.data));
        } else {
            dispatch(getError("Failed to delete"));
        }
    }
}

export const updateUser = (fields, id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`, fields);
        if (result.data) {
            dispatch(getSuccess(result.data));
        } else {
            dispatch(getFailed("Update Failed"));
        }
    } catch (error) {
        if (error.response) {
            dispatch(getError(error.response.data));
        } else {
            dispatch(getError("Failed to update"));
        }
    }
}

export const addStuff = (fields, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/${address}Create`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(stuffAdded(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
};