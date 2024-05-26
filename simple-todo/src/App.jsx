import { useState, useEffect } from "react";
import Button from "./components/Button";
import Task from "./components/Task";
import AddTaskPopup from "./components/AddTaskPopup";

function App() {
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isAddTaskPopupDisplayed, setIsAddTaskPopupDisplayed] = useState(false);

  const [selectedTaskIds, setSelectedIds] = useState([]);

  const handleOnClickAddTask = () => {
    setIsAddTaskPopupDisplayed(true);
  };

  const handleOnCancelClickAddTaskPopup = () => {
    setIsAddTaskPopupDisplayed(false);
  };

  const handleOnSuccessAddTask = () => {
    setOngoingTasks([
      ...ongoingTasks,
      {
        id: 5,
        title: "Nyanyi Bareng",
        datelineDateTime: "2024-05-30",
      },
    ]);
  };

  const handleOnSelectOngoingTask = (taskId) => {
    setSelectedIds([...selectedTaskIds, taskId]);

    console.log(selectedTaskIds.length);
  };

  const handleOnClickRemoveSelectedTasks = () => {};

  const handleOnClickCompleteSelectedTasks = () => {};

  const handleOnUnselectOngoingTask = (taskIdToRemove) => {
    setSelectedIds(
      selectedTaskIds.filter((taskId) => taskId !== taskIdToRemove)
    );
  };

  useEffect(() => {
    setOngoingTasks([
      {
        id: 1,
        title: "Nyanyi Bareng",
        datelineDateTime: "2024-05-30",
      },
      {
        id: 2,
        title: "Nyanyi Asik",
        datelineDateTime: "2024-05-30",
      },
    ]);

    setCompletedTasks([
      {
        id: 3,
        title: "Nyanyi Bareng",
        datelineDateTime: "2024-05-30",
      },
      {
        id: 4,
        title: "Nyanyi Bareng",
        datelineDateTime: "2024-05-30",
      },
    ]);
  }, []);

  useEffect(() => {
    console.log(selectedTaskIds.join());
  }, [selectedTaskIds]);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mt-8 mb-20">Todo List</h1>

        <section className="mb-12">
          <h1 className="text-xl font-semibold mt-8 mb-6">On-going</h1>

          <div className="flex justify-between">
            <div className="flex gap-x-5 mb-6">
              <Button onClick={handleOnClickAddTask}>Add</Button>
              {selectedTaskIds.length > 0 && (
                <Button
                  state="danger"
                  onClick={handleOnClickRemoveSelectedTasks}
                >
                  Remove Selected
                </Button>
              )}

              {selectedTaskIds.length > 0 && (
                <Button
                  state="danger"
                  onClick={handleOnClickCompleteSelectedTasks}
                >
                  Complete Selected
                </Button>
              )}
            </div>

            <div>
              {selectedTaskIds.length > 0 &&
                selectedTaskIds.length + " selected"}
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            {ongoingTasks.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                title={task.title}
                datelineDateTime={task.datelineDateTime}
                onSelect={handleOnSelectOngoingTask}
                onUnselect={handleOnUnselectOngoingTask}
              />
            ))}
          </div>
        </section>

        <section>
          <h1 className="text-xl font-semibold mt-8 mb-6">Completed</h1>

          <div className="flex gap-x-5 mb-6">
            <Button state="danger">Remove Selected</Button>
          </div>

          <div className="flex flex-col gap-y-5">
            {completedTasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                datelineDateTime={task.datelineDateTime}
              />
            ))}
          </div>
        </section>
      </div>

      {isAddTaskPopupDisplayed && (
        <AddTaskPopup
          onSuccess={handleOnSuccessAddTask}
          onCancelClick={handleOnCancelClickAddTaskPopup}
        />
      )}
    </>
  );
}

export default App;
