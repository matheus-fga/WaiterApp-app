import styled from 'styled-components/native';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const CategoryItem = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  margin-bottom: 8px;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 0.5 : 0.1});
  elevation: 2;
`;
