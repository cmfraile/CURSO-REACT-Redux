import { Provider } from "react-redux";
import { store } from "../store/store";

export const reduxProvider = ({children}:any) => {
    return(<Provider store={store}>{children}</Provider>)
}