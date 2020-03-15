import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound Component', () => {
	const wrapper = shallow(<NotFound />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should exist MainLayout Component', () => {
		expect(wrapper.find('MainLayout')).toHaveLength(1);
	});

	it('should exist PageHeading Component', () => {
		expect(wrapper.find('PageHeading')).toHaveLength(1);
	});
});
