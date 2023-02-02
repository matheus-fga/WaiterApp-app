import { useState } from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';

import { Text } from '../Text';

import { Overlay, ModalBody, ModalHeader, ModalForm, Input } from './styles';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    setTable('');
    onSave(table);
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666666"/>
            </TouchableOpacity>
          </ModalHeader>

          <ModalForm>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#999999"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button
              onPress={handleSave}
              disabled={table.length === 0}
            >
              Salvar
            </Button>
          </ModalForm>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
