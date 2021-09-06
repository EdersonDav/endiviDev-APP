import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { colors, fonts } from '../../../../global/styles/style';

export const Container = styled.View`
  padding: ${RFValue(22)}px 0 ${RFValue(5)}px ;
  background-color: transparent;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(10)}px;
`;

export const CurrencyValue = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${fonts.bold};
  line-height: 27px;
  color: ${colors.textColor};
`

export const SelectListButtons = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  width: ${RFValue(38)}px;
  height: ${RFValue(38)}px;
  background-color: ${colors.gray};
  justify-content: center;
  align-items: center;
  margin-bottom: ${RFValue(2)}px;
  border-radius: 38px;
`