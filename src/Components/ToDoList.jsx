'use client'
import CheckList from "../Components/CheckList";
const ToDoList = () =>{
    return (
        <>
        <div>
            <h1 className="text-center p-4 text-4xl font-bold underline">To Do List For Daily Routine</h1>
        </div>
        <div>
            <CheckList></CheckList>
        </div>
        </>
    )
}
export default ToDoList ;