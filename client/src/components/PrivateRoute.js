import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ ...rest }) => {
	const auth = useSelector((state) => state.auth);

	return auth && auth.token ? <Route {...rest} /> : <Redirect to='/login' />;
};

export default PrivateRoute;
