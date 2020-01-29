import React from 'react';
import { StyledTouchableOpacity, StyledText } from './styles';

const ListItem = ({ title, onPress }) => (
	<StyledTouchableOpacity onPress={onPress}>
		<StyledText>{title}</StyledText>
	</StyledTouchableOpacity>
);
export default ListItem;
