import React from "react";
import  "./footer.css";
import { useSelector } from "react-redux";
const Footer = () => {
  const cards = useSelector((state) => state.tasks);
  return (
    <footer className="downtext">
      <div className="active">
        <p className="para">
          Active tasks: <strong>{cards[0].tasks.length}</strong>
        </p>
        <p className="para">
          Finished tasks: <strong>{cards[3].tasks.length}</strong>
        </p>
      </div>
      <p className="author">
        Kanban board by <strong>TensaiDesu</strong>, Year:
        <strong> {new Date().getFullYear()}</strong>
      </p>
    </footer>
  );
};
export default Footer;
