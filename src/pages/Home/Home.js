import React from 'react';
import MainLayout from 'components/hoc/Layout';
import PageHeading from 'components/pageHeading/PageHeading';
import TimeSeries from 'containers/timeSeries/TimeSeries';

const Home = () => {
	return (
		<MainLayout>
			<PageHeading title="Time Series Dashboard" />
			<div className="pt-4">
				<TimeSeries />
			</div>
		</MainLayout>
	);
};
export default Home;
