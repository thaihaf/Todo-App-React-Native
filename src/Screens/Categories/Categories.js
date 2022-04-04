import React, { useContext } from "react";
import { useState } from "react";
import {
	FlatList,
	KeyboardAvoidingView,
	SafeAreaView,
	View,
} from "react-native";
import styles from "./style";
import { Category, Header, MenuActions, MyLoader } from "../../Components";
import NavigationStrings from "../../Contants/NavigationStrings";
import { useQuery } from "react-query";
import Context from "../../Helpers/Context";
import { getCollections } from "../../Ultils/collectionApi";

const CategoriesList = ({ navigation, route }) => {
	const context = useContext(Context);
	const [linkApi, setLinkApi] = useState("api/categories?limit=4&page=1");

	const { isLoading, data, error } = useQuery(
		["categories", context.user.token, linkApi],
		async () => getCollections(linkApi)
	);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header
				title={NavigationStrings.HEADER_TEXT}
				buttonLeft={{
					icon: "subject",
					handlePress: () => navigation.openDrawer(),
				}}
			/>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.container}>
					<MyLoader isLoading={isLoading}>
						{data && (
							<FlatList
								data={data.items}
								renderItem={({ item }) => (
									<Category category={item} navigation={navigation} />
								)}
								keyExtractor={(item) => `${item.id}`}
							/>
						)}

					</MyLoader>

					<MenuActions
						type={NavigationStrings.CATEGORIES}
						onSetLinkApi={setLinkApi}
					/>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default CategoriesList;
