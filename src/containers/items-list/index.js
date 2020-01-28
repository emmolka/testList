import React, { useState, useEffect } from 'react';
import ListItem from '../../components/list-item';
import axios from 'axios';
import { StyledFlatList, StyledSafeAreaView, MainWrapper } from './styles';

const fetchItems = async (setItems, setIsLoading, setError) => {
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

const ItemsList = () => {
	const [ items, setItems ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	useEffect(() => {
		fetchItems(setItems, setIsLoading);
	}, []);

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
		</MainWrapper>
	);
};
export default ItemsList;
