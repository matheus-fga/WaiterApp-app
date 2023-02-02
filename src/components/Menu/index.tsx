import { FlatList, TouchableOpacity } from 'react-native';

import { Product, ProductImage, ProductDetails, ProductSeparator } from './styles';

import { products } from '../../mocks/products';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={ProductSeparator}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={{
              uri: `http://192.168.0.28:3001/uploads/${product.imagePath}`
            }}
          />

          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} color="#666666">
              {product.description}
            </Text>
            <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
            <PlusCircle />
          </TouchableOpacity>
        </Product>
      )}
    />
  );
}
