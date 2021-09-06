import React from 'react';

import { ISelectCurrency } from '../..';
import { Container, CurrencyValue, ButtonSelect } from './style';
import { StyleSheet } from 'react-native';

interface SelectCurrencyProps {
  selectedCurrency: ISelectCurrency;
  showHidenSelectList: () => void;
}

export const SelectCurrency = ({
  selectedCurrency,
  showHidenSelectList,
}: SelectCurrencyProps) => {
  return (
    <Container>
      <ButtonSelect style={styles.container} onPress={showHidenSelectList}>
        <CurrencyValue>{selectedCurrency.symbol}</CurrencyValue>
      </ButtonSelect>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    zIndex: 5,
  },
});
