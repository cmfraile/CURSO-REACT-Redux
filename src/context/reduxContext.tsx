import { Provider } from "react-redux";
import { createContext } from "react";
import { store } from "../store/store";
import { counterReduxHook } from "../hooks/counterHook.redux";

export const reduxContext = createContext<any>({});
export const reduxProvider = ({children}:any) => {
    return(
    <Provider store={store}>
        <reduxContext.Provider value={{}}>{children}</reduxContext.Provider>
    </Provider>
    )
}