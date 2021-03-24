import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { TuitionsScreen } from "./src/features/tuitions/screens/tuitions.screen";
import { ProfileScreen } from "./src/features/profile/screens/profile.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TuitionsScreen />
        <ProfileScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
