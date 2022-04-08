import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, StyleSheet, Image } from 'react-native';

import ColorCode from '../../Contants/ColorCode';
import ImagePath from '../../Contants/ImagePath';

const SplashScreen = () => {
	return (
		<View style={styles.container}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Image style={{ width: 110, height: 100, }} source={ImagePath.imgLogo} />
				<Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Todo App</Text>
				<LottieView source={ImagePath.jsonSpinner} autoPlay={true} loop={true} style={{ width: 120 }} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: ColorCode.appBackgound
	},
});

export default SplashScreen;
