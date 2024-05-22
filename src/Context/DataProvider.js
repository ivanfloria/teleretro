
import { createContext, useContext, useReducer } from "react"

const DataContext = createContext();

const useDataContext = () => {
    return useContext(DataContext);
}

const initialState = {
    sessionID: 0,
    name: '',
}

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_SESSION': {
            return{
                ...state,
                sessionID: action.value
            }
        }
        case 'ADD_NAME': {
            return{
                ...state,
                name: action.value
            }
        }
    }
    return state;
}

const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <DataContext.Provider value={{
                sessionID: state.sessionID,
                name: state.name,
                dispatch
            }}>
            {children}
        </DataContext.Provider>
    )
}

export {
    DataProvider,
    useDataContext
}