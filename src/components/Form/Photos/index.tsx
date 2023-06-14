import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

import {
  Container,
  ImageText,
  ImageDescription,
  Images,
  ImageBox,
  PlusIcon,
  AnnouncementPhoto,
} from "./styles";

export function Photos() {
  const [photoIsLoading, setPhotoIsLoading] = useState<boolean>(false);
  const [photos, setPhotos] = useState([
    {
      id: 1,
      uri: "",
    },
  ]);

  async function handleAnnouncementPhotosSelect(id: number) {
    setPhotoIsLoading(true);
    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (selectedPhoto.canceled) {
        return;
      }

      if (selectedPhoto.assets[0].uri) {
        // const photoInfo: any = await FileSystem.getInfoAsync(
        //   selectedPhoto.assets[0].uri
        // );

        // if (photoInfo.size && photoInfo.size / 1024 / 1024 > 3) {
        //   return Alert.alert(
        //     "Essa imagem e muito grande. Escolha uma de ate 3MB."
        //   );
        // }
        setPhotos((old) => [
          ...old,
          {
            id: id + 1,
            uri: selectedPhoto.assets[0].uri,
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  return (
    <Container>
      <ImageText>Imagens</ImageText>
      <ImageDescription>
        Escolha até 3 imagens para serem exibidas no seu anúncio!
      </ImageDescription>

      <Images
        data={photos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(photo: any) => String(photo.id)}
        renderItem={({ item }: any) => (
          <ImageBox
            onPress={() => {
              handleAnnouncementPhotosSelect(item.id);
            }}
          >
            {photoIsLoading ? (
              <ActivityIndicator size="small" color="#9F9BA1" />
            ) : item.uri !== "" ? (
              <AnnouncementPhoto source={{ uri: item.uri }} />
            ) : (
              <PlusIcon />
            )}
          </ImageBox>
        )}
      ></Images>
    </Container>
  );
}
