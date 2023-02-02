import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 80px;
  margin-top: 32px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;
