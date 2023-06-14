import React, { useMemo, useState } from "react";

import { Container } from "./styles";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";

interface IRadioButtonProps {
  radioButtons: RadioButtonProps[];
}

export function RadioButton({ radioButtons }: IRadioButtonProps) {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <Container>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        layout="row"
        containerStyle={{
          paddingStart: -10,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      />
    </Container>
  );
}
