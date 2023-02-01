import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: ${({ disabled }) => disabled ? '#999' : '#d73035'};
  border-radius: 44px;
  padding: 12px 24px;
`;
