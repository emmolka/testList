import React from 'react';
import {
	ItemWrapper,
	ItemImage,
	ItemContentWrapper,
	ItemSignAndNumber,
	ItemUrl,
	ItemNumber,
	ItemAuthor
} from './styles';

const ListItem = ({ url, id, author, download_url }) => {
	return (
		<ItemWrapper>
			<ItemImage source={{ uri: download_url }} />
			<ItemContentWrapper>
				<ItemSignAndNumber>
					<ItemAuthor>{author}</ItemAuthor>
					<ItemNumber>{id}</ItemNumber>
				</ItemSignAndNumber>
				<ItemUrl>{url}</ItemUrl>
			</ItemContentWrapper>
		</ItemWrapper>
	);
};

export default ListItem;
