const gridLines = [
	{
		gridLines: { zeroLineColor: '#EEEEEE', zeroLineWidth: 1, lineWidth: 2, borderDash: [ 2, 5 ] },
		ticks: {
			beginAtZero: true,
			fontColor: '#666666',
			fontSize: 14
		},
		scaleLabel: {
			display: true,
			lineHeight: 3,
			labelString: 'Values',
			fontSize: 25,
			fontColor: '#563D7C'
		}
	}
];

export const options = {
	scales: {
		xAxes: gridLines,
		yAxes: gridLines
    },
    legend: {
        display: false
     },
	tooltips: {
		yAlign: 'bottom',
		displayColors: false,
		backgroundColor: 'rgba(0,122,92, 0.8)'
	}
};

export const dataSetsConfig = {
	label: 'Data',
	fill: false,
    pointBackgroundColor: '#FF550B',
    pointHoverBackgroundColor: '#FFFFFF',
    pointBorderWidth: 3,
	borderColor: '#FF550B',
	borderWidth: 3
};
