import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard';

const Tasks = () => {
  const [users, setUser] = useState ([]);

  useEffect (() => {
    loadUsers ();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get ('http://localhost:3666/users');
    console.log (result);
    setUser (result.data.reverse ());
  };

  const deletetask = async id => {
    await axios.delete (`http://localhost:3666/users/${id}`);
    loadUsers ();
  };
  return (
    <div className="container">
      <Dashboard />
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-light">
            <tr>
              <th scope="col">UserId</th>
              <th scope="col">Title</th>
              <th scope="col">Completed</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map ((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.title}</td>
                <td>{user.completed}</td>
                <td>
                  <Link
                    class="btn btn-primary mr-2"
                    to={`/user/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deletetask (user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className="btn btn-primary" to="/tasks/add">Add task</Link>
    </div>
  );
};

export default Tasks;
