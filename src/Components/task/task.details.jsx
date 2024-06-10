import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import  "./details.css";
import back from "./delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../../tasklocal/taskloc";

const TaskDetails = () => {
  const cards = useSelector((state) => state.tasks);
  const { taskId } = useParams();
  const dispatch = useDispatch();

  let match = [cards[0], cards[1], cards[2], cards[3]];
  let issue = 0;
  let ind = "";
  match.forEach((item) => {
    item.tasks.forEach((el) => {
      if (el.id === +taskId) {
        issue = el;
        ind = item.id;
      }
    });
  });
  console.log(ind);
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(issue.description);
  const [title, setTitle] = useState(issue.name);
 
  const handleDescription = (description) => {
    setDescription(description);
  };
  const handleTitle = (title) => {
    setTitle(title);
  };
  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    dispatch(
      editTask({
        cardIndex: ind,
        id: issue.id,
        name: title,
        description: description,
      })
    );
    setEdit(false);
  };
  let content = null;
  if (!edit && issue !== 0) {
    content = (
      <div className="current">
        <h2>{issue.name}</h2>
        <p>{issue.description}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  } else if (edit && issue !== 0) {
    content = (
      <div className="form">
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => handleTitle(e.target.value)}
          autoFocus={true}
        />{" "}
        <br />
        <textarea
          className="textarea"
          value={description}
          onChange={(e) => handleDescription(e.target.value)}
          rows="15"
          cols="23"
        ></textarea>
        <br />
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    );
  } else if (issue === 0) {
    content = (
      <h1 className="empty">
        Task with ID <em>{taskId}</em> was not found
      </h1>
    );
  }
  return (
    <div className="kanbanBox">
      <NavLink title="back" className="back" to="/Kanban-board">
        {" "} <button className="buttonback"><img className= "backimg" src={back} alt="back" /></button>
      </NavLink>{" "}
      <br />
      {content}
    </div>
  );
};


export default TaskDetails;

