import styled from "styled-components/native";
import { colors, fonts } from '../../../../global/styles/style';
import { RFValue } from 'react-native-responsive-fontsize';
import { EvilIcons } from '@expo/vector-icons';

interface TypeProps {
  type: 'income' | 'outcome';
}

export const Container = styled.View`
  background-color: ${({ type }: TypeProps) =>
    type === 'income' ?
      colors.greenLight :
      colors.redLight
  };
  align-items: center;
  padding: 10px;
  width: ${RFValue(130)}px;
  height: ${RFValue(100)}px;
  border-radius: 11px;
`

export const Header = styled.View`
  flex-direction: ${({ type }: TypeProps) =>
    type === 'income' ?
      'row' :
      'row-reverse'
  };
  width: 100%;
  margin-bottom: 19px;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${colors.textColor};
  font-size: ${RFValue(14)}px;
  font-family: ${fonts.medium};
  text-transform: capitalize;
`

export const Value = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${fonts.bold};

  color: ${({ type }: TypeProps) =>
    type === 'income' ?
      colors.greenText :
      colors.redText
  };
`

export const Icon = styled(EvilIcons)`
  font-size: ${RFValue(25)}px;
  color: ${({ type }: TypeProps) =>
    type === 'income' ?
      colors.greenText :
      colors.redText
  };
`