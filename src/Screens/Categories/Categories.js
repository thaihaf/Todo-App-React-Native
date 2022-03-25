import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import {
	FlatList,
	KeyboardAvoidingView,
	SafeAreaView,
	View,
} from "react-native";
import styles from "./style";
import { Button, Category, Header, MyLoader, Search } from "../../Components";
import NavigationStrings from "../../Contants/NavigationStrings";
import IconStrings from "../../Contants/IconStrings";
import { useQuery } from "react-query";
import { getCollections } from "../../Ultils/API/collectionsApi";
import Context from "../../Helpers/Context";

const CategoriesList = ({ navigation, route }) => {
	const context = useContext(Context);
	const [openSearchBar, setOpenSearchBar] = useState(false);

	const firstRequest = useRef(true);

	const { isLoading, isError, data, error, refetch } = useQuery(
		["categories", context.user.token],
		async () => {
			const linkApi = (route.params && route.params.linkApi)
				? route.params.linkApi
				: "api/categories?limit=4&page=1";

			const res = await getCollections(linkApi, firstRequest.current)
			firstRequest.current = false;

			return res
		},
	);

	useEffect(() => {
		if (route.params && route.params.refetch) {
			refetch()
		}
	}, [route])

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

						{openSearchBar ? (
							<Search
								actionClose={setOpenSearchBar}
								navigation={navigation}
								data={{
									key: NavigationStrings.CATEGORIES,
									name: "categories"
								}}
							/>
						) : (
							<Button
								style={styles.searchBtn}
								onPress={() => setOpenSearchBar(true)}
								iconPos="left"
								icon={IconStrings.icSearch}
							/>
						)}
					</MyLoader>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default CategoriesList;
