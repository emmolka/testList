import React from 'react';
import { ItemWrapper, ItemImage, ItemInfoWrapper, ItemSignAndNumber, ItemUrl, ItemNumber, ItemAuthor } from './styles';

const ListItem = ({ url, id, author, download_url, onPress }) => {
	return (
		<ItemWrapper>
			<ItemImage source={{ uri: download_url }} />
			<ItemInfoWrapper>
				<ItemSignAndNumber>
					<ItemAuthor>{author}</ItemAuthor>
					<ItemNumber>{id}</ItemNumber>
				</ItemSignAndNumber>
				<ItemUrl onPress={onPress}>Url: {url}</ItemUrl>
			</ItemInfoWrapper>
		</ItemWrapper>
	);
};

export default ListItem;
