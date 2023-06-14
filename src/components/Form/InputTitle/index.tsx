import React from "react";

import { Container, Title } from "./styles";

interface InputTitleProps {
  value: string;
}

export function InputTitle({ value }: InputTitleProps) {
  return (
    <Container>
      <Title>{value}</Title>
    </Container>
  );
}
