//import liraries
import React, { Component, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';
import ColorCode from '../../Contants/ColorCode';
import NavigationStrings from '../../Contants/NavigationStrings';
import Button from '../Button/Button';
import TextInput from '../Input/Input';
import styles from './style';


const Search = ({ actionClose, navigation, data }) => {
	const [searchVal, setSearchVal] = useState("");

	const typeingTimeoutRef = useRef(null);

	const handleSearch = (value) => {
		setSearchVal(value)
		
		if (typeingTimeoutRef.current) {
			clearTimeout(typeingTimeoutRef.current);
		}
		
		typeingTimeoutRef.current = setTimeout(async () => {
			navigation.navigate(data.key,
				{
					refetch: true,
					linkApi: `api/${data.name}?limit=4&page=1&search=${value}`
				})
		}, 1000);
	};

	return (
		<View style={styles.searchBar}>
			<TextInput
				style={styles.searchInput}
				onChangeText={(value) => handleSearch(value)}
				value={searchVal}
				autoFocus={true}
				placeholder="Search"
				placeholderTextColor={ColorCode.appText}
			/>
			<Button
				style={[styles.searchBtn, styles.btnAction]}
				onPress={() => actionClose(false)}
				iconPos="left"
				icon="close"
			/>
		</View>
	);
};


export default Search;
