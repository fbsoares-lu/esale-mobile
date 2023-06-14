import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.black};
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.white};
`;
