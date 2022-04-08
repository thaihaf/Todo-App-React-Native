import React, { useState } from "react";
import Context from "../../Helpers/Context";


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
