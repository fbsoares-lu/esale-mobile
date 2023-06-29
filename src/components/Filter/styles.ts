import { X } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.Modal`
  background-color: ${({ theme }) => theme.COLORS.black};
`;

export const Header = styled.View``;

export const Title = styled.Text``;

export const FilterCondition = styled.View``;

export const FilterConditionText = styled.Text``;

export const FilterConditionContent = styled.View``;

export const CloseIcon = styled(X).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.black,
  weight: "bold",
}))``;
