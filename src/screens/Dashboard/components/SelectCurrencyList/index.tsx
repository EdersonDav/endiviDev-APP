import React from 'react';

import { ISelectCurrency } from '../../';
import { Container, CurrencyValue, SelectListButtons } from './style';

interface SelectCurrencyProps {
  listCurrencies: ISelectCurrency[];
  handleSelect: (value: string) => void;
}

export const SelectCurrencyList = ({
  listCurrencies,
  handleSelect,
}: SelectCurrencyProps) => {
  return (
    <Container>
      {listCurrencies.map(item => (
        <SelectListButtons
          onPress={() => handleSelect(item.value)}
          key={item.value}
        >
          <CurrencyValue>{item.symbol}</CurrencyValue>
        </SelectListButtons>
      ))}
    </Container>
  );
};
