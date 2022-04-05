import React from "react";
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

const MyLoader = ({ children, isLoading }) =>
	isLoading ? (
		<ContentLoader
			speed={1.6}
			backgroundColor={'#333'}
			viewBox="0 30 430 70"
		>
			<Circle cx="60" cy="60" r="60" />
			<Rect x="140" y="40" rx="4" ry="4" width="100%" height="27" />

			<Circle cx="60" cy="220" r="60" />
			<Rect x="140" y="200" rx="4" ry="4" width="100%" height="27" />

			<Circle cx="60" cy="380" r="60" />
			<Rect x="140" y="360" rx="4" ry="4" width="100%" height="27" />

			<Circle cx="60" cy="540" r="60" />
			<Rect x="140" y="520" rx="4" ry="4" width="100%" height="27" />
		</ContentLoader>
	) : (
		<>{children}</>
	)
	;

export default MyLoader;
