import styled from "styled-components/native";
import { XCircle } from "phosphor-react-native";

interface IContainerProps {
  isSelected: boolean;
}

export const Container = styled.TouchableWithoutFeedback<IContainerProps>`
  flex: 1;
  background-color: ${(p) =>
    p.isSelected ? p.theme.COLORS.primary : p.theme.COLORS.gray_five};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ theme }) => theme.COLORS.gray_tree};
`;

export const CloseButton = styled.TouchableWithoutFeedback``;

export const CloseButtonIcon = styled(XCircle).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.black,
  weight: "fill",
}))``;
