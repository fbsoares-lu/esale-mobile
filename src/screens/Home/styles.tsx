import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { MagnifyingGlass, Sliders, SignOut } from "phosphor-react-native";
import { FlatList, TextInput } from "react-native";

interface ICardStateProps {
  state: any;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.secondary};
`;

export const BackgroundHeader = styled.View`
  padding-top: ${getStatusBarHeight() + 36}px;
  background-color: ${({ theme }) => theme.COLORS.primary};
`;

export const Logo = styled.Image`
  width: 80px;
  height: 30px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 40px;
`;

export const GreetBox = styled.View``;

export const Greet = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const SignoutIcon = styled(SignOut).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.secondary,
  weight: "bold",
}))``;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.white};
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.white};
`;

export const AvatarCircle = styled.View`
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.white};
  border-width: 1px;

  margin-right: 8px;
`;

export const SearchBar = styled.View`
  height: 48px;
  align-items: center;
  padding: 0 20px;
  flex-direction: row;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.COLORS.white};
  margin: 0 24px;

  margin-top: -24px;
`;

export const IconsBox = styled.View`
  flex-direction: row;
`;

export const Divider = styled.View`
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.gray_four};
  margin: 0 12px;
`;

export const Card = styled.View`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.white};

  height: 160px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;

  position: absolute;
`;

export const AvatarCircleCard = styled.View``;

export const CardState = styled.View<ICardStateProps>`
  background-color: ${(p) =>
    p.state === "new" ? p.theme.COLORS.primary : p.theme.COLORS.gray_two};
  border-radius: 10px;
  padding: 2px 6px;
`;

export const ExchangeTag = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ theme }) => theme.COLORS.white};
`;

export const CardName = styled.Text`
  margin-top: 8px;
  margin-left: 8px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.gray_two};
`;

export const CardPrice = styled.Text`
  margin-left: 8px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.gray_two};
`;

export const ListHeader = styled.View`
  margin: 12px 24px;
  flex-direction: column;
`;

export const ListTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.gray_one};
`;

export const AnnounctmentCount = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.gray_two};
`;

export const SearchButton = styled.TouchableOpacity``;
export const FilterButton = styled.TouchableOpacity``;

export const SearchIcon = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.black,
  weight: "bold",
}))``;

export const FilterIcon = styled(Sliders).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.black,
  weight: "bold",
}))``;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholder: "Buscar anuncio",
  placeholderTextColor: theme.COLORS.gray_four,
}))`
  flex: 1;
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_400};
  color: ${({ theme }) => theme.COLORS.black};
`;

export const ListProducts = styled.FlatList``;
