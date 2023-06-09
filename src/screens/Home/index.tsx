import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";

import { api } from "../../services/api";

import {
  Container,
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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODYyNzUwMjMsImV4cCI6MTY4NjM2MTQyMywic3ViIjoiZTRkOWYxMGMtNGEzMS00MTI3LThlODMtOTVlMjQ0MWQyNTU2In0.p06c-EefIGmUWFnTvlOWzCnTs6jQVi1DRZdxBG1oUlU";
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

      <ListProducts
        data={formatData(announcements, 2)}
        numColumns={2}
        contentContainerStyle={{
          marginRight: 22,
          marginLeft: 22,
          marginTop: 24,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(announcement: any) => announcement?.id}
        renderItem={({ item }: any) => (
          <>
            {loadingAnnouncements ? (
              <Text>Carregando</Text>
            ) : (
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
                  <TouchableOpacity style={{ flex: 1, margin: 2 }}>
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
                            {item.announcementState === "new"
                              ? "NOVO"
                              : "USADO"}
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
          </>
        )}
      />
    </Container>
  );
}
