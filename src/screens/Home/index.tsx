import React, { useEffect, useState } from "react";
import {
  ActivityIndicatorComponent,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";

import { api } from "../../services/api";

import {
  Container,
  BackgroundHeader,
  Header,
  GreetBox,
  Text,
  UserName,
  AvatarCircle,
  SearchBar,
  Input,
  IconsBox,
  SearchIcon,
  Divider,
  FilterIcon,
  ListProducts,
  Card,
  CardHeader,
  AvatarCircleCard,
  ExchangeTag,
  CardName,
  CardPrice,
  CardState,
  SearchButton,
} from "./styles";

const formatData = (data: any[], numColumns: number) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;

  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow += 1;
  }

  return data;
};

export function Home() {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODY2NTg0NzQsImV4cCI6MTY4Njc0NDg3NCwic3ViIjoiZTRkOWYxMGMtNGEzMS00MTI3LThlODMtOTVlMjQ0MWQyNTU2In0._qyE62NEMH7NuiEaG9AWRzSSKk2HhdZJj-0q3vkd8kE";
  const [announcements, setAnnouncements] = useState([]);
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  async function handleSearchAnnouncement() {
    try {
      setLoadingAnnouncements(true);
      const response = await api.get("/announcements", {
        headers: { Authorization: "Bearer " + token },
        params: { search: searchValue },
      });
      setAnnouncements(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAnnouncements(false);
    }
  }

  async function getAnnouncments() {
    try {
      setLoadingAnnouncements(true);
      const response = await api.get("/announcements", {
        headers: { Authorization: "Bearer " + token },
      });
      setAnnouncements(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAnnouncements(false);
    }
  }

  useEffect(() => {
    getAnnouncments();
  }, []);

  return (
    <Container>
      <BackgroundHeader>
        <Header>
          <GreetBox>
            <Text>Ola,</Text>
            <UserName>Lucas</UserName>
          </GreetBox>

          <AvatarCircle>
            <Image
              style={{ width: 48, height: 48, borderRadius: 24 }}
              source={{
                uri: "https://avatars.githubusercontent.com/u/38812286?v=4",
              }}
            />
          </AvatarCircle>
        </Header>
      </BackgroundHeader>

      <SearchBar>
        <Input
          onChangeText={(value) => {
            setSearchValue(value);
            handleSearchAnnouncement();
          }}
        />
        <IconsBox>
          <SearchButton onPress={() => handleSearchAnnouncement()}>
            <SearchIcon />
          </SearchButton>
          <Divider />
          <FilterIcon />
        </IconsBox>
      </SearchBar>

      {loadingAnnouncements ? (
        <View
          style={{
            height: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="#27AF4B" />
        </View>
      ) : (
        <ListProducts
          data={formatData(announcements, 2)}
          numColumns={2}
          contentContainerStyle={{
            marginRight: 20,
            marginLeft: 20,
            marginTop: 24,
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(announcement: any) => announcement?.id}
          renderItem={({ item }: any) => (
            <>
              {item?.empty === true ? (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    margin: 2,
                    backgroundColor: "transparent",
                  }}
                />
              ) : (
                <TouchableOpacity style={{ flex: 1, margin: 4 }}>
                  <Card>
                    <Image
                      source={{ uri: item.files[0].path }}
                      style={{ height: 100, borderRadius: 6 }}
                    />
                    <CardHeader>
                      <AvatarCircleCard>
                        <Image
                          source={{ uri: item.user.profile.file.path }}
                          style={{ height: 24, width: 24, borderRadius: 12 }}
                        />
                      </AvatarCircleCard>

                      <CardState state={item.announcementState}>
                        <ExchangeTag>
                          {item.announcementState === "new" ? "NOVO" : "USADO"}
                        </ExchangeTag>
                      </CardState>
                    </CardHeader>

                    <CardName>{item.announcementName}</CardName>
                    <CardPrice>R$ {item.announcementPrice}</CardPrice>
                  </Card>
                </TouchableOpacity>
              )}
            </>
          )}
        />
      )}
    </Container>
  );
}
