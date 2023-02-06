import { useForm } from "../hooks/useForm";
import { useContext } from "react";
import { todoContext } from "../context/todoContext";
import { todo } from "../hooks/todoCrud";

const DispatcherExample = ():JSX.Element => {

  const { todo , onInputChange , onResetForm } = useForm({todo:''});
  const { todos , addTODO } = useContext(todoContext);

  return (
    <div className="container">
      <div className="row my-3"><div className="col"><h1>REACT/REDUX</h1><h3>Ejemplo de dispatcher</h3></div></div>
      <div className="row my-3"><div className="col">
      <form
            onSubmit={(e) => {
              e.preventDefault();
              const caso = todo.trim().toUpperCase();
              if(todo.trim().length <= 2){ onResetForm() ; return};
              if(todos.map((x:todo) => x.todo.toUpperCase()).includes(caso)){ onResetForm() ; return };
              addTODO(todo) ; onResetForm() ;
            }}>
            <input
            className="form-control"
            type="text"
            name="todo"
            value={todo}
            placeholder={'añadir todo'}
            onChange={onInputChange}
            />
            </form>
      </div></div>
      <div className="row my-3"><div className="col">
        {(todos.length > 0) &&
        <>
          <h3>{todos.length}</h3>
          <ul>{todos.map(({id,todo,done}:todo) => (<li key={id} >{todo}</li>))}</ul>
        </>
        }
      </div></div>
    </div>
  )
}

export default DispatcherExample
