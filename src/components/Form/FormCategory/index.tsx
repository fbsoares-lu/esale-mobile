import React, { useState } from "react";
import { Container, CheckboxContainer, Content, Title } from "./styles";
import { InputTitle } from "../InputTitle";
import Checkbox from "expo-checkbox";

interface FormCategoryProps {
  label: string;
}

export function FormCategory({ label }: FormCategoryProps) {
  const [isChecked, setChecked] = useState(false);
  return (
    <Container>
      <InputTitle value={label} />
      <CheckboxContainer>
        <Content>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color="#9F9BA1"
          />
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
