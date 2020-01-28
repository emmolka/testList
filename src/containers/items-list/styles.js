import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
export const MainWrapper = styled.View`flex: 1;`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 7;
`;

export const StyledFlatList = styled.FlatList`flex: 1;`;

export const StyledText = styled.Text`
	font-size: 16px;
	color: white;
	background-color: #0377fc;
	text-align: center;
	padding: 20px 10px;
`;

export const StyledRow = styled.View`
	flex-direction: row;
	flex: 1;
	justify-content: space-between;
	margin: 5px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity``;
