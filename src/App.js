import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { ManagerDashBoard } from './components/manager/ManagerDashBoard';
import { DeveloperDashBoard } from './components/developer/DeveloperDashBoard';
import { AddProject } from './components/manager/AddProject';
import { AddModule } from './components/manager/AddModule';
import { ViewModule } from './components/manager/ViewModule';
import { ViewAllTask } from './components/manager/ViewAllTask';
import { ViewProject } from './components/manager/ViewProject';

function App() {
  const pathName = window.location.pathname;

  return (
    <div className="wrapper">
      {
        pathName ==="/" || pathName === "/login" || pathName === "/register" ? null :<SideBar/>
      }
      <div className='main-panel'>

      <div className='content'>
        <div className='container-fluid'>
      <Routes>
        <Route path = "/" element = {<Login/>}></Route>
        <Route path ="/manager/dashboard" element = {<ManagerDashBoard/>}></Route>
        <Route path = "/manager/addProject" element = {<AddProject/>}></Route>
        <Route path = "/manager/viewProjects" element = {<ViewProject/>}></Route>
        <Route path = "/manager/addModule/:projectid" element = {<AddModule/>}></Route>
        <Route path = "/manager/viewModules/:projectid" element = {<ViewModule/>}></Route>
        <Route path = "/manager/addTask/:projectid/:moduleid" element = {<AddModule/>}></Route>
        <Route path = "/manager/vieTasks/:projectid/:moduleid" element = {<ViewAllTask/>}></Route>
        <Route path ="/developer/dashboard" element = {<DeveloperDashBoard/>}></Route>
      </Routes>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
