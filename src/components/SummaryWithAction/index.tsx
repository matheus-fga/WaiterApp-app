import { View } from 'react-native';

import { Button } from '../Button';
import { Text } from '../Text';

import { formatCurrency } from '../../utils/formatCurrency';

import { Container } from './styles';

interface SummaryWithActionProps {
  summary: [
    label: string,
    value: number
  ];
  action: [
    label: string,
    onPress: () => void
  ];
  disabled?: [
    label: string,
    disableCondition: boolean
  ]
}

export function SummaryWithAction({ summary, action, disabled = ['', false] }: SummaryWithActionProps) {
  const [summaryLabel, summaryValue] = summary;
  const [actionLabel, onPress] = action;
  const [disabledLabel, disableStatus] = disabled;

  return (
    <Container>
      <View>
        {!disableStatus && (
          <>
            <Text size={18} color="#666666">
              {summaryLabel}
            </Text>

            <Text size={24} weight="600" style={{ marginTop: 4 }}>
              {formatCurrency(summaryValue)}
            </Text>
          </>
        )}

        {disableStatus && (
          <Text size={18} color="#999999" style={{ maxWidth: 150 }}>
            {disabledLabel}
          </Text>
        )}
      </View>

      <Button onPress={onPress} disabled={disableStatus}>
        {actionLabel}
      </Button>
    </Container>
  );
}
