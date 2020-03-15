import React from 'react';
import { VideoStreams } from './VideoStreams';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('VideoStreams Container', () => {
	let wrapper;

	it('renders as expected', () => {
		const props = {
			streamData: {
				isLoaded: false,
				content: []
			},
			fetchStreamData: jest.fn()
		};
		const tree = renderer.create(<VideoStreams {...props} />);
		//TODO : to fix this
		//expect(tree.toJSON()).toMatchSnapshot();
	});

	it('render Placeholder component when time series data is not loaded', () => {
		const props = {
			streamData: {
				isLoaded: false,
				data: []
			},
			fetchStreamData: jest.fn()
		};
		wrapper = shallow(<VideoStreams {...props} />);
		const Placeholder = wrapper.find('Placeholder');
		expect(Placeholder.length).toBeTruthy();
	});

	it('render StreamCard component when time series data is loaded', () => {
		const mockStreamData = [
			{
				name: 'some name'
			}
		];

		const props = {
			streamData: {
				isLoaded: true,
				content: mockStreamData
			},
			fetchStreamData: jest.fn()
		};

		wrapper = shallow(<VideoStreams {...props} />);

		const StreamCard = wrapper.find('StreamCard');

		expect(StreamCard.length).toBe(1);
	});
});
