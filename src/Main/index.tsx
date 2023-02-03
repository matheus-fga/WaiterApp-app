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
import { Cart } from '../components/Cart';

import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleCancelOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddTocart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(item => (
        item.product._id === product._id
      ));

      if (itemIndex < 0 ) {
        return prevState.concat({
          product,
          quantity: 1
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(item => (
        item.product._id === product._id
      ));
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity > 1) {
        newCartItems[itemIndex] = {
          ...item,
          quantity: item.quantity - 1
        };

        return newCartItems;
      }

      newCartItems.splice(itemIndex, 1);

      return newCartItems;
    });
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
          <Menu onAddToCart={handleAddTocart} />
        </MenuContainer>
      </Container>
      <Footer>
        {!selectedTable && (
          <Button onPress={() => setIsTableModalVisible(true)}>
            Novo Pedido
          </Button>
        )}

        {selectedTable && (
          <Cart
            cartItems={cartItems}
            onAdd={handleAddTocart}
            onDecrement={handleDecrementCartItem}
          />
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
