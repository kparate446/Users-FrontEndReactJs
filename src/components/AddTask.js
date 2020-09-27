import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
 import axios from "axios";
 import Dashboard from './Dashboard';

const AddTask = () => {
  let history = useHistory ();

  const [user, setUser] = useState ({
    userId: '',
    title: '',
    completed: '',
  });
  const{ title,completed} = user;
  const onInputChange = e => {
    // console.log (e.target.value);
    setUser ({ ...user, [e.target.name]: e.target.value});
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3666/users', user);
    history.push("/");
};

  return (
    <div className="container">
  <Dashboard/>
      <div className="w-75 mx auto border shadow p-5">
        <h2 className="text-center mb-4">Add a task</h2>
        <form onSubmit={e => onSubmit (e)}>
          <div class="form-group">
            <label>Enter the User Id</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter the user id"
              name="userId"
              value={user.userId}
              onChange={e => onInputChange (e)}
            />
          </div>

          <div class="form-group">
            <label>Enter the task</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter task"
              name="title"
              value={title}
              onChange={e => onInputChange (e)}
            />
          </div>
          <div class="form-group">
            <label>completed</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="completed"
              name="completed"
              value={completed}
              onChange={e => onInputChange (e)}
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
