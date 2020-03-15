import React from 'react';
import { shallow } from 'enzyme';
import Streams from './Streams';
import VideoStreams from 'containers/videoStreams/VideoStreams';

describe('Streams Component', () => {
	const wrapper = shallow(<Streams />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should exist MainLayout Component', () => {
		expect(wrapper.find('MainLayout')).toHaveLength(1);
	});

	it('should exist PageHeading Component', () => {
		expect(wrapper.find('PageHeading')).toHaveLength(1);
	});

	it('should exist VideoStreams Component', () => {
		expect(wrapper.exists(VideoStreams)).toBeTruthy();
	});
});
