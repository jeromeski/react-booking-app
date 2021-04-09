import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './booking/Home';
import TopNav from './components/TopNav';

import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './user/Dashboard';

const App = () => {
	return (
		<BrowserRouter>
			<TopNav />
			<ToastContainer />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
