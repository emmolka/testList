import React, { useState, useEffect } from 'react';
import { Linking, FlatList } from 'react-native';
import ListItem from '../../components/list-item';
import axios from 'axios';
import { StyledSafeAreaView, MainWrapper, StyledRow, StyledActivityIndicator } from './styles';
import Button from '../../components/button';
const fetchList = async (setItems, setIsLoading) => {
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
		const finalList = [
			...sortedList.sort((a, b) => {
				const name1 = a.author.split(' ');
				const name2 = b.author.split(' ');
				if (name1[0].charAt(0) === name2[0].charAt(0)) {
					return name1[name1.length - 1].localeCompare(name2[name1.length - 1]);
				}
			})
		];
		setItems(finalList);
	};
	return (
		<MainWrapper>
			{isLoading && <StyledActivityIndicator size="large" />}
			{!isLoading && (
				<StyledSafeAreaView>
					<FlatList
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
					/>
				</StyledSafeAreaView>
			)}
			{!isLoading && (
				<StyledRow>
					<Button onPress={() => fetchList(setItems, setIsLoading)} title={'Refresh list'} />
					<Button onPress={() => sortItemsByAuthor()} title={'Sort by author'} />
					<Button onPress={() => sortItemsById()} title={'Sort by id'} />
				</StyledRow>
			)}
		</MainWrapper>
	);
};

export default ListItems;
