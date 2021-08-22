import styled from "styled-components/native";
import { colors } from '../../global/styles/style';
import { RFPercentage } from 'react-native-responsive-fontsize';


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