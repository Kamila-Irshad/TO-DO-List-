"use client";
const UlList = ({ tasks }) => {
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
            <span className="p-2 text-3xl"> &times; </span>
          </li>
        </ul>
      ))}
    </>
  );
};
export default UlList;


// "use client";

// const UlList = ({ tasks }) => {
//   return (
//     <>
//       {tasks.map((task, index) => (
//         <ul
//           key={index}
//           className="w-full flex flex-col text-center"
//         >
//           <li className="bg-blue-100 flex text-3xl justify-between flex-row p-2 m-1 rounded">
//             {task}
//             <span className="p-2 text-3xl cursor-pointer">&times;</span>
//           </li>
//         </ul>
//       ))}
//     </>
//   );
// };

// export default UlList;
