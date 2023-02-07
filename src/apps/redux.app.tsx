import { useState , useRef } from "react";
import { counterReduxHook } from "../hooks/counterHook.redux"
import { useForm } from "../hooks/useForm";

const Redux = () => {

    const { count , increment , decrement , change } = counterReduxHook();
    const [ range , setRange ] = useState(0);
    const rangeHTML = useRef<HTMLInputElement>((<input/>).type)

    return(
        <div className="container">
            <div className="row my-5"><div className="col"><h1>REACT/REDUX</h1><h3>Redux</h3></div></div>
            <div className="row my-5"><div className="col d-flex flex-column align-items-center">
                <h3>{count}</h3>
                <button type="button" className="btn btn-primary my-2 w-25" onClick={increment}> Incremento </button>
                <button type="button" className="btn btn-primary my-2 w-25" onClick={decrement}> Decremento </button>
                <p>{range}</p>
                <input  type="range"
                        className="form-range"
                        min="-5"
                        max="5"
                        defaultValue={0}
                        onChange={() => {setRange(Number(rangeHTML.current.value))}}
                        ref={rangeHTML}>
                </input>
                <button type="button" className="btn btn-primary my-2 w-25" onClick={() => {change(range)}}> Cambio </button>
            </div></div>
        </div>
    )
}

export default Redux