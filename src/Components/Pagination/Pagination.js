//import liraries
import React, { useEffect, useRef, useState } from 'react';
import { View, } from 'react-native';
import NavigationStrings from '../../Contants/NavigationStrings';
import CustomeButton from '../CustomeButton/CustomeButton';
import CustomInput from '../CustomInput/CustomInput';

import styles from './style'

const Pagination = ({ data, onSetLinkApi, currentApi }) => {
	let [currentPage, setCurrentPage] = useState(data.meta.currentPage);
	const [freeze, setFreeze] = useState(false);

	const handleChange = async (link, value) => {
		setFreeze(true);
		setCurrentPage(value);

		let api = link.substring(link.lastIndexOf("/api"));
		if (currentApi.includes("search")) {
			const searchVal = currentApi.substring(currentApi.lastIndexOf("search") + 7);
			api += `&search=${searchVal}`;
		}
		onSetLinkApi(api)
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

	useEffect(() => {
		if (freeze) {
			setTimeout(() => {
				setFreeze(false)
			}, 2000);
		}
	}, [freeze])

	useEffect(() => {
		setCurrentPage(data.meta.currentPage);
	}, [data.meta.currentPage])

	return (
		<View style={[
			styles.paging__list,
			data.meta.totalPages === 0 && { display: 'none' }
		]}>
			<CustomeButton
				style={[
					styles.paging__item,
					styles.paging__chevron,
				]}
				onPress={() => previousBtn(data.links.previous)}
				disabled={data.links.previous == null || freeze}
				icon={"chevron-back"}
				iconPos={"right"}
				iconStyle={[
					styles.paging__icon_active,
					(data.links.previous == null || freeze) && styles.paging__icon_disabled
				]}
			/>
			<CustomeButton
				style={[
					styles.paging__item,
					currentPage === 1 && styles.paging__item_active,
					freeze && styles.paging__item_disabled,
				]}
				text={"1"}
				onPress={() => numberBtn(data.links.first, 1)}
				disabled={currentPage === 1}
				textStyle={freeze && styles.paging__item_disabled}
			/>

			{
				data.meta.totalPages > 2 &&
				((currentPage > 1 && currentPage < data.meta.totalPages) ?
					(
						<CustomInput
							style={[
								styles.paging__input,
								styles.paging__item_active,
								freeze && styles.paging__item_disabled,
							]}
							value={`${currentPage}`}
							editable={false}
						/>
					)
					: (
						<CustomeButton
							style={[
								styles.paging__item,
							]}
							text={"..."}
							textStyle={styles.paging__icon_disabled}
							disabled={true}
						/>
					))
			}

			{data.meta.totalPages > 1 &&
				<CustomeButton
					style={[
						styles.paging__item,
						currentPage === data.meta.totalPages && styles.paging__item_active,
						freeze && styles.paging__item_disabled,
					]}
					onPress={() => numberBtn(data.links.last, data.meta.totalPages)}
					disabled={(currentPage === data.meta.totalPages || freeze)}
					text={data.meta ? `${data.meta.totalPages}` : ""}
					textStyle={freeze && styles.paging__item_disabled}
				/>
			}
			<CustomeButton
				style={[
					styles.paging__item,
					styles.paging__chevron,
				]}
				onPress={() => nextBtn(data.links.next)}
				disabled={(data.links.next == null || freeze)}
				icon={"chevron-forward"}
				iconPos={"right"}
				iconStyle={[
					styles.paging__icon_active,
					(data.links.next == null || freeze) && styles.paging__icon_disabled
				]}
			/>
		</View>
	);
};


export default Pagination;
