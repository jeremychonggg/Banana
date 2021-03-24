//! >>>>>>>>>> IMPORT START <<<<<<<<<<
//! >>>>>>>>>> IMPORT START <<<<<<<<<<
import styled from "styled-components/native";
import { Card } from "react-native-paper";
//! >>>>>>>>>> IMPORT END <<<<<<<<<<
//! >>>>>>>>>> IMPORT END <<<<<<<<<<

export const TuitionCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const TuitionCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Description = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
