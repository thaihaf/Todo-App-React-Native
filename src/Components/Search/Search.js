//import liraries
import React, { memo, useRef, useState } from 'react';
import { View, } from 'react-native';
import ColorCode from '../../Contants/ColorCode';
import CustomButton from '../CustomeButton/CustomeButton';
import CustomInput from '../CustomInput/CustomInput';
import styles from './style';

const Search = ({ onSetLinkApi, name }) => {
	const [searchBarVisible, setSearchBarVisible] = useState(false);
	const [searchVal, setSearchVal] = useState("");

	const typeingTimeoutRef = useRef(null);

	const handleSearch = (value) => {
		setSearchVal(value)

		if (typeingTimeoutRef.current) {
			clearTimeout(typeingTimeoutRef.current);
		}

		typeingTimeoutRef.current = setTimeout(async () => {
			onSetLinkApi(`api/${name}?limit=4&page=1&search=${value}`);
		}, 1000);
	};

	return (
		<>
			<CustomButton
				style={[
					styles.btnAction,
					styles.btnActionSmall,
					styles.searchBtn,
				]}
				onPress={() => setSearchBarVisible(true)}
				iconPos="right"
				icon="search"
			/>

			{searchBarVisible &&
				<View style={styles.searchBar}>
					<CustomInput
						style={styles.searchInput}
						onChangeText={(value) => handleSearch(value)}
						value={searchVal}
						autoFocus={true}
						placeholder="Search"
						placeholderTextColor={ColorCode.appText}
					/>
					<CustomButton
						style={[styles.searchBtn, styles.btnAction]}
						onPress={() => setSearchBarVisible(false)}
						iconPos="left"
						icon="close"
					/>
				</View>
			}
		</>
	);
};


export default memo(Search);
