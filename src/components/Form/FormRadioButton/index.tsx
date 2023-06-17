import React from "react";

import { Container, RadioBox } from "./styles";
import { InputTitle } from "../InputTitle";
import { RadioButton } from "../../RadioButton";

interface FormRadioButtonProps {
  label: string;
}

export function FormRadioButton({ label }: FormRadioButtonProps) {
  const radioButtons = [
    {
      id: "1",
      label: "Novo",
      value: "new",
      color: "#9F9BA1",
      borderColor: "#9F9BA1",
    },
    {
      id: "2",
      label: "Usado",
      value: "old",
      color: "#9F9BA1",
      borderColor: "#9F9BA1",
    },
  ];

  return (
    <Container>
      <InputTitle value={label} />
      <RadioBox>
        <RadioButton radioButtons={radioButtons} />
      </RadioBox>
    </Container>
  );
}
