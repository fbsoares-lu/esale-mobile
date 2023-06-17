import React, { useState } from "react";
import { Container, Switch } from "./styles";
import { InputTitle } from "../InputTitle";

interface FormSwitchProps {
  label: string;
}

export function FormSwitch({ label }: FormSwitchProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Container>
      <InputTitle value={label} />
      <Switch
        trackColor={{ false: "#767577", true: "#79a9f5" }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
  );
}
