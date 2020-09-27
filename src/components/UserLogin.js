import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
  let history = useHistory ();

  const [user, setUser] = useState ({
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
    await axios.post (`http://localhost:3666/users`, user);
    history.push ('/home');
  };

  const loadUser = async () => {
    const result = await axios.get (`http://localhost:3666/users`);
    setUser (result.data);
  };

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '7%',
      }}
    >
      <div className="w-75 mx auto border shadow p-5">
        <h2 className="text-center mb-4">User Login</h2>
        <form onSubmit={e => onSubmit (e)}>
          <div class="form-group">
            <label>Enter the Username</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter the user name"
              name="userName"
              value={userName}
              onChange={e => onInputChange (e)}
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onInputChange (e)}
            />
          </div>
          <button type="submit" class="btn-primary ">Login User</button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
