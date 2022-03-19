//import liraries
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, Modal, ScrollView, Pressable, TouchableOpacity, TouchableWithoutFeedback, Alert, Keyboard } from 'react-native';


import CheckBox from "expo-checkbox";


import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import Toast from "react-native-toast-message";
import SkeletonContent from 'react-native-skeleton-content';
import styles from './style';
import Button from '../Button/Button';
import TextInput from '../Input/Input';
import { getCollections } from '../../Ultils/API/collectionsApi';
import { createTask, updateTask } from '../../Ultils/API/taskApi';
import NavigationStrings from '../../Contants/NavigationStrings';


// create a component
const TaskActions = ({ navigation, route }) => {
	const [listSelections, setListSelections] = useState(
		() => {
			return route.params && route.params.type == "update"
				? route.params.listCategories
				: []
		});

	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();

	useEffect(() => {
		route.params && route.params.type == "update" && setValue("title", route.params.taskTitle);
	}, []);

	const handleClickCb = (id) => {
		if (listSelections.includes(id)) {
			const newArr = listSelections.filter((select) => select !== id);
			setListSelections(newArr);
		} else {
			setListSelections([...listSelections, id]);
		}
	}

	const { isLoading, isError, data, error } = useQuery(
		["categories"],
		async () => {
			return await getCollections("api/categories")
		}
	);
	const mutation = useMutation(
		route.params
			&& route.params.type == "update"
			? updateTask
			: createTask,
		{
			onSuccess: (data) => {
				navigation.navigate(NavigationStrings.TASKS, { refetch: true })

				Toast.show({
					type: "success",
					text1: route.params
						&& route.params.type == "update"
						? "Update Task Success! 👋"
						: "Create Task Success! 👋",
					text2: "Hello",
					visibilityTime: 5000,
				});
			},
			onError: (error) => {
				Toast.show({
					type: "error",
					text1: error.response.data.message,
					text2: `Create failed`,
					visibilityTime: 5000,
				});
			},
		});
	const onSubmit = async (data) => {
		const details = route.params && route.params.type == "update" ?
			{
				id: route.params.taskId,
				data: {
					title: data.title,
					categoryIds: listSelections,
					status: "IN_PROGRESS"
				}
			} : {
				title: data.title,
				categoryIds: listSelections,
			}

		mutation.mutate(details);
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Text style={styles.title}>
					{route.params ? route.params.caption : "Caption"}
				</Text>

				<View style={styles.content}>
					<View style={styles.group}>
						<Text style={styles.caption}>Title</Text>

						<Controller
							name="title"
							defaultValue=""
							control={control}
							rules={{
								required: {
									value: true,
									message: "Title is required",
								},
								minLength: {
									value: 3,
									message: "Title must be at least 3 characters",
								},
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									style={styles.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									error={errors.title}
									errorText={errors.title?.message}
									placeholder="Title"
									placeholderTextColor="#999"
								/>
							)}
						/>


					</View>

					<View style={styles.group}>
						<Text style={styles.caption}>
							{`List Collection - ${listSelections.length} / ${data ? data.items.length : ""}`}
						</Text>

						<ScrollView style={styles.listItems}>
							<SkeletonContent
								containerStyle={{ flex: 1, width: "100%", paddingHorizontal: 10, marginBottom: 20 }}
								isLoading={isLoading}
								layout={[
									{ key: "1", width: "100%", height: 70, marginTop: 10, borderRadius: 15 },
									{ key: "2", width: "100%", height: 70, marginTop: 10, borderRadius: 15 },
									{ key: "3", width: "100%", height: 70, marginTop: 10, borderRadius: 15 },
									{ key: "4", width: "100%", height: 70, marginTop: 10, borderRadius: 15 }
								]}
							>
								{data && data?.items?.map((item) => {
									const checked = listSelections?.find((id) => id === item.id) || false;

									return <TouchableOpacity
										style={[styles.itemDetails,
										checked && styles.CbBorder]}
										key={item.id}
										onPress={() => handleClickCb(item.id)}
									>
										<Ionicons
											name="car-sport-outline"
											size={30}
											color="white"
										/>

										<Text style={styles.itemName}>{item.name}</Text>

										<CheckBox
											value={checked}
											onValueChange={() => handleClickCb(item.id)}
										/>

									</TouchableOpacity>
								})}
							</SkeletonContent>

						</ScrollView>
					</View>

					<View style={[styles.group, styles.groupBtn]}>
						<Button
							style={styles.button}
							onPress={handleSubmit(onSubmit)}
							text={"Submit"}
						/>

						<Button
							style={styles.button}
							onPress={() => navigation.goBack()}
							text={"Cancel"}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default TaskActions;
