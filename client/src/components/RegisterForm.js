import React from 'react';

const RegisterForm = ({ handleSubmit, name, setName, email, setEmail, password, setPword }) => {
	return (
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
					value={password}
					onChange={(e) => setPword(e.target.value)}
					placeholder='Enter Password'
				/>
			</div>
			<button className='btn btn-primary' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default RegisterForm;
