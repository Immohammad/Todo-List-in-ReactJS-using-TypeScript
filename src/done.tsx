import React from "react";
import { ITask } from "./Interfaces";

interface Props {
  task: ITask;
  addTask(taskToAdd: ITask): void;
}

function Tasks({ task, addTask }: Props) {
  return (
    <div className="task">
      <div className="content" id="doneContainer">
        <span> {task.taskName}</span> <span>{task.taskDescription}</span>{" "}
      </div>
      <button
        onClick={() => {
          addTask(task);
        }}
        style={{backgroundColor: "#50c878"}}
      >
        +
      </button>
    </div>
  );
}

export default Tasks;
