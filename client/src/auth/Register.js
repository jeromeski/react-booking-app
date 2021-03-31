import React, { Fragment, useState } from 'react';

const Register = () => {
	// create state for name, email and pw
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [pword, setPword] = useState('');

	// create an fn component for form
	const registerForm = () => (
		<form onSubmit={handleSubmit} className='mt-3'>
			<div className='form-group mb-3'>
				<label className='form-label'>Name</label>
				<input
					type='text'
					className='form-control'
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Enter Name'
				/>
			</div>
			<div className='form-group mb-3'>
				<label>Email</label>
				<input
					type='text'
					className='form-control'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Enter Email'
				/>
			</div>
			<div className='form-group mb-3'>
				<label className='form-label'>Password</label>
				<input
					type='password'
					className='form-control'
					value={pword}
					onChange={(e) => setPword(e.target.value)}
					placeholder='Enter Password'
				/>
			</div>
			<button className='btn btn-primary' type='submit'>
				Submit
			</button>
		</form>
	);
	// create handleSubmit fn
	const handleSubmit = (e) => {
		e.preventDefault();
		console.table({ name, email, pword });
	};
	return (
		<Fragment>
			<div className='container-fluid p-5 bg-secondary text-center'>
				<h1>Register Page</h1>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 offset-md-3'>{registerForm()}</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Register;
