import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import TimeSeries from 'containers/timeSeries/TimeSeries';

describe('Home Component', () => {
	const wrapper = shallow(<Home />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should exist MainLayout Component', () => {
		expect(wrapper.find('MainLayout')).toHaveLength(1);
	});

	it('should exist PageHeading Component', () => {
		expect(wrapper.find('PageHeading')).toHaveLength(1);
	});

	it('should exist TimeSeries Component', () => {
		expect(wrapper.exists(TimeSeries)).toBeTruthy();
	});
});
