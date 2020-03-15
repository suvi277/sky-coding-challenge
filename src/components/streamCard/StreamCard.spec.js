import React from 'react';
import { shallow, mount } from 'enzyme';
import StreamCard from './StreamCard';

describe('StreamCard Component', () => {
	const wrapper = shallow(<StreamCard />);
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should exist card and shadow-lg classname', () => {
		expect(wrapper.find('.card.shadow-lg')).toHaveLength(1);
	});

	it('should insert the prop values to correct places ', () => {
		const props = {
				assetImage: 'Some Asset Image',
				name: 'Some Name',
				skygoTotalViews: 100,
				provider: 'Some provider',
				description: 'Some Description'
			},
			streamCardComp = mount(<StreamCard {...props} />);

		expect(streamCardComp.find('.title').render().text()).toEqual('Some Name');
		expect(streamCardComp.find('.card-img-top').render().attr('src')).toEqual('Some Asset Image');
		expect(streamCardComp.find('.view-number').render().text()).toEqual('100');
		expect(streamCardComp.find('.provider span').render().text()).toEqual('Some provider');
		expect(streamCardComp.find('.desc').render().text()).toEqual('Some Description');
	});
});
