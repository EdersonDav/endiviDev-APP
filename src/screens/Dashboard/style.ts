import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

import { colors } from '../../global/styles/style';


export const Container = styled.View`
  flex:1;
  background-color: ${colors.background};
`

export const Header = styled.View`
  width: 100%;
  padding: 115px 10px 26px;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;
  height: ${RFPercentage(17.26)}px;
`

export const Body = styled.View`
  width: 100%;
  padding: 0px 10px;
`

export const ViewControlsHeader = styled.View`
  height: ${RFValue(100)};
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(30)}px;
  color: ${colors.textColor}
`