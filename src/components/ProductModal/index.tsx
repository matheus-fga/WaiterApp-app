import { FlatList, Modal, View } from 'react-native';

import { Text } from '../Text';
import { Close } from '../Icons/Close';
import { Footer } from '../Footer';

import { Product } from '../../types/Product';

import { formatCurrency } from '../../utils/formatCurrency';

import {
  ProductImage,
  CloseButton,
  ModalBody,
  ModalHeader,
  IngredientsContainer,
  Ingredient,
  PriceContainer,
} from './styles';
import { Button } from '../Button';

interface ProductModal {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ visible, onClose, product }: ProductModal) {
  if (!product) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <ProductImage
        source={{
          uri: `http://192.168.0.28:3001/uploads/${product.imagePath}`,
        }}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </ProductImage>

      <ModalBody>
        <ModalHeader>
          <Text size={24} weight="600">{product.name}</Text>
          <Text style={{ marginTop: 16 }} color="#666666">{product.description}</Text>
        </ModalHeader>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666666">Ingredientes</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredient) => ingredient._id}
              style={{ marginVertical: 16 }}
              showsVerticalScrollIndicator={false}
              renderItem={({item: ingredient}) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666666" style={{ marginLeft: 16 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <PriceContainer>
          <View>
            <Text size={18} color="#666666">Preço</Text>
            <Text size={24} weight="600" style={{ marginTop: 4 }}>
              {formatCurrency(product.price)}
            </Text>
          </View>

          <Button onPress={() => alert('Pedido adicionado ao carrinho')}>
            Adicionar ao pedido
          </Button>
        </PriceContainer>
      </Footer>
    </Modal>
  );
}
