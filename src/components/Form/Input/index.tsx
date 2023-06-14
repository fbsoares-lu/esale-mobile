import React from "react";

import { Container, TextInput, InputBox } from "./styles";
import { Text, TextInputProps } from "react-native";
import { InputTitle } from "../InputTitle";

interface InputProps extends TextInputProps {
  label: string;
  large?: boolean;
}

export function Input(props: InputProps) {
  return (
    <Container>
      <InputTitle value={props.label} />
      <TextInput large={props.large} {...props} />
    </Container>
  );
}
