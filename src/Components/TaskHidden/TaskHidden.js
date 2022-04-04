import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { useMutation } from 'react-query';
import ColorCode from '../../Contants/ColorCode';
import NavigationStrings from '../../Contants/NavigationStrings';
import Toast from "react-native-toast-message";
import styles from './style';
import { deleteTask } from '../../Ultils/taskApi';

const TaskHidden = ({ task, navigation }) => {
	const mutation = useMutation(
		deleteTask,
		{
			onSuccess: (data) => {
				navigation.navigate(NavigationStrings.TASKS, { refetch: true })

				Toast.show({
					type: "success",
					text1: "Delete Task Success! 👋",
					text2: "Hello",
					visibilityTime: 5000,
				});
			},
			onError: (error) => {
				Toast.show({
					type: "error",
					text1: error.response.data.message,
					text2: `Delete failed`,
					visibilityTime: 5000,
				});
			},
		});

	const handleUpdateTask = () => {
		const getListCateIds = () => task.categories.map((item) => {
			return item.id
		})

		navigation.navigate(NavigationStrings.TASK_ACTIONS,
			{
				type: "update",
				caption: "Update Task",
				taskId: task.id,
				taskTitle: task.title,
				listCategories: getListCateIds()
			})
	}

	const handleDeleteTask = () => {
		Alert.alert("Delete Task",
			`Chắc chắn xoá "${task.title}" ?`,
			[
				{
					text: "Delete",
					onPress: () => mutation.mutate(task.id)
				},
				{
					text: "Cancel"
				},
			], { cancelable: false }
		)

	}

	return (
		<View style={styles.hiddenActions}>
			<TouchableOpacity
				style={styles.hiddenAction}
				onPress={() => handleUpdateTask()}
			>
				<MaterialIcons
					name="drive-file-rename-outline"
					size={41}
					color={ColorCode.appText}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.hiddenAction}
				onPress={() => handleDeleteTask()}
			>
				<MaterialIcons
					name="delete"
					size={41}
					color={ColorCode.appText}
				/>
			</TouchableOpacity>
		</View >
	);
};


export default TaskHidden;
