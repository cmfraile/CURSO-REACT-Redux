import { Provider } from "react-redux";
import { createContext } from "react";
import { store } from "../store/store";

export const pokemonContext = createContext<any>({});
export const pokemonProvider = ({children}:any) => {
    return(
    <Provider store={store}>
        <pokemonContext.Provider value={{}}>{children}</pokemonContext.Provider>
    </Provider>
    )
}