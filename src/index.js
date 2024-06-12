import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import store from "./tasklocal/store";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import TaskDetails from "./Components/task/task.details";
import Main from "./Components/main/main";
import "../src/index.css"


 const App = () => {
 return (
 <>
      <Header/>
      <Routes>
        <Route  path='/' element={<Main/>}/>
        <Route path='/tasks/:taskId' element={<TaskDetails/>}/>
         <Route  path='/Kanban-board' element={<Main/>}/>
       </Routes>
       <Footer/>
   </>  
   )
 };

const root = createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
     <BrowserRouter>
       <App/>
     </BrowserRouter>
   </Provider>
);

