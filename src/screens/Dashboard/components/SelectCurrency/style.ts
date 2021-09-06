import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { colors, fonts } from '../../../../global/styles/style';

export const Container = styled.View`
  position: absolute;
  bottom: 0px;
`;

export const ButtonSelect = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  background-color: ${colors.gray};
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 48px;
  justify-content: center;
  align-items: center;
`

export const CurrencyValue = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${fonts.bold};
  line-height: 27px;
  color: ${colors.textColor};
`