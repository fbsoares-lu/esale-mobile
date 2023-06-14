import React from "react";

import { Title, Container, ArrowBackIcon, TitleContainer } from "./styles";

interface FormHeaderProps {
  title: string;
}

export function FormHeader({ title }: FormHeaderProps) {
  return (
    <Container>
      <ArrowBackIcon weight="regular" />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
}
