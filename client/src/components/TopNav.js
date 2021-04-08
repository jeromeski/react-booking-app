/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const TopNav = () => {
  // redux hook
	const auth = useSelector((state) => state.auth);
  // redux hook
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    // nullify auth state
    dispatch({
      type: 'LOGOUT',
      payload: null
    })
    // remove auth in local storage
    window.localStorage.removeItem('auth');
    history.push('/login');
  }

  // Conditional rendering for Links based on auth
	return (
		<div className='nav bg-light d-flex justify-content-between'>
			<Link className='nav-link' to='/'>
				Home
			</Link>
			{auth !== null && <a className='nav-link pointer' onClick={logout}>Logout</a>}
			{auth === null && (
				<Fragment>
					<Link className='nav-link' to='/login'>
						Login
					</Link>
					<Link className='nav-link' to='/register'>
						Register
					</Link>
				</Fragment>
			)}
		</div>
	);
};

export default TopNav;
