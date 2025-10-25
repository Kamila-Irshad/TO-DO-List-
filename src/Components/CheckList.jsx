"use client";
import { useState } from "react";
import UlList from "../Components/ULlist";
const CheckList = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleClick = (event) => {
    event.preventDefault();

    if (!inputValue.includes(inputValue)) return;

    setTask([...task, inputValue]);

    setInputValue("");
  };
  return (
    <>
      <div className="text-center items-center m-auto  bg-blue-200 w-1/2 justify-center ">
        <form
          action=""
          onSubmit={handleClick}
          className="items-center text-center m-2  flex flex-row justify-center gap-5"
        >
          <input
            type="text"
            name="taskList"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
            className="p-2 w-lvh border bg-blue-400"
          />
          <div>
            <button className="bg-blue-300 border py-1 rounded text-sm m-2">
              Add Task{" "}
            </button>
          </div>
        </form>
        <UlList tasks={task}></UlList>
      </div>
    </>
  );
};
export default CheckList;
