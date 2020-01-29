import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import ListItem from '../../components/list-item';
import axios from 'axios';
import { StyledFlatList, StyledSafeAreaView, MainWrapper, StyledRow } from './styles';
import Button from '../../components/button';
const fetchList = async (setItems, setIsLoading, setError) => {
	try {
		setIsLoading(true);
		const { data } = await axios.get('https://picsum.photos/v2/list');
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
					renderItem={({ item: { download_url, url, id, author } }) => (
						<ListItem
							download_url={download_url}
							url={url}
							id={id}
							author={author}
							onPress={() => Linking.openURL(`${download_url}`)}
						/>
					)}
					// keyExtractor={(item) => item.item.id}
				/>
			</StyledSafeAreaView>
			<StyledRow>
				<Button onPress={() => fetchList(setItems, setIsLoading)} title={'Refresh list'} />
				<Button onPress={() => sortItemsByAuthor()} title={'Sort by author'} />
				<Button onPress={() => sortItemsById()} title={'Sort by id'} />
			</StyledRow>
		</MainWrapper>
	);
};

export default ListItems;
