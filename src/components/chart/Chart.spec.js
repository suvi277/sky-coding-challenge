import React from 'react';
import { shallow } from 'enzyme';
import Chart from './Chart';
import { Line as LineChart } from 'react-chartjs-2';

describe('Navigation Component', () => {
	const props = {
		labels: [],
		lineData: [],
		day: ''
	};

	const wrapper = shallow(<Chart {...props} />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should exist Navigation Component', () => {
		expect(wrapper.exists(LineChart)).toBeTruthy();
	});
});
