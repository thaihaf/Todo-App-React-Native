import React from "react";
import ReactDOM from "react-dom";

import ContentLoader, { Rect, Circle } from 'react-content-loader/native'
import { Text, View } from "react-native";

const MyLoader = ({ children, isLoading }) => {
	const GetContent = () =>
		isLoading ? (
				<ContentLoader
					speed={1}
					backgroundColor={'#333'}
					viewBox="0 30 550 70"
				>
					<Circle cx="30" cy="30" r="30" />
					<Rect x="80" y="12" rx="4" ry="4" width="100%" height="17" />
					<Rect x="80" y="40" rx="3" ry="3" width="35%" height="12" />

					<Circle cx="30" cy="120" r="30" />
					<Rect x="80" y="102" rx="4" ry="4" width="100%" height="17" />
					<Rect x="80" y="130" rx="3" ry="3" width="35%" height="12" />

					<Circle cx="30" cy="210" r="30" />
					<Rect x="80" y="192" rx="4" ry="4" width="100%" height="17" />
					<Rect x="80" y="220" rx="3" ry="3" width="35%" height="12" />
					
					<Circle cx="30" cy="300" r="30" />
					<Rect x="80" y="282" rx="4" ry="4" width="100%" height="17" />
					<Rect x="80" y="310" rx="3" ry="3" width="35%" height="12" />
				</ContentLoader>
		) : (
			<>{children}</>
		)

	return <GetContent />
};

export default MyLoader;
