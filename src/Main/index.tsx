import { useState } from 'react';

import { Container,
  CategoriesContainer,
  MenuContainer,
} from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { TableModal } from '../components/TableModal';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        {!selectedTable && (
          <Button onPress={() => setIsTableModalVisible(true)}>
            Novo Pedido
          </Button>
        )}
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
