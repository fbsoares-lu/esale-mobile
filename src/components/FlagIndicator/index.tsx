import { useEffect, useState } from "react";
import { Container, Title, CloseButton, CloseButtonIcon } from "./styles";

interface FlagIndicatorProps {
  title: string;
  isSelected: boolean;
  setIsSelected: any;
}

export function FlagIndicator({
  isSelected,
  setIsSelected,
  title,
}: FlagIndicatorProps) {
  return (
    <Container
      isSelected={isSelected}
      onPress={() => {
        setIsSelected((oldState: boolean) => !oldState);
      }}
    >
      <Title>{title}</Title>
      {isSelected && (
        <CloseButton>
          <CloseButtonIcon />
        </CloseButton>
      )}
    </Container>
  );
}
