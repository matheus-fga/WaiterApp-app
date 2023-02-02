import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';

import { Container } from './styles';

interface FooterProps {
  children: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <Container>
      <SafeAreaView>
        {children}
      </SafeAreaView>
    </Container>
  );
}
