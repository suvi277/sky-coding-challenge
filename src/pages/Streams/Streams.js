import React from 'react';
import MainLayout from 'components/hoc/Layout';
import PageHeading from 'components/pageHeading/PageHeading';
import VideoStreams from 'containers/videoStreams/VideoStreams';

const Home = () => {
	return (
		<MainLayout>
			<PageHeading title="Video Streams" />
			<VideoStreams />
		</MainLayout>
	);
};
export default Home;