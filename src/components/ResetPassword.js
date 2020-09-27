import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard';

const ResetPassword = () => {
  let history = useHistory ();
  const {id} = useParams ();

  const [user, setUser] = useState ({
    userId: '',
    userName: '',
    password: '',
  });
  const {userName, password} = user;
  const onInputChange = e => {
    setUser ({...user, [e.target.name]: e.target.value});
  };

  useEffect (() => {
    loadUser ();
  }, []);

  const onSubmit = async e => {
    e.preventDefault ();
    await axios.put (`http://localhost:3666/users/${id}`, user);
    history.push ('/tasks');
  };

  const loadUser = async () => {
    const result = await axios.get (`http://localhost:3666/users/${id}`);
    setUser (result.data);
  };

  return (
    <div className="container">
      <Dashboard />
      <div className="w-75 mx auto border shadow p-5">
        <form onSubmit={e => onSubmit (e)}>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Username
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                placeholder="Enter the user name"
                name="userName"
                value={userName}
                onChange={e => onInputChange (e)}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                readonly
                class="form-control-plaintext"
                id="inputPassword"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onInputChange (e)}
              />
            </div>
          </div>
          <button type="submit" class="btn border mr-4 ">
            Change password
          </button>
          <Link class="btn btn-primary mr-2" to={`/`}>Logout</Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
