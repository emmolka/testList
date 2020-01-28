import React, { useState, useEffect } from 'react';

import ListItem from '../../components/list-item';
import axios from 'axios';
import {
	StyledFlatList,
	StyledSafeAreaView,
	MainWrapper,
	StyledTouchableOpacity,
	StyledRow,
	StyledText
} from './styles';

const fetchList = async (setItems, setIsLoading, setError) => {
	try {
		setIsLoading(true);
		const { data } = await axios.get('https://picsum.photos/v2/list');
		console.log(data);
		setItems(data);
	} catch (e) {
		console.log(e.message);
	} finally {
		setIsLoading(false);
	}
};

const ListItems = () => {
	const [ items, setItems ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(() => {
		fetchList(setItems, setIsLoading);
	}, []);

	const sortItemsById = () => {
		const sortedList = [ ...items.sort((a, b) => a.id - b.id) ];
		setItems(sortedList);
	};
	const sortItemsByAuthor = () => {
		const sortedList = [ ...items.sort((a, b) => a.author.localeCompare(b.author)) ];
		setItems(sortedList);
	};
	return (
		<MainWrapper>
			<StyledSafeAreaView>
				<StyledFlatList
					data={items}
					renderItem={(item) => (
						<ListItem
							download_url={item.item.download_url}
							url={item.item.url}
							id={item.item.id}
							author={item.item.author}
						/>
					)}
					// keyExtractor={(item) => item.item.id}
				/>
			</StyledSafeAreaView>
			<StyledRow>
				<StyledTouchableOpacity onPress={() => fetchList(setItems, setIsLoading)}>
					<StyledText>Refresh list</StyledText>
				</StyledTouchableOpacity>
				<StyledTouchableOpacity onPress={() => sortItemsByAuthor()}>
					<StyledText>Sort by author</StyledText>
				</StyledTouchableOpacity>
				<StyledTouchableOpacity onPress={() => sortItemsById()}>
					<StyledText>Sort by id</StyledText>
				</StyledTouchableOpacity>
			</StyledRow>
		</MainWrapper>
	);
};

export default ListItems;
