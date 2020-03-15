import React from 'react';
import Header from 'components/header/Header';
import Aux from './Aux';

const MainLayout = ({ children }) => {
	return (
		<Aux>
			<Header />
			<main className="container">{children}</main>
		</Aux>
	);
};
export default MainLayout;
