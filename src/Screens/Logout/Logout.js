import React, { useContext, useEffect } from 'react';
import Context from '../../Helpers/Context';
import * as SecureStore from 'expo-secure-store';
import { ActivityIndicator } from 'react-native';
import { SplashScreen } from '../../Components';

const Logout = () => {
	const context = useContext(Context);

	const loggoutUser = async () => {
		context.updateUser({})

		await SecureStore.deleteItemAsync("userID")
		await SecureStore.deleteItemAsync("token")

	}

	useEffect(() => { loggoutUser() }, [])

	return <SplashScreen />;

};


export default Logout;
