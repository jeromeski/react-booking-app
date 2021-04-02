import React, { Fragment, useState } from 'react';
import axios from 'axios';
import RegisterForm from '../components/RegisterForm';


const Register = () => {
	// create state for name, email and pw
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPword] = useState('');

	// create handleSubmit fn
	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.table({ name, email, pword });
		try {
      const res = await axios.post('http://localhost:8000/api/register', {
				name,
				email,
				password
			});
			console.log('REGISTER USER → ', res);
    } catch (err) {
      console.log(err);
    }
	};
	return (
		<Fragment>
			<div className='container-fluid p-5 bg-secondary text-center'>
				<h1>Register Page</h1>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 offset-md-3'>
						<RegisterForm
							handleSubmit={handleSubmit}
							name={name}
							setName={setName}
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

export default Register;
