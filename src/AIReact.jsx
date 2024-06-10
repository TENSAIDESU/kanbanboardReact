
import
 React, { useState } from 
'react'
;
import
 { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from 
'react-router-dom'
;
const
 TaskList = () => {
  
const
 tasks = [
    { id: 
1
, title: 
'Задача 1'
, description: 
'Описание задачи 1'
 },
    { id: 
2
, title: 
'Задача 2'
, description: 
'Описание задачи 2'
 },
    { id: 
3
, title: 
'Задача 3'
, description: 
'Описание задачи 3'
 },
  ];
  
return
 (
    <div>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const
 TaskDetail = () => {
const
 { taskId } = 
useParams
();
  
const
 tasks = [
    { id: 
1
, title: 
'Задача 1'
, description: 
'Описание задачи 1'
 },
    { id: 
2
, title: 
'Задача 2'
, description: 
'Описание задачи 2'
 },
    { id: 
3
, title: 
'Задача 3'
, description: 
'Описание задачи 3'
 },
  ];
  
const
 task = tasks.
find
((task) => task.id === 
Number
(taskId));
  
const
 [description, setDescription] = 
useState
(task ? task.description : 
'');
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const history = useHistory();
  const handleGoBack = () => {
    history.push('/');
  };
  return (
    <div>
      <h1>{task ? task.title : 'Задача не найдена'}</h1>
      <textarea value={description} onChange={handleDescriptionChange} />
      <button onClick={handleGoBack}>Назад</button>
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TaskList />
        </Route>
        <Route path="/tasks/:taskId">
          <TaskDetail />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;