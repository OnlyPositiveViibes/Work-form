import { OPEN_FORM, SET_WORKS, ADD_WORK_DATA, VALIDATE_WORK, FILTER_WORKS, SET_FILTER } from "./types";

export const getWorks = data => {
    return {
        type: SET_WORKS,
        payload: data
    };
};

export const openForm = status => {
    return {
        type: OPEN_FORM,
        payload: status
    };
};

export const addWorkData = data => {
    return {
        type: ADD_WORK_DATA,
        payload: data
    };
};

export const validateWork = data => {
    return {
        type: VALIDATE_WORK,
        payload: data
    };
};

export const filterWorks = data => {
    return {
        type: FILTER_WORKS,
        payload: data
    };
};

export const setFilter = data => {
    return {
        type: SET_FILTER,
        payload: data
    };
};
