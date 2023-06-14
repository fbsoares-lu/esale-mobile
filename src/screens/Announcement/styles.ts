import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.background};
`;

export const AnnouncementDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.gray_two};
  margin-top: 16px;
`;

export const Footer = styled.View`
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.white};

  flex: 1;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 20px;
`;
