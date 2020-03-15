import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreamData } from 'actions';
import StreamCard from 'components/streamCard/StreamCard';
import Placeholder from 'components/placeholder/Placeholder';
import Aux from 'components/hoc/Aux';
import FadeIn from 'react-fade-in';

export class VideoStreams extends Component {
	componentDidMount() {
		this.props.fetchStreamData();
	}

	render() {
		const { isLoaded, content } = this.props.streamData;
		return (
			<Aux>
				{!isLoaded ? (
					<div className="d-flex flex-wrap">{[ ...Array(12) ].map((x, i) => <Placeholder key={i} />)}</div>
				) : (
					<FadeIn>
						<div className="d-flex flex-wrap">
							{content.map((item, i) => <StreamCard key={i} {...item} />)}
						</div>
					</FadeIn>
				)}
			</Aux>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchStreamData: () => dispatch(fetchStreamData())
	};
};

export default connect(({ streamData }) => ({ streamData }), mapDispatchToProps)(VideoStreams);
