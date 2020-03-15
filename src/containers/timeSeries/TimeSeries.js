import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTimeSeries } from 'actions';
import Loader from 'components/loader/Loader';
import Chart from 'components/chart/Chart';
import Aux from 'components/hoc/Aux';
import moment from 'moment';

class TimeSeries extends Component {
	componentDidMount() {
		this.props.fetchTimeSeries();
		this.prepareChartData();
	}

	prepareChartData() {
		const { data } = this.props.timeSeries;
		let day;

		let labels = '',
			lineData = '';

		if (data.length) {
			lineData = data.map((time) => time.value);
			labels = data.map((time) => {
				const date = moment(new Date(time.timestamp));
				day = date.format('LL');
				return date.format('mm:ss a');
			});
		}

		return { labels, lineData, day };
	}

	render() {
		const { isLoaded } = this.props.timeSeries;
		return (
			<Aux>
				{!isLoaded && <Loader />}
				{isLoaded && <Chart {...this.prepareChartData()} />}
			</Aux>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTimeSeries: () => dispatch(fetchTimeSeries())
	};
};

export default connect(({ timeSeries }) => ({ timeSeries }), mapDispatchToProps)(TimeSeries);
