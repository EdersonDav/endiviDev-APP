import React, { useState, useEffect } from 'react';

import { SelectCurrency } from './components/SelectCurrency';
import { SelectCurrencyList } from './components/SelectCurrencyList';
import { IncomeOutComeButtons } from './components/IncomeOutComeButtons';

import { currencies } from '../../utils/currencies';

import { Container, Header, Body, Eye, ViewControlsHeader } from './style';

export interface ISelectCurrency {
  symbol: string;
  value: string;
}

export const Dashboard = () => {
  const [iconName, setIconName] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState<ISelectCurrency>({
    symbol: 'R$',
    value: 'real',
  });
  const [showSelectList, setShowSelectList] = useState(false);

  const [listCurrencies, setListCurrencies] =
    useState<ISelectCurrency[]>(currencies);

  useEffect(() => {
    const listValues = currencies.filter(
      currency => currency.value !== selectedCurrency.value,
    );
    setListCurrencies(listValues);
  }, [selectedCurrency]);

  const handleSelect = (itemValue: string) => {
    const selected = currencies.find(currency => currency.value === itemValue);
    if (selected) {
      setSelectedCurrency(selected);
    }
    setShowSelectList(false);
  };

  const showHidenSelectList = () => {
    setShowSelectList(!showSelectList);
  };

  return (
    <Container>
      <Header>
        <IncomeOutComeButtons type="income" value={'20.000,00'} />
        <ViewControlsHeader>
          <Eye
            name={iconName ? 'eye' : 'eye-off'}
            onPress={() => setIconName(!iconName)}
          />
          <SelectCurrency
            selectedCurrency={selectedCurrency}
            showHidenSelectList={showHidenSelectList}
          />
        </ViewControlsHeader>
        <IncomeOutComeButtons type="outcome" value={'20.000,00'} />
      </Header>
      {showSelectList ? (
        <SelectCurrencyList
          handleSelect={handleSelect}
          listCurrencies={listCurrencies}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};
