import React from "react";
import { ITask } from "./Interfaces";

interface Props {
  task: ITask;
  completeTask(task: ITask): void;
}

function Tasks({ task, completeTask }: Props) {
  return (
    <div className="task">
      <div className="content">
        <span> {task.taskName}</span> <span>{task.taskDescription}</span>{" "}
        <span style={{ flex: "25%" }}>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Tasks;
