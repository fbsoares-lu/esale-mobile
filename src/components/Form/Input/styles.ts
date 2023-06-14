import styled from "styled-components/native";

interface TextInputProps {
  large?: boolean;
}

export const Container = styled.View`
  flex: 1;
  margin-bottom: 16px;
`;

export const InputBox = styled.View<TextInputProps>`
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  height: ${(props) => (props.large ? 160 : 45)}px;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 6px;
  padding: 16px;
  margin-top: 8px;
  text-align: left;
`;
