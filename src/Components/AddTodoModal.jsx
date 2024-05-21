import React, { useEffect, useState } from 'react';
import moment from 'moment';

const AddTodoModal = ({ addTodoModalCancelButton, addTodoModalDoneButton }) => {
  const [todo, setTodo] = useState({
    task: '',
    time: '',
  });
  const [showError, setShowError] = useState(false);

  const handleOnChange = (event) => {
    if (event.target.value.trim().length === 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }
    setTodo((prev) => ({
      ...prev,
      task: event.target.value,
    }));
  };

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal-content flex flex-col border-2 border-gray-200 rounded-md p-3 w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white">
        <h2 className="text-xl font-bold text-left">Add Todo</h2>
        <textarea
          placeholder="Enter your task here..."
          className="border px-3 py-2 mt-4 w-full outline-none border-2 border-gray-200 rounded-md"
          value={todo?.task}
          onChange={handleOnChange}
        ></textarea>
        {showError && <p className="text-red-500">Task Can't be empty</p>}
        <input
          type="datetime-local"
          name=""
          id=""
          min={moment().format('YYYY-MM-DD HH:mm')}
          className="border px-3 py-2 mt-4 w-full outline-none border-2 border-gray-200 rounded-md"
          onChange={(e) => {
            setTodo((prev) => ({
              ...prev,
              time: moment(e.target.value, 'YYYY-MM-DD HH:mm').format(
                'YYYY-MM-DD HH:mm'
              ),
            }));
          }}
          value={todo?.time ?todo?.time: moment().format('YYYY-MM-DD HH:mm')}
        />
        <div className="flex justify-between mt-4">
          <button
            className="text-blue-400 font-bold py-2 rounded mr-2"
            onClick={addTodoModalCancelButton}
          >
            Cancel
          </button>
          <button
            className="text-blue-500 font-bold py-2 rounded"
            onClick={() => {
              addTodoModalDoneButton(todo, setShowError);
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoModal;
