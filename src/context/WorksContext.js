import WorksReducer from "../reducers/WorksReducer";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import * as services from "../services/WorksServices";
import { auth } from "../services/AuthServices";
import { getWorks, openForm, addWorkData, validateWork, filterWorks, setFilter } from "../actions/WorksActions";

const initialState = {
    worksNew: [],
    worksFiltered: [],
    work: {
        date: "",
        company: "",
        service: "",
        description: "",
        from: "",
        to: ""
    },
    errors: [],
    isOpen: false,
    filter: {}
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [state, dispatch] = useReducer(WorksReducer, initialState);

    useEffect(() => {
        if (loading) return;
        try {
            services.getAllWorks(data => {
                dispatch(getWorks(data));
            }, user);
        } catch (error) {
            console.log(error);
        }
    }, [user, loading]);

    useEffect(() => {
        dispatch(filterWorks(state.filter));
        console.log("state:", state);
    }, [state.filter]);

    const handleForm = status => {
        dispatch(openForm(status));
    };

    const handleWorkData = input => {
        dispatch(addWorkData(input));
    };

    const workValidation = data => {
        dispatch(validateWork(data));
    };

    const handleFilter = criteria => {
        dispatch(setFilter(criteria));
    };

    const addWorkToFirestore = data => {
        try {
            services.addWork(data);
        } catch (error) {
            console.log(error);
        }
        handleForm(false);
    };

    const updateFirestore = (id, data) => {
        try {
            services.updateWork(id, data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteFromFirestore = id => {
        try {
            services.deleteWork(id);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <AppContext.Provider
            value={{ ...state, handleForm, handleWorkData, workValidation, addWorkToFirestore, updateFirestore, deleteFromFirestore, handleFilter }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
