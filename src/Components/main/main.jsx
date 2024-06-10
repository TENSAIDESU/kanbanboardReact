import React, { useMemo } from "react";
import { Form } from "../math/math";
import { Tasks } from "../task/task";
import  "./main.css";
import { useSelector } from "react-redux";

const Main = () => {
  const cards = useSelector((state) => state.tasks);

  const memoizedCards = useMemo(() => {
    return cards;
  }, [cards]);

  return (
    <body>
      <div className="mainbody">
        {memoizedCards.map((card) => (
          <div key={card.id} className="card">
            <p className="title">{card.title}</p>
            {
              <ul className="list">
                <Tasks key={card.id} card={card} />
              </ul>
            }
            <div>
              <Form card={card} />
            </div>
          </div>
        ))}
      </div>
    </body>
  );
};

export default Main;