import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

describe('Navigation Component', () => {
	const wrapper = shallow(<Navigation rows={5} cols={5} x={2} y={4} direction="NORTH" />);
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should exist Box Component', () => {
		expect(wrapper.exists(NavLink)).toBeTruthy();
	});
});
