import React, { Fragment, useState } from 'react';

const Register = () => {
  // create state for name, email and pw
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pword, setPword] = useState('');

  // create an fn component for form
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <button type='submit'>Submit</button>
    </form>
  )
  // create handleSubmit fn
  const handleSubmit = () => {
    alert('Submit Clicked')
  }
	return (
		<Fragment>
			<div className='container-fluid p-5 bg-secondary text-center'>
				<h1>Register Page</h1>
			</div>
			<div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {registerForm()}
          </div>
        </div>
      </div>
		</Fragment>
	);
};

export default Register;
