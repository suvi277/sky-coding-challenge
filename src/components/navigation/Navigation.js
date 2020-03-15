import React from 'react';
import { ROUTES } from 'routes/routeConfig';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ routes }) => {
	return (
		<ul className="nav justify-content-end">
			{ROUTES.map((route, i) => {
				return (
					<li key={i} className="nav-item">
						<NavLink className="nav-link p-3" to={route.path} exact={route.exact}>
							{route.key}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

export default Navigation;
