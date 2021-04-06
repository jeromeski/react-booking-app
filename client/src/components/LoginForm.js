import React from 'react';

const LoginForm = ({ handleSubmit, email, setEmail, password, setPword }) => {
	return (
		<form onSubmit={handleSubmit} className='mt-3'>
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
					value={password}
					onChange={(e) => setPword(e.target.value)}
					placeholder='Enter Password'
				/>
			</div>
			<button disabled={!email || !password} className='btn btn-primary' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default LoginForm;
