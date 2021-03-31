import React, { Fragment, useState } from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
	// create state for name, email and pw
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [pword, setPword] = useState('');

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
					<div className='col-md-6 offset-md-3'>
            <RegisterForm handleSubmit={handleSubmit} name={name} setName={setName} email={email} setEmail={setEmail} pword={pword} setPword={setPword}/>
          </div>
				</div>
			</div>
		</Fragment>
	);
};

export default Register;
