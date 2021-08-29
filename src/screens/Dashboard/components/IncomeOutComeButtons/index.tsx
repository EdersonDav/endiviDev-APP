import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: RFValue(130),
    height: RFValue(100),
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
