import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyledText } from './styles';

const ListItem = ({ title, onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<StyledText>{title}</StyledText>
	</TouchableOpacity>
);
export default ListItem;
