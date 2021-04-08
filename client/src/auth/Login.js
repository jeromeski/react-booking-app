import React, { Fragment, useState } from 'react';
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import { login } from '../actions/auth';

import LoginForm from '../components/LoginForm';

const Login = ({ history }) => {
	// create state for email and pw
  const [email, setEmail] = useState('');
  const [password, setPword] = useState('');

  const dispatch = useDispatch();
	// create handleSubmit fn
  const handleSubmit = async (e) => {
    // prevent page reload
    e.preventDefault();
		// try/catch
    try{
			// fetch user data from backend
      const res = await login({
        email,
        password
      });
			// save user & token to local storage
      console.log(res.data)
      window.localStorage.setItem('auth', JSON.stringify(res.data))
			// save user & token in redux
      dispatch({
        type: 'LOGGED_IN_USER',
        payload: res.data
      })
			// redirect
      history.push('/');
		}catch(err) {
			// show error via toast
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data)
		}		
	}  
	
	return (
		<Fragment>
			<div className='container-fluid p-5 bg-secondary text-center'>
				<h1>Login Page</h1>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 offset-md-3'>
						<LoginForm
							handleSubmit={handleSubmit}
							email={email}
							setEmail={setEmail}
							password={password}
							setPword={setPword}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
