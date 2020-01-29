import styled from 'styled-components';

export const ItemWrapper = styled.View`
	flex-direction: row;
	margin: 5px;
	padding: 3px;
	border: 1px solid #000;
	border-radius: 5px;
`;

export const ItemImage = styled.Image`
	flex: 1;
	border-radius: 5px;
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

export const ItemAuthor = styled.Text`
	font-size: 20px;
	font-weight: bold;
`;

export const ItemNumber = styled.Text`
	background-color: #0377fc;
	overflow: hidden;
	color: #fff;
	padding-top: 5px;
	text-align: center;
	font-size: 10px;
	border: 1px solid #0377fc;
	border-radius: 13px;
	width: 26px;
	height: 26px;
`;

export const ItemUrl = styled.Text`
	font-size: 12px;
	color: #000;
	margin: 10px 0;
`;
