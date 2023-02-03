import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { Text } from '../Text';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { SummaryWithAction } from '../SummaryWithAction';
import { OrderConfirmedModal } from '../OrderConfirmedModal';

import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';

import { formatCurrency } from '../../utils/formatCurrency';

import {
  Item,
  ProductContainer,
  ProductImage,
  ProductQuantity,
  ProductDetails,
  Actions,
} from './styles';

interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
}

export function Cart({ cartItems, onAdd, onDecrement, onConfirmOrder }: CartProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);

  function handleConfirmOrder() {
    setIsModalVisible(true);
  }

  function handleOk() {
    onConfirmOrder();
    setIsModalVisible(false);
  }

  return (
    <>
      <OrderConfirmedModal
        visible={isModalVisible}
        onOk={handleOk}
      />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 16, maxHeight: 200 }}
          renderItem={({ item }) => (
            <Item>
              <ProductContainer>
                <ProductImage
                  source={{
                    uri: `http://192.168.0.28:3001/uploads/${item.product.imagePath}`,
                  }}
                />

                <ProductQuantity>
                  <Text
                    size={14}
                    color="#999999"
                  >
                    {item.quantity}x
                  </Text>
                </ProductQuantity>

                <ProductDetails>
                  <Text size={14} weight="600">{item.product.name}</Text>
                  <Text color="#666666">{formatCurrency(item.product.price)}</Text>
                </ProductDetails>
              </ProductContainer>

              <Actions>
                <TouchableOpacity onPress={() => onAdd(item.product)}>
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 24 }}
                  onPress={() => onDecrement(item.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />

      )}

      <SummaryWithAction
        summary={['Total', totalPrice]}
        action={['Confirmar pedido', () => handleConfirmOrder()]}
        disabled={['Seu carrinho está vazio', cartItems.length <= 0]}
      />
    </>
  );
}
