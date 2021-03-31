import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './booking/Home';
import TopNav from './components/TopNav';



const App = () => {
	return (
		<BrowserRouter>
			<TopNav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
