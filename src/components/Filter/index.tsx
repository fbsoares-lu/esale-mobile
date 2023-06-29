import { useEffect, useState } from "react";
import {
  Container,
  Header,
  Title,
  CloseIcon,
  FilterCondition,
  FilterConditionText,
  FilterConditionContent,
} from "./styles";
import { FormPayment } from "../Form/FormPayment";
import { FormSwitch } from "../Form/FormSwitch";
import { FlagIndicator } from "../FlagIndicator";
import { Text } from "react-native";

interface FilterProps {
  visible: boolean;
}

export function Filter({ visible }: FilterProps) {
  const [newConditionSelected, setNewConditionSelected] = useState(false);
  const [oldConditionSelected, setOldConditionSelected] = useState(false);

  return (
    <Container animationType="slide" transparent={true} visible={false}>
      <Text style={{ color: "red" }}>oi</Text>
      {/* <Header>
        <Title>Filtrar anúncios</Title>
        <CloseIcon />
      </Header>

      <FilterCondition>
        <FilterConditionText>Condição</FilterConditionText>
        <FilterConditionContent>
          <FlagIndicator
            title="NOVO"
            isSelected={newConditionSelected}
            setIsSelected={setNewConditionSelected}
          />
          <FlagIndicator
            title="VELHO"
            isSelected={oldConditionSelected}
            setIsSelected={setOldConditionSelected}
          />
        </FilterConditionContent>
      </FilterCondition>

      <FilterCondition>
        <FormSwitch label="Aceita troca?" />
      </FilterCondition>

      <FilterCondition>
        <FormPayment label="Meios de pagamento aceitos" />
      </FilterCondition> */}
    </Container>
  );
}
