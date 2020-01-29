import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
export const MainWrapper = styled.View`flex: 1;`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 9;
`;

export const StyledRow = styled.View`
	flex-direction: row;
	flex: 1;
	justify-content: space-between;
	margin: 5px;
`;

export const StyledActivityIndicator = styled.ActivityIndicator`
	flex: 1;
	height: undefined;
	width: undefined;
`;
