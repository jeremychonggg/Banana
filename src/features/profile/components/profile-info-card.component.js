import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const ProfileCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ProfileCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const ProfileInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Jeremy Chong",
    icon,
    photos = [
      "https://media-exp1.licdn.com/dms/image/C5603AQEsBpbHJnpNjw/profile-displayphoto-shrink_200_200/0/1568603387603?e=1620864000&v=beta&t=zSplDAt4Kym6ST_5--h_sSYHR6WmUWkqy5ObqGYM3sg",
    ],
    address = "random address",
    teacher = "Andrei Neagoie",
    duration = 2,
    isOpenNow = true,
    rating = 4.7,
    studentAmount = 225,
    isClosedTemporarily,
    price = 11.99,
    label = "Highest Rated",
  } = restaurant;

  return (
    <ProfileCard elevation={5}>
      <ProfileCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </ProfileCard>
  );
};
