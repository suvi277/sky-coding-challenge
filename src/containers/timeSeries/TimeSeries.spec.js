import React from 'react';
import { TimeSeries } from './TimeSeries';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import moment from 'moment';

describe('TimeSeries Container', () => {
	let wrapper;

	describe('when renders', () => {
		let props, tree;

		beforeEach(() => {
			props = {
				timeSeries: {
					isLoaded: false,
					data: []
				},
				fetchTimeSeries: jest.fn()
			};
			tree = renderer.create(<TimeSeries {...props} />);
		});

		it('renders as expected', () => {
			expect(tree.toJSON()).toMatchSnapshot();
		});

		it('should call fetchTimeSeries', () => {
			expect(props.fetchTimeSeries).toBeCalled();
		});
	});

	it('render Loader component when time series data is not loaded', () => {
		const props = {
			timeSeries: {
				isLoaded: false,
				data: []
			},
			fetchTimeSeries: jest.fn()
		};
		wrapper = shallow(<TimeSeries {...props} />);
		const Loader = wrapper.find('Loader');
		expect(Loader.length).toBe(1);
	});

	it('render Chart component when time series data is loaded', () => {
		const mockTimeData = [
			{
				timestamp: 1458000000,
				value: 63.422235
			}
		];

		const props = {
			timeSeries: {
				isLoaded: true,
				data: mockTimeData
			},
			fetchTimeSeries: jest.fn()
		};

		wrapper = shallow(<TimeSeries {...props} />);

		const Chart = wrapper.find('Chart');

		const date = moment(new Date(mockTimeData[0].timestamp));
		const day = date.format('LL');
		const labels = [ date.format('mm:ss a') ],
			lineData = [ mockTimeData[0].value ];

		expect(Chart.length).toBe(1);
		expect(Chart.props()).toStrictEqual({ labels, lineData, day });
	});
});
