import React from "react";
import { NavLink } from "react-router-dom";
import  "./task.css";
import { removeTask } from "../../tasklocal/taskloc";
import { useDispatch } from "react-redux";


export const Tasks = ({ card }) => {
  const dispatch = useDispatch();
  
  return (
    <>
      {card.tasks.map((task) => (
        <div className="task" key={task.id}>
         <NavLink to={`/tasks/${task.id}`}> {task.name}
         </NavLink>
          <span
            className="delete"
            title="delete"
            onClick={() => {
              dispatch(removeTask({ cardId: card.id, taskId: task.id }));
            }}
          >
            &#10006;
          </span>
        </div>
      ))}
    </>
  );
};
