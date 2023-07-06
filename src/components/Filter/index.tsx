import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Content,
  Title,
  Header,
  CloseButton,
  CloseIcon,
  Condition,
  ConditionTitle,
  ContentConditions,
  Card,
  CardTitle,
  CloseCardIcon,
} from "./styles";
import BottomSheet from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";

interface FilterProps {
  visible: boolean;
  setVisible: (value: any) => any;
}

export function Filter({ visible, setVisible }: FilterProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "68%"], []);

  const [conditions, setConditions] = useState([
    {
      id: 1,
      name: "ambos",
      isVisible: true,
    },
    {
      id: 2,
      name: "novo",
      isVisible: false,
    },
    {
      id: 3,
      name: "usado",
      isVisible: false,
    },
  ]);

  function changeConditionVisibility(conditionId: number) {
    return setConditions(
      [...conditions].map((object) => {
        if (conditionId === object.id) {
          return {
            ...object,
            isVisible: true,
          };
        }

        return {
          ...object,
          isVisible: false,
        };
      })
    );
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={() => setVisible(false)}
      backgroundStyle={{ backgroundColor: "white" }}
    >
      <Content>
        <Header>
          <Title>Filtros</Title>
          <CloseButton onPress={() => setVisible(false)}>
            <CloseIcon />
          </CloseButton>
        </Header>

        <Condition>
          <ConditionTitle>Condição</ConditionTitle>
          <FlatList
            data={conditions}
            horizontal
            scrollEnabled={false}
            contentContainerStyle={{ marginTop: 12 }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(condition: any) => String(condition?.id)}
            renderItem={({ item }: any) => (
              <Card
                key={item.id}
                isVisible={item.isVisible}
                onPress={() => {
                  changeConditionVisibility(item.id);
                }}
              >
                <CardTitle isVisible={item.isVisible}>{item.name}</CardTitle>
                {item.isVisible && <CloseCardIcon />}
              </Card>
            )}
          ></FlatList>
        </Condition>
      </Content>
    </BottomSheet>
  );
}
