import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + 36}px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const ArrowBackIcon = styled(ArrowLeft)``;

export const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-right: 24px;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.gray_one};
`;
