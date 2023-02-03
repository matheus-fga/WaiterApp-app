import styled from 'styled-components/native';

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 8px;
`;

export const ProductQuantity = styled.View`
  align-self: flex-start;
  min-width: 20px;
  margin-left: 8px;
`;

export const ProductDetails = styled.View`
  justify-content: space-between;
  height: 40px;
`;
