import React from 'react';
import { ROUTES } from 'routes/routeConfig';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ routes }) => {
	const getNavList = (route, i) => {
		let navItems = '';

		if (route.key !== 'notFound') {
			navItems = (
				<li key={i} className="nav-item">
					<NavLink className="nav-link p-3" to={route.path} exact={route.exact}>
						{route.label}
					</NavLink>
				</li>
			);
		}
		return navItems;
	};
	return (
		<ul className="nav justify-content-end">
			{ROUTES.map((route, i) => {
				return getNavList(route, i);
			})}
		</ul>
	);
};

export default Navigation;
