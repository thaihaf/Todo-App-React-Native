//import liraries
import React, { useRef, useState } from 'react';
import { View, } from 'react-native';
import NavigationStrings from '../../Contants/NavigationStrings';
import Button from '../Button/Button';
import TextInput from '../Input/Input';

import styles from './style'

const Pagination = ({ data, navigation }) => {
	let [currentPage, setCurrentPage] = useState(data.meta.currentPage);
	const delayTimeRef = useRef(true);
	const [val, setVal] = useState(true);

	const handleChange = async (link, value) => {
		try {
			if (delayTimeRef.current) {
				setCurrentPage(value);
				delayTimeRef.current = false;
				setVal(false);
				const linkApi = link.substring(link.lastIndexOf("/api"));

				navigation.navigate(NavigationStrings.TASKS, { refetch: true, linkApi: linkApi })

				setTimeout(() => {
					delayTimeRef.current = true;
					setVal(true);
				}, 2000);
			}
		} catch (error) {
			let errForm = error.message;
			//   toast.error(errForm);
		}
	};

	const previousBtn = (link) => {
		if (currentPage > 1) {
			handleChange(link, currentPage - 1);
		}
	};
	const nextBtn = (link) => {
		if (currentPage < data.meta.totalPages) {
			handleChange(link, currentPage + 1);
		}
	};
	const numberBtn = (link, val) => {
		handleChange(link, val);
	};

	return (
		<View style={[styles.paging__list, data.meta.totalPages === 0 && { display: 'none' }]}>
			<Button
				style={[
					styles.paging__item,
					styles.paging__chevron,
					data.links.previous == null && styles.paging__item_disabled,
					!val && styles.paging__item_disabled
				]}
				onPress={() => previousBtn(data.links.previous)}
				disabled={data.links.previous == null && true}
				icon={"chevron-back"}
				iconPos={"right"}
				iconStyle={[
					styles.paging__icon_active,
					data.links.previous == null
					&& styles.paging__icon_disabled
				]}
			/>
			<Button
				style={[
					styles.paging__item,
					currentPage === 1 ? styles.paging__item_active : "",
					!val && styles.paging__item_disabled
				]}
				onPress={() => numberBtn(data.links.first, 1)}
				text={"1"}
				textStyle={[!val && styles.paging__item_disabled]}
				disabled={currentPage === 1}
			/>

			{currentPage > 1 && currentPage < data.meta.totalPages ?
				(
					<TextInput
						style={[
							styles.paging__input,
							styles.paging__item_active,
							data.meta.totalPages === 1 && { display: "none" },
						]}
						value={`${currentPage}`}
						editable={false}
					/>
				)
				: (
					<Button
						style={[
							styles.paging__item,
							data.meta.totalPages === 1 && { display: "none" },
							!val && styles.paging__item_disabled,

						]}
						text={"..."}
						textStyle={styles.paging__icon_disabled}
						disabled={true}
					/>
				)
			}

			<Button
				style={[
					styles.paging__item,
					currentPage === data.meta.totalPages ? styles.paging__item_active : "",
					data.meta.totalPages === 1 && { display: "none" },
				]}
				onPress={() => numberBtn(data.links.last, data.meta.totalPages)}
				text={data.meta ? `${data.meta.totalPages}` : ""}
				textStyle={[!val && styles.paging__item_disabled]}
				disabled={currentPage === data.meta.totalPages}
			/>
			<Button
				style={[
					styles.paging__item,
					styles.paging__chevron,
					data.links.next == null && styles.paging__item_disabled,
					!val && styles.paging__item_disabled
				]}
				onPress={() => nextBtn(data.links.next)}
				disabled={data.links.next == null && true}
				icon={"chevron-forward"}
				iconPos={"right"}
				iconStyle={[
					styles.paging__icon_active,
					data.links.next == null
					&& styles.paging__icon_disabled
				]}
			/>
		</View>
	);
};


export default Pagination;
