import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import User from './components/User';
import Tasks from './components/Tasks';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddTask from './components/AddTask';
import EditUser from './components/EditUser';
import Users from './components/Users';
import ResetPassword from './components/ResetPassword';
import UserLogin from './components/UserLogin';
import Java from './components/Java';
import ReactJs from './components/ReactJs'; 
import SpringBoot from './components/SpringBoot';

function App () {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={UserLogin} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/java" component={Java} />
          <Route path="/reactjs" component={ReactJs} />
          <Route path="/springboot" component={SpringBoot}/>
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/user" component={User} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/tasks/add" component={AddTask} />
          <Route exact path="/user/edit/:id" component={EditUser} />
          <Route
            exact
            path="/user/resetpassword/:id"
            component={ResetPassword}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
