import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-bottom: 16px;
`;

export const Switch = styled.Switch`
  margin-top: 8px;
`;

export const CheckboxContainer = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 8px;
`;

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  margin-left: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.gray_two};
`;
