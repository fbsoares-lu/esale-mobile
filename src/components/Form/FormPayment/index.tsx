import React, { useState } from "react";
import { Container, CheckboxContainer, Content, Title } from "./styles";
import { InputTitle } from "../InputTitle";
import Checkbox from "expo-checkbox";

interface FormPaymentProps {
  label: string;
}

export function FormPayment({ label }: FormPaymentProps) {
  return (
    <Container>
      <InputTitle value={label} />
      <CheckboxContainer>
        <Content>
          <Checkbox color="#9F9BA1" />
          <Title>Boleto</Title>
        </Content>

        <Content>
          <Checkbox color="#9F9BA1" />
          <Title>Cartão de Crédito</Title>
        </Content>

        <Content>
          <Checkbox color="#9F9BA1" />
          <Title>Cartão de Débito</Title>
        </Content>

        <Content>
          <Checkbox color="#9F9BA1" />
          <Title>Dinheiro</Title>
        </Content>

        <Content>
          <Checkbox color="#9F9BA1" />
          <Title>Pix</Title>
        </Content>
      </CheckboxContainer>
    </Container>
  );
}
