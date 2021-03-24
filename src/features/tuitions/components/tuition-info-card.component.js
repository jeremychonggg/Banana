import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const TuitionCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const TuitionCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const TuitionInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Complete React Native in 2021: Zero to Mastery [with Hooks]",
    icon,
    photos = [
      "https://img-a.udemycdn.com/course/240x135/2994426_f0fa_2.jpg?vWJIFu7abYG2XooYogB-sBeAqn7ftNfoAxW7NB1kz0odiczTywBuq6RvYhJZdkgKwhYul1W144-SLJOUeQattGJY3jRmnp20cvrCTAr2ZnDzwUOjPmjAHfArJZwDofVr",
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
    <TuitionCard elevation={5}>
      <TuitionCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
      <Text>{teacher}</Text>
    </TuitionCard>
  );
};
