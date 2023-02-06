import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { Container,
  CategoriesContainer,
  MenuContainer,
  CenteredContainer,
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
  const [isLoading] = useState(true);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleResetOrder() {
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
          onCancelOrder={handleResetOrder}
        />

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories />
            </CategoriesContainer>

            <MenuContainer>
              <Menu onAddToCart={handleAddTocart} />
            </MenuContainer>
          </>
        )}

        {isLoading && (
          <>
            <CenteredContainer>
              <ActivityIndicator color="#d73035" size="large" />
            </CenteredContainer>
          </>
        )}
      </Container>

      <Footer>
        {!selectedTable && (
          <Button
            onPress={() => setIsTableModalVisible(true)}
            disabled={isLoading}
          >
            Novo Pedido
          </Button>
        )}

        {selectedTable && (
          <Cart
            cartItems={cartItems}
            onAdd={handleAddTocart}
            onDecrement={handleDecrementCartItem}
            onConfirmOrder={handleResetOrder}
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
