import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

describe('Navigation Component', () => {
	const mockRouteConfig = [
		{
			path: '/',
			key: 'home',
			label: 'Home',
			exact: true,
			component: () => {}
		},
		{
			path: '/content',
			key: 'streams',
			label: 'Streams',
			component: () => {}
		}
	];
	const wrapper = shallow(<Navigation routes={mockRouteConfig} />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should exist NavLink Component', () => {
		expect(wrapper.exists(NavLink)).toBeTruthy();
	});
	it('should render two nav-item tag', () => {
		expect(wrapper.find('.nav-item')).toHaveLength(2);
	});
});
