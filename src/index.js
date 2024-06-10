import React from "react";
//import ReactDOM from "react-dom";
//import { BrowserRouter } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import store from "./tasklocal/store";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import TaskDetails from "./Components/task/task.details";
import Main from "./Components/main/main";
import "../src/index.css"

 const App = () => {
 return (<>
      <Header/>
      <Routes>
        <Route path='/Kanban-board' element={<Main/>}/> 
        <Route path='/tasks/:taskId' element={<TaskDetails/>}/>
       </Routes>
       <Footer />
   </>  
   )
 };



const root = createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </Provider>
);

