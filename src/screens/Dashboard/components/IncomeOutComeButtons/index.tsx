import React from 'react';

import { Container, Header, Title, Value, Icon } from './style';

interface IncomeOutComeButtonsProps {
  type: 'income' | 'outcome';
  value: string;
}

export const IncomeOutComeButtons = ({
  type,
  value,
}: IncomeOutComeButtonsProps) => {
  return (
    <Container type={type}>
      <Header type={type}>
        <Title>{type}</Title>
        {type === 'income' ? (
          <Icon name="arrow-up" type={type} />
        ) : (
          <Icon name="arrow-down" type={type} />
        )}
      </Header>
      <Value type={type}>{value}</Value>
    </Container>
  );
};
