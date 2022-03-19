import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "./src/Components";

import { QueryClient, QueryClientProvider } from "react-query";

import AppNavContainer from "./src/Navigation";
import Toast from "react-native-toast-message";

const queryClient = new QueryClient();

const App = () => {
	return (
		<PaperProvider>
			<QueryClientProvider client={queryClient}>
				<Provider>
					<AppNavContainer />
					<Toast />
				</Provider>
			</QueryClientProvider>
		</PaperProvider>
	);
};

export default App;
