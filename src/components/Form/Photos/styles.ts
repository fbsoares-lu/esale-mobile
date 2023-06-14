import { Plus } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-bottom: 32px;
`;

export const ImageText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.gray_two};
  margin-bottom: 4px;
`;

export const ImageDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.inter_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.gray_tree};
  margin-bottom: 16px;
`;

export const Images = styled.FlatList`
  flex-direction: row;
`;

export const ImageBox = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  background-color: ${({ theme }) => theme.COLORS.gray_five};
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  margin-right: 10px;
`;

export const AnnouncementPhoto = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.gray_four,
}))``;
