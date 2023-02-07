import { useSelector , useDispatch } from "react-redux"
import { RootState } from "../store/store"
import { counterSlice } from "../store/slices/counterSlice";

export const counterReduxHook = () => {

    const count = useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch();

    const increment = () => {dispatch(counterSlice.actions.increment())};

    return ({
        count,
        increment
    })

}