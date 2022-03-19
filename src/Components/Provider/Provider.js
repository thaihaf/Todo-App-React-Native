import React, { useEffect, useState } from "react";
import Context from "../../Helpers/Context";
import * as SecureStore from 'expo-secure-store';
import { getUser } from "../../Ultils/API/userApi"
import { useMutation, useQuery } from "react-query";
import Toast from "react-native-toast-message";
import RNRestart from 'react-native-restart';


export default function Provider({ children }) {
	const [user, setUser] = useState({})

	const updateUser = (data) => {
		setUser(data);
	};

	return (
		<Context.Provider value=
			{{
				user: user,
				updateUser: updateUser
			}}>
			{children}
		</Context.Provider >
	);
}
