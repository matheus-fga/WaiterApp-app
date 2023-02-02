import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.6);
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: #fafafa;
  border-radius: 8px;
  padding: 24px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalForm = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  margin-bottom: 24px;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  padding: 16px;
`;
