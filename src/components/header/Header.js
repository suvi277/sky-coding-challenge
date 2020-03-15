import React from 'react';
import Navigation from 'components/navigation/Navigation';
import Logo from 'components/logo/Logo';

const Header = ({ routes }) => {
	return (
		<header className="sticky-top navbar bg-dark p-0">
			<div className="container">
				<Logo />
				<Navigation routes={routes} />
			</div>
		</header>
	);
};
export default Header;
