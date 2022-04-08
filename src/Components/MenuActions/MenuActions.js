import React, { Component, memo, useCallback, useState } from 'react';

import IconStrings from '../../Contants/IconStrings';
import NavigationStrings from '../../Contants/NavigationStrings';

import Toast from "react-native-toast-message";
import Button from '../CustomeButton/CustomeButton';
import Search from '../Search/Search';
import { View, Text, StyleSheet } from 'react-native';

import styles from "./style";


const MenuActions = ({ type, onSetLinkApi, navigation }) => {
	const [menuVisible, setMenuVisible] = useState(false);

	const handleOpenCreateBar = () => {
		navigation.navigate(NavigationStrings.TASK_ACTIONS,
			{
				type: "create",
				caption: "Create Task"
			})
	}

	return (
		<>
			<View style={styles.menuActions}>
				{menuVisible && (
					<>
						<Search
							onSetLinkApi={onSetLinkApi}
							name={type.toLowerCase()}
						/>
						{type === NavigationStrings.TASKS &&
							<Button
								style={[styles.btnAction, styles.btnActionSmall, styles.editBtn]}
								onPress={handleOpenCreateBar}
								iconPos="right"
								icon="add"
							/>}
					</>
				)}

				<Button
					style={[styles.btnAction]}
					onPress={() => setMenuVisible(!menuVisible)}
					iconPos="left"
					icon={IconStrings.icDot}
				/>
			</View>
		</>
	);
};

export default memo(MenuActions);
