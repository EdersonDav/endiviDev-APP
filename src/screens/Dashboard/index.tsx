import React, { useState } from 'react';

import { Container, Header, Body, Icon, ViewControlsHeader } from './style';
import { IncomeOutComeButtons } from './components/IncomeOutComeButtons/index';

export const Dashboard = () => {
  const [iconName, setIconName] = useState(true);

  return (
    <Container>
      <Header>
        <IncomeOutComeButtons type="income" value={'20.000,00'} />
        <ViewControlsHeader>
          <Icon
            name={iconName ? 'eye' : 'eye-off'}
            onPress={() => setIconName(!iconName)}
          />
        </ViewControlsHeader>
        <IncomeOutComeButtons type="outcome" value={'20.000,00'} />
      </Header>
    </Container>
  );
};
