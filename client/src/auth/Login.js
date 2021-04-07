import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { login } from '../actions/auth';
import LoginForm from '../components/LoginForm';
import { useDispatch } from 'react-redux';

const Login = ({history}) => {
	// create state for email and pw
	const [email, setEmail] = useState('');
	const [password, setPword] = useState('');

  const dispatch = useDispatch();

	// create handleSubmit fn
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await login({
				email,
				password
			});
			console.log('LOGIN RESPONSE → ', res);
			if (res.data) {
				console.log('SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ==>');
				console.log(res.data);
				// Save user and token to Local Storage
				window.localStorage.setItem('auth', JSON.stringify(res.data));
				// Save user and token to redux
				dispatch({
					type: 'LOGGED_IN_USER',
					payload: res.data
				});
        history.push('/');
			}
		} catch (err) {
			if (err.response.status === 400) toast.error(err.response.data);
		}
	};
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
