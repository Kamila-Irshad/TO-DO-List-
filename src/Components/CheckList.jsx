"use client"
import UlList from "../Components/ULlist";
const CheckList = () => {
   const handleClick = (event) =>{

    let task = event.target.taskList.value;
   
        
    alert(task);


    event.preventDefault()
   }

    return (
        <>
        <div className="text-center items-center">
<form action=""  
onSubmit={handleClick}
className="items-center text-center ">
    <input type="text" 
        name='taskList'
    className="p-2 border bg-gray-400"/>
    <button 
    className="bg-gray-400 border p-2 mx-2">Save</button>
    
</form>
<UlList></UlList>
</div>
        </>
    )
}
export default CheckList;