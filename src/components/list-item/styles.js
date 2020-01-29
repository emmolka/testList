import styled from 'styled-components';

export const ItemWrapper = styled.View`
	flex-direction: row;
	margin: 5px;
	padding: 3px;
	border: 1px solid black;
	border-radius: 5px;
`;

export const ItemImage = styled.Image`
	flex: 1;
	border-radius: 10px;
`;

export const ItemInfoWrapper = styled.View`
	flex: 4;
	max-width: 80%;
	margin: 5px;
`;

export const ItemSignAndNumber = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const ItemNumber = styled.Text`
	background-color: #0377fc;
	align-self: flex-start;
	overflow: hidden;
	color: white;
	padding-top: 5px;
	text-align: center;
	font-size: 10px;
	border: 1px solid #0377fc;
	border-radius: 12.5px;
	width: 25px;
	height: 25px;
`;

export const ItemAuthor = styled.Text`
	font-size: 20px;
	font-weight: bold;
`;

export const ItemUrl = styled.Text`
	font-size: 12px;
	color: black;
	margin: 5px 0;
`;
