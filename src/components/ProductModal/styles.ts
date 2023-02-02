import styled from 'styled-components/native';

export const ProductImage = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 24px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
`;

export const ModalBody = styled.View`
  flex: 1;
  background: #fafafa;
  padding: 0 24px;
`;

export const ModalHeader = styled.View`
  margin: 32px 0;
`;

export const IngredientsContainer = styled.View`
  flex: 1;
`;

export const Ingredient = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  margin-bottom: 4px;
  padding: 16px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
