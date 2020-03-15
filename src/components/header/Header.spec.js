import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Navigation from 'components/navigation/Navigation';
import Logo from 'components/logo/Logo';

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
	const wrapper = shallow(<Header routes={mockRouteConfig} />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should exist Logo Component', () => {
		expect(wrapper.exists(Logo)).toBeTruthy();
	});
	it('should exist Navigation Component', () => {
		expect(wrapper.exists(Navigation)).toBeTruthy();
	});
	it('should render Navigation Component with routes props', () => {
		const navigation = wrapper.find(Navigation);
		expect(navigation.props().routes).toBe(mockRouteConfig);
	});
});
