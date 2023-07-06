import { X, XCircle } from "phosphor-react-native";
import styled from "styled-components/native";

export interface CardProps {
  isVisible: boolean;
}

export const Content = styled.View`
  padding: 20px 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.gray_one};
`;

export const CloseButton = styled.TouchableOpacity``;

export const Condition = styled.View`
  margin-top: 24px;
`;

export const ConditionTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.gray_two};
`;

export const ContentConditions = styled.View`
  margin-top: 12px;
  flex-direction: row;
`;

export const Card = styled.TouchableOpacity<CardProps>`
  background-color: ${(props) =>
    props.isVisible
      ? props.theme.COLORS.primary
      : props.theme.COLORS.secondary};
  height: 28px;
  padding: 6px 12px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;

  margin-right: 8px;

  flex-direction: row;
`;

export const CardTitle = styled.Text<CardProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: 12px;
  color: ${(props) =>
    props.isVisible ? props.theme.COLORS.white : props.theme.COLORS.gray_four};
  padding-right: 2px;
  text-transform: uppercase;
`;

export const CloseCardIcon = styled(XCircle).attrs(({ theme }) => ({
  size: 14,
  color: theme.COLORS.white,
  weight: "fill",
}))``;

export const CloseIcon = styled(X).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.gray_four,
  weight: "bold",
}))``;
