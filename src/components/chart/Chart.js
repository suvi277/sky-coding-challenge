import React from 'react';
import { Line as LineChart } from 'react-chartjs-2';
import { dataSetsConfig, options } from './chartConfig';
import Aux from 'components/hoc/Aux';

const Chart = ({ labels, lineData, day }) => {
	const chartData = {
		labels: labels,
		datasets: [
			{
				...dataSetsConfig,
				data: lineData
			}
		]
	};

	return (
		<Aux>
			<h4 className="text-center">{day}</h4>
			<LineChart data={chartData} options={options} width="600" height="250" />
		</Aux>
	);
};
export default Chart;
