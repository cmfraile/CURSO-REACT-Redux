import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { reduxContext } from "../context/reduxContext"
import { counterReduxHook } from "../hooks/counterHook.redux"
import { RootState } from "../store/store"

const Redux = () => {

    const { count , increment } = counterReduxHook();

    return(
        <div className="container">
            <div className="row my-5"><div className="col"><h1>REACT/REDUX</h1><h3>Redux</h3></div></div>
            <div className="row my-5"><div className="col">
                <h3>{count}</h3> <button type="button" className="btn btn-primary" onClick={increment}> Incremento </button>
            </div></div>
        </div>
    )
}

export default Redux