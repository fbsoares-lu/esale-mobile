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
  Greet,
  SignoutIcon,
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
  ListHeader,
  ListTitle,
  AnnounctmentCount,
  FilterButton,
} from "./styles";
import { useDebounce } from "../../hooks/useDebounce";
import { Filter } from "../../components/Filter";

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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODg1OTkxNTYsImV4cCI6MTY4ODY4NTU1Niwic3ViIjoiNzIxOWM4NzMtZDk4OS00MDFlLTg5MzQtYjlhODAwNWVlNTA0In0.18Q3N2RlB-0RUPCOrSV-A2dFDJu2Tht-JKo9sRvuqiA";
  const [announcements, setAnnouncements] = useState([]);
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [filterIsVisible, setFilterIsVisible] = useState(false);

  const debounceSearchValue = useDebounce({ value: searchValue, delay: 1000 });

  async function getAnnouncements() {
    try {
      setLoadingAnnouncements(true);
      const response = await api.get("/announcements", {
        headers: { Authorization: "Bearer " + token },
        params: {
          search: debounceSearchValue,
          state: "old",
          paymentOptions: ["credit_card", "pix"],
          exchangable: true,
          categories: [],
        },
      });
      setAnnouncements(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAnnouncements(false);
    }
  }

  useEffect(() => {
    getAnnouncements();
  }, [debounceSearchValue]);

  return (
    <Container>
      <BackgroundHeader>
        <Header>
          <Greet>
            <AvatarCircle>
              <Image
                style={{ width: 48, height: 48, borderRadius: 24 }}
                source={{
                  uri: "https://avatars.githubusercontent.com/u/38812286?v=4",
                }}
              />
            </AvatarCircle>
            <GreetBox>
              <Text>Bem vindo</Text>
              <UserName>Lucas</UserName>
            </GreetBox>
          </Greet>

          <SignoutIcon />
        </Header>
      </BackgroundHeader>

      <SearchBar>
        <Input value={searchValue} onChangeText={setSearchValue} />
        <IconsBox>
          <SearchButton onPress={() => getAnnouncements()}>
            <SearchIcon />
          </SearchButton>
          <Divider />
          <FilterButton onPress={() => setFilterIsVisible(true)}>
            <FilterIcon />
          </FilterButton>
        </IconsBox>
      </SearchBar>

      <ListHeader>
        <ListTitle>Anúncios</ListTitle>
        <AnnounctmentCount>Total de {announcements.length}</AnnounctmentCount>
      </ListHeader>

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

      {filterIsVisible && (
        <Filter setVisible={setFilterIsVisible} visible={filterIsVisible} />
      )}
    </Container>
  );
}
