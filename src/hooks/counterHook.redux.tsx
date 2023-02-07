import { useSelector , useDispatch } from "react-redux"
import counterSlice from "../store/slices/counterSlice";
import { RootState } from "../store/store"

export const counterReduxHook = () => {

    const count = useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch();

    const increment = () => {dispatch(counterSlice.actions.increment())};
    const decrement = () => {dispatch(counterSlice.actions.decrement())};
    const changeByAmount = (newValue:number) => { dispatch(counterSlice.actions.changeByAmount(newValue)) };

    return ({
        count,
        increment , decrement , change:changeByAmount
    })

}