import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import { Input } from "../../components/Form/Input";

import { Container, Footer } from "./styles";
import { Photos } from "../../components/Form/Photos";
import { FormHeader } from "../../components/Form/FormHeader";
import { FormRadioButton } from "../../components/Form/FormRadioButton";
import { FormSwitch } from "../../components/Form/FormSwitch";
import { FormPayment } from "../../components/Form/FormPayment";
import { FormButton } from "../../components/Form/FormButton";
import { FormCategory } from "../../components/Form/FormCategory";

export function Announcement() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView persistentScrollbar bounces={false}>
        <View>
          <Container>
            <FormHeader title="Criar anúncio" />
            <Photos />

            <Input
              label="Título do anúncio"
              placeholder="Ex: Samsung S22 novo de caixa"
            />

            <Input
              editable
              multiline
              large
              numberOfLines={4}
              label="Descrição"
              placeholder="Ex: Smartphone Samsung S22 com 128gb de memória, com caixa, todos os cabos e sem marca de uso."
            />

            <Input
              label="Preço"
              placeholder="Ex: 45,90"
              keyboardType="numeric"
            />

            <FormRadioButton label="Estado do produto" />
            <FormSwitch label="Aceita troca?" />
            <FormPayment label="Meios de pagamento aceitos" />
            <FormCategory label="Meios de pagamento aceitos" />
          </Container>
          <Footer>
            <FormButton title="Publicar" />
          </Footer>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
