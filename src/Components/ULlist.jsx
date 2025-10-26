"use client";
const UlList = ({ tasks, onDelete }) => {
    
  return (
    <>
      {tasks.map((task, index) => (
        <ul 
                    key={index}

        className="w-full flex flex-col text-center 
         ">
          <li
            className="  bg-blue-100 flex text-3xl  justify-between flex-row"
          >
            {task}
            <span
            onClick={()=>onDelete(index)}
            className="p-2 text-3xl cursor-default"> &times; </span>
          </li>
        </ul>
      ))}
    </>
  );
};
export default UlList;
