import React from 'react';
import ContentLoader from 'react-content-loader';

const Placeholder = () => {
	return (
		<ContentLoader
			height={200}
			width={250}
			speed={2}
			primaryColor="#f3f3f3"
			secondaryColor="#ecebeb"
			style={{ marginBottom: '12px', marginLeft: '15px' }}
		>
			<rect x="0" y="0" rx="5" ry="5" width="100%" height="200" />
		</ContentLoader>
	);
};

export default Placeholder;
