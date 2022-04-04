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
import { Task, Header, TaskHidden, Search, Pagination, MyLoader, MenuActions } from "../../Components";
import NavigationStrings from "../../Contants/NavigationStrings";
import Context from "../../Helpers/Context";
import { useQuery } from "react-query";
import { SwipeListView } from "react-native-swipe-list-view";
import { getTasks } from "../../Ultils/taskApi";

const Tasks = ({ navigation, route }) => {
	const context = useContext(Context);
	const [linkApi, setLinkApi] = useState("api/tasks?limit=4&page=1");

	const { isLoading, data, error, refetch } = useQuery(
		["tasks", context.user.token, linkApi],
		async () => getTasks(linkApi)
	);

	useEffect(() => {
		if (route.params && route.params.refetch) {
			if (linkApi === "api/tasks?limit=4&page=1") {
				console.log("1");
				refetch() 
			} else {
				console.log("2");
				setLinkApi("api/tasks?limit=4&page=1");
			}
		}
	}, [route.params])

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
						<MyLoader isLoading={isLoading}>
							{data &&
								<>
									<SwipeListView
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
									/>

									<Pagination data={data} onSetLinkApi={setLinkApi} />
								</>
							}
						</MyLoader>

						<MenuActions
							type={NavigationStrings.TASKS}
							onSetLinkApi={setLinkApi}
							navigation={navigation}
						/>
					</View>
				</KeyboardAvoidingView>
			</SafeAreaView >
		</TouchableWithoutFeedback >
	);
};

export default Tasks;
