import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import { IoAddCircleOutline } from 'react-icons/io5';
import AddTodoModal from '../Components/AddTodoModal';
import TodoItemList from '../Components/TodoItemList';

const Home = () => {
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const addTodoModalDoneButton = (todo, setShowError) => {
    console.log(todo, "==================")
    if (!todo || todo?.task?.trim()?.length === 0) {
      setShowError(true);
      return;
    }
    setAllTodos((prev) =>
      prev.length > 0
        ? [
            ...prev,
            {
              ...todo,
              color: 'purple',
              completed: false,
              id: Math.random() * 1000000,
              time:todo?.time
            },
          ]
        : [
            {
              ...todo,
              color: 'purple',
              completed: false,
              id: Math.random() * 1000000,
              time:todo?.time
            },
          ]
    );
    setShowAddTodoModal(false);
  };
  return (
    <div>
      <div className="w-screen flex justify-center h-auto">
        <div className="w-1/3 justify-center border-2 border-blue-500">
          <NavBar />
          <div className="flex m-3 justify-between items-center ">
            <h3 className="text-3xl font-bold">Today</h3>
            <IoAddCircleOutline
              className="text-2xl text-blue-600 cursor-pointer"
              onClick={() => {
                setShowAddTodoModal(true);
              }}
            />
          </div>
          {allTodos?.map((singleTodo) => {
            return (
              <TodoItemList
                key={singleTodo?.id}
                todo={singleTodo}
                setAllTodos={setAllTodos}
              />
            );
          })}
          {showAddTodoModal && (
            <AddTodoModal
              addTodoModalCancelButton={() => setShowAddTodoModal(false)}
              addTodoModalDoneButton={addTodoModalDoneButton}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
