import { useReducer } from "react";
import { random } from "underscore";

enum acts {add = '[TODO] Add Todo'};
export interface todo {id:number,todo:string,done:boolean}
interface action {type:acts,payload:todo}

const todocraft = (todo:string):todo => {return {id:(new Date().getTime() + random(0,1000)),todo,done:false}};

const todoReducer = (state:todo[]|[],action:action) => {
    if(!action){return state};
    const { type , payload } = action ; const { add } = acts;
    switch(type){
        case add    : return [...state,payload] ;
        default     : throw new Error() ;
    }
}

export const todoCrud = () => {

    const [ todos , todosDispatch ] = useReducer(todoReducer,[]);
    const { add } = acts ;

    const crud = {
        addTODO:(todo:string) => todosDispatch({type:add,payload:todocraft(todo)})
    }

    return ({todos,...crud})

}