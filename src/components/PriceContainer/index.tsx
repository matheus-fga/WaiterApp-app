import { View } from 'react-native';

import { Button } from '../Button';
import { Text } from '../Text';

import { formatCurrency } from '../../utils/formatCurrency';

import { Container } from './styles';

interface PriceContainerProps {
  price: [
    label: string,
    value: number
  ];
  button: [
    label: string,
    onPress: () => void
  ];
}

export function PriceContainer({ price, button }: PriceContainerProps) {
  const [priceLabel, value] = price;
  const [buttonLabel, onPress] = button;

  return (
    <Container>
      <View>
        <Text size={18} color="#666666">{priceLabel}</Text>
        <Text size={24} weight="600" style={{ marginTop: 4 }}>
          {formatCurrency(value)}
        </Text>
      </View>

      <Button onPress={onPress}>
        {buttonLabel}
      </Button>
    </Container>
  );
}
