import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import image from '../../img/logo.png';
import '../styles/Entry.css';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div id='back'>
      <form className='login-form'>
        <img src={image} alt='Logo' />

        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            id='email'
            className='form-control'
            placeholder='name@example.com'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            className='form-control'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <button
          type='button'
          className='btn btn-dark btn-block'
          onClick={handleLogin}
        >
          Log in
        </button>

        <p className='text-center'>OR</p>
        <p className='text-center'>
          Not registered yet?{' '}
          <NavLink to='/sign' className='signup-link'>
            Go to Sign up
          </NavLink>
        </p>
      </form>
    </div>
  );
};
