//import liraries
import React, { useEffect, useRef, useState } from 'react';
import { View, } from 'react-native';
import NavigationStrings from '../../Contants/NavigationStrings';
import CustomeButton from '../CustomeButton/CustomeButton';
import CustomInput from '../CustomInput/CustomInput';

import styles from './style'

const Pagination = ({ data, onSetLinkApi }) => {
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

				onSetLinkApi(linkApi)

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

	// useEffect(() => {
	// 	return () => {
	// 		// isApiSubscribed = false;
	// 	};
	// }, [])


	return (
		<View style={[styles.paging__list, data.meta.totalPages === 0 && { display: 'none' }]}>
			<CustomeButton
				style={[
					styles.paging__item,
					styles.paging__chevron,
					data.links.previous == null && styles.paging__item_disabled,
					!val && styles.paging__item_disabled,
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
			<CustomeButton
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
					<CustomInput
						style={[
							styles.paging__input,
							styles.paging__item_active,
							data.meta.totalPages === 1 && styles.paging__item_hidden,
						]}
						value={`${currentPage}`}
						editable={false}
					/>
				)
				: (
					<CustomeButton
						style={[
							styles.paging__item,
							data.meta.totalPages === 1 && styles.paging__item_hidden,
							!val && styles.paging__item_disabled,

						]}
						text={"..."}
						textStyle={styles.paging__icon_disabled}
						disabled={true}
					/>
				)
			}

			<CustomeButton
				style={[
					styles.paging__item,
					currentPage === data.meta.totalPages ? styles.paging__item_active : "",
					data.meta.totalPages === 1 && styles.paging__item_hidden,
				]}
				onPress={() => numberBtn(data.links.last, data.meta.totalPages)}
				text={data.meta ? `${data.meta.totalPages}` : ""}
				textStyle={[!val && styles.paging__item_disabled]}
				disabled={currentPage === data.meta.totalPages}
			/>
			<CustomeButton
				style={[
					styles.paging__item,
					styles.paging__chevron,
					data.links.next == null && styles.paging__item_disabled,
					!val && styles.paging__item_disabled,
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
