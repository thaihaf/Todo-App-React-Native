import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "./src/Components";

import { QueryClient, QueryClientProvider } from "react-query";

import AppNavContainer from "./src/Navigation";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native";

const queryClient = new QueryClient();

const App = () => {
	return (
		<PaperProvider>
			<QueryClientProvider client={queryClient}>
				<Provider>
					<SafeAreaView style={{ flex: 1 }}>
						<AppNavContainer />
						<Toast />
					</SafeAreaView>
				</Provider>
			</QueryClientProvider>
		</PaperProvider>
	);
};

export default App;
