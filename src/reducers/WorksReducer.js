import { ADD_WORK_DATA, FILTER_WORKS, OPEN_FORM, SET_WORKS, VALIDATE_WORK, SET_FILTER } from "../actions/types";
import workValidation from "../utilities/workValidation";
import handleFilter from "../utilities/worksFilter";

const WorksReducer = (state, action) => {
    switch (action.type) {
        case SET_WORKS:
            return {
                ...state,
                worksNew: action.payload
            };
        case OPEN_FORM:
            return {
                ...state,
                isOpen: action.payload
            };
        case ADD_WORK_DATA:
            return {
                ...state,
                work: {
                    ...state.work,
                    ...action.payload
                }
            };
        case VALIDATE_WORK:
            return {
                ...state,
                errors: workValidation(action.payload)
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        case FILTER_WORKS:
            const filteredItems = handleFilter(action.payload, state.worksNew);
            return {
                ...state,
                worksFiltered: filteredItems
            };
        default:
    }
};

export default WorksReducer;
