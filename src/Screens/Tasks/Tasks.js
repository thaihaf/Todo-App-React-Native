import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	SafeAreaView,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import styles from "./style";
import { Button, Task, Header, TaskHidden, Search, Pagination } from "../../Components";
import NavigationStrings from "../../Contants/NavigationStrings";
import SkeletonContent from "react-native-skeleton-content";
import Context from "../../Helpers/Context";
import { useQuery } from "react-query";
import { getTasks } from "../../Ultils/API/taskApi";
import IconStrings from "../../Contants/IconStrings";
import { SwipeListView } from "react-native-swipe-list-view";

const Tasks = ({ navigation, route }) => {
	const context = useContext(Context);
	const [openMenuActions, setOpenMenuActions] = useState(false);
	const [openSearchBar, setOpenSearchBar] = useState(false);

	const firstRequest = useRef(true);

	const { isLoading, isError, data, error, refetch } = useQuery(
		["tasks", context.user.token],
		async () => {
			const linkApi = (route.params && route.params.linkApi)
				? route.params.linkApi
				: "api/tasks?limit=4&page=1";

			const res = await getTasks(linkApi, firstRequest.current);
			firstRequest.current = false;

			return res;
		}
	);


	useEffect(() => {
		if (route.params && route.params.refetch) {
			refetch()
		}
	}, [route])

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={{ flex: 1 }}>
				<Header
					title={NavigationStrings.HEADER_TEXT}
					buttonLeft={{
						icon: "subject",
						name: "",
						handlePress: () => navigation.openDrawer(),
					}}
				/>

				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<View style={styles.container}>
						<SkeletonContent
							containerStyle={{ flex: 1, width: "100%", paddingHorizontal: 20 }}
							isLoading={isLoading}
							layout={[
								{ key: "1", width: "100%", height: 110, marginBottom: 10, borderRadius: 25, },
								{ key: "2", width: "100%", height: 110, marginBottom: 10, borderRadius: 25, },
								{ key: "3", width: "100%", height: 110, marginBottom: 10, borderRadius: 25, },
								{ key: "4", width: "100%", height: 110, marginBottom: 10, borderRadius: 25, }
							]}
						>
							{data && <SwipeListView
								data={data.items}
								renderItem={(data, rowMap) =>
									<Task
										key={data.item.id}
										task={data.item}
										navigation={navigation} />
								}
								renderHiddenItem={(data, rowMap) =>
									<TaskHidden
										key={data.item.id}
										task={data.item}
										navigation={navigation} />
								}

								leftOpenValue={75}
								rightOpenValue={-75}

							/>}

							{data && <Pagination data={data} navigation={navigation} />}

							<View style={styles.menuActions}>
								{openMenuActions && (
									<View style={{ flexDirection: "row" }}>
										<Button
											style={[styles.btnAction, styles.btnActionSmall, styles.editBtn]}
											onPress={
												() =>
													navigation.navigate(NavigationStrings.TASK_ACTIONS,
														{
															type: "create",
															caption: "Create Task"
														})}
											iconPos="right"
											icon="add"
										/>
										<Button
											style={[
												styles.btnAction,
												styles.btnActionSmall,
												styles.searchBtn,
											]}
											onPress={() => {
												setOpenSearchBar(true);
												setOpenMenuActions(false);
											}}
											iconPos="right"
											icon="search"
										/>
									</View>
								)}

								<Button
									style={[styles.btnAction]}
									onPress={() => setOpenMenuActions(!openMenuActions)}
									iconPos="left"
									icon={IconStrings.icDot}
								/>
							</View>

							{openSearchBar &&
								<Search
									actionClose={setOpenSearchBar}
									navigation={navigation}
									data={{
										key: NavigationStrings.TASKS,
										name: "tasks"
									}}
								/>
							}

						</SkeletonContent>
					</View>
				</KeyboardAvoidingView>
			</SafeAreaView >
		</TouchableWithoutFeedback >
	);
};

export default Tasks;
