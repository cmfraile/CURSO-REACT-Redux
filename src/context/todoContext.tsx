import { createContext } from "react";
import { todoCrud } from "../hooks/todoCrud";

export const todoContext = createContext<any>({});
export const todoProvider = ({children}:any) => {
    return(<todoContext.Provider value={{...todoCrud()}}>{children}</todoContext.Provider>)
}