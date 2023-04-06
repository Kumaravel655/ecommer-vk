import React,
{
    createContext,
    useContext,
    useReducer,

}
from "react";

export const StateContext = createContext();
  
export const Datalayer =({initialState,
    reducer,
     children }) =>(
     <DatalayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
     </DatalayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DatalayerContext)