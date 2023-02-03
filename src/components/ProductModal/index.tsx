import { FlatList, Modal } from 'react-native';

import { Text } from '../Text';
import { Close } from '../Icons/Close';
import { Footer } from '../Footer';
import { SummaryWithAction } from '../SummaryWithAction';

import { Product } from '../../types/Product';

import {
  ProductImage,
  CloseButton,
  ModalBody,
  ModalHeader,
  IngredientsContainer,
  Ingredient,
} from './styles';

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
        <SummaryWithAction
          summary={['Preço', product.price]}
          action={['Adiconar ao pedido', () => alert('Adiconado ao pedido')]}
        />
      </Footer>
    </Modal>
  );
}
