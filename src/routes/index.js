import React from 'react';
import { Switch, Route } from 'react-router';
import '../_shared/styles/main.scss';
import { ROUTES } from './routeConfig';

function Routes() {
	return (
		<Switch>
			{ROUTES.map((route) => {
				return <Route {...route} />;
			})}
		</Switch>
	);
}

export default Routes;
