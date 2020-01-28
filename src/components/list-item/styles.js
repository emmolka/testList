import styled from 'styled-components';
export const ItemWrapper = styled.View`
	flex-direction: row;
	margin: 10px 5px;
	border: 1px solid black;
	border-radius: 5px;
`;

export const ItemImage = styled.Image`
	height: 50px;
	width: 50px;
	flex: 1;
`;

export const ItemContentWrapper = styled.View`
	flex: 5;
	max-width: 80%;
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
	padding: 5px;
	text-align: center;
	font-size: 12px;
	border: 1px solid #0377fc;
	border-radius: 10px;
`;

export const ItemAuthor = styled.Text`
	font-size: 20px;
	font-weight: bold;
`;

export const ItemUrl = styled.Text`
	font-size: 16px;
	color: black;
	flex: 1;
`;
