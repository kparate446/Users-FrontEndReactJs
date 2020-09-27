import React from 'react';
import {NavLink} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Dashboard = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div>
          <AccountCircleIcon />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/home">
                Home{' '}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/tasks">Task</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/user">User</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/users">
                Users Details
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Dashboard;
