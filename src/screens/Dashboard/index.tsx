import React from 'react';

import { Container, Header, Body } from './style';
import { IncomeOutComeButtons } from './components/IncomeOutComeButtons/index';

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <IncomeOutComeButtons type="income" value={'20.000,00'} />
        <IncomeOutComeButtons type="outcome" value={'20.000,00'} />
      </Header>
    </Container>
  );
};
