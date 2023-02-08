import { useState } from "react"
import { useGetTodoQuery, useGetTodosQuery } from "../api/todos.api"

const TodoReduxApp = () => {

    const [ id , setId ] = useState(1) ;
    //const { data , isLoading } = useGetTodoQuery(id) ;

    return(
        <div className="container">
            <div className="row"><div className="col"><h1>TodoReduxApp</h1></div></div>
            <div className="row"><div className="col">
                <pre>{JSON.stringify(useGetTodoQuery(id).data)}</pre>
                <button onClick={() => {setId(id+1)}} >+1</button>
            </div></div>
        </div>
    )
}

export default TodoReduxApp