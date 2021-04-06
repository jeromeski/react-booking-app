import React, { Fragment, useState } from 'react';
import axios from 'axios';
import RegisterForm from '../components/RegisterForm';
import { toast } from 'react-toastify';
import { register } from '../actions/auth';



const Register = ({history}) => {
	// create state for name, email and pw
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPword] = useState('');

	// create handleSubmit fn
	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.table({ name, email, pword });
		try {
      const res = await register();
			console.log('REGISTER USER → ', res);
      history.push('/login');
      toast.success('Register success! Please login');
    } catch (err) {
      if (err.response.status === 400) toast.error(err.response.data);
    }
    console.log(process.env.REACT_APP_API);
	};
  console.log(process.env.REACT_APP_API)
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
