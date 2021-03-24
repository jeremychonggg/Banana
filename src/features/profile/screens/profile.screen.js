//! >>>>>>>>>> IMPORT START <<<<<<<<<<
//! >>>>>>>>>> IMPORT START <<<<<<<<<<
import React from "react";
import { StatusBar, Text, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";

// Import from General Component
//import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { ProfileInfoCard } from "../components/profile-info-card.component";
//! >>>>>>>>>> IMPORT END <<<<<<<<<<
//! >>>>>>>>>> IMPORT END <<<<<<<<<<

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const ProfileScreen = () => (
  <SafeArea>
    <Title>Profile Screen</Title>
    <ProfileInfoCard />
  </SafeArea>
);

/*
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const TuitionListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const TuitionsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <TuitionListContainer>
      <TuitionInfoCard />
    </TuitionListContainer>
  </SafeArea>
);
*/