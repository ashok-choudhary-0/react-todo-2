import React, { useEffect } from 'react';
import { IoMdAlarm } from 'react-icons/io';

const TodoItemList = ({
  todo,
  setAllTodos,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex justify-between gap-2 items-center ml-4">
          <input
            type="checkbox"
            name=""
            id=""
            className="h-4 w-4 rounded-full border-2 border-gray-400"
            onChange={(e) => {
              const isChecked = e.target.checked;
              setAllTodos((prevTodos) =>
                prevTodos?.map((singleTodo) =>
                  singleTodo.id === todo.id
                    ? { ...singleTodo, completed: isChecked }
                    : singleTodo
                )
              );
            }}
          />
          <div>
            <p>{todo?.task}</p>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <IoMdAlarm /> <span>{todo?.time}</span>
            </div>
          </div>
        </div>
        <span
          className={`h-3 w-3 rounded-full border border-black-500 ${
            todo?.completed ? 'bg-green-500' : 'bg-purple-500'
          } mr-4`}
        ></span>
      </div>

      <hr className="ml-10 mt-3 mb-3" />
    </div>
  );
};

export default TodoItemList;
