import { createContext, useEffect, useReducer, useContext, useState } from "react";
import reducer from "./Reducer";

const Context = createContext();

export default function StoreData({ children }) {
    const initialState = {
        loading: false,
        deals: [],
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "loaddata" });

        async function GetData() {
                const api = await fetch("https://www.cheapshark.com/api/1.0/deals");
                const data = await api.json();

                    console.log(data)
        
        dispatch({ type: "success", payload: data });

        }

        GetData();
    }, []);
    return (
        <Context.Provider value={{ ...state, dispatch }}>
            {children}
        </Context.Provider>
    );
}


export function useGlobal(){
  return useContext(Context)
}

