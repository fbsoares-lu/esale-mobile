import React from "react";

import { Container, Button, ButtonTitle } from "./styles";
import { ButtonProps } from "react-native";

interface ButtonFormProps extends ButtonProps {
  title: string;
}

export function FormButton({ title }: ButtonFormProps) {
  return (
    <Container>
      <Button>
        <ButtonTitle>{title}</ButtonTitle>
      </Button>
    </Container>
  );
}
