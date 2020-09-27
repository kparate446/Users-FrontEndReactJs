import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard';

const Users = () => {
  const [users, setUser] = useState ([]);

  useEffect (() => {
    loadUsers ();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get ('http://localhost:3666/users');
    console.log (result);
    setUser (result.data.reverse ());
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
                <td>{user.userName}</td>
                <td>{user.password}</td>
                <td>
                  <Link
                    class="btn btn-primary mr-2"
                    to={`/user/resetpassword/${user.id}`}
                  >
                    Reset Password
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
