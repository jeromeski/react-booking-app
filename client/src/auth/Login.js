import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { login } from '../actions/auth';
import LoginForm from '../components/LoginForm';
// import toastify
//  import login action

const Login = () => {
	// create state for email and pw
	const [email, setEmail] = useState('');
	const [password, setPword] = useState('');

	// create handleSubmit fn
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await login({
				email,
				password
			});
			console.log('REGISTER USER → ', res);
			toast.success('Login Success!');
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
							pword={password}
							setPword={setPword}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
