import React from "react";
import Button from "./Button";

export default function AddTaskPopup({ onSuccess, onCancelClick }) {
  const handleOnAddClick = () => {
    onSuccess();
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#424242] p-6 rounded-lg 
  "
    >
      <h2 className="text-xl font-bold mb-8">Add Task</h2>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          id="title"
          class=" bg-transparent border-white border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-w-96"
          placeholder="Title"
          required
        />

        <input
          type="datetime-local"
          id="dateline"
          class=" bg-transparent border-white border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Dateline"
          required
        />
      </div>

      <div className="w-full flex">
        <div className="flex gap-5 mt-8 ml-auto">
          <Button
            className="bg-transparent border-white border"
            onClick={onCancelClick}
          >
            Cancel
          </Button>
          <Button onClick={handleOnAddClick} className="cursor-pointer">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
