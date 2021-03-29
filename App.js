//! >>>>>>>>>> IMPORT START <<<<<<<<<<
//! >>>>>>>>>> IMPORT START <<<<<<<<<<
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
// Import Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Import Icon
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AiOutlineUser } from "react-icons/ai";

// Import Fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// Import Theme
import { theme } from "./src/infrastructure/theme";
// Import Screens
import { TuitionsScreen } from "./src/features/tuitions/screens/tuitions.screen";
import { ProfileScreen } from "./src/features/profile/screens/profile.screen";
//! >>>>>>>>>> IMPORT END <<<<<<<<<<
//! >>>>>>>>>> IMPORT END <<<<<<<<<<

// Navigation Element
const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Tuitions") {
                  iconName = "open-book";
                  return <Entypo name={iconName} size={size} color={color} />;
                } else if (route.name === "Profile") {
                  iconName = "user";
                  return (
                    <AntDesign name={iconName} size={size} color={color} />
                    /*
                    <AiOutlineUser name={iconName} size={size} color={color} />
                    */
                  );
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: "blue",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Tuitions" component={TuitionsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

/*
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Tuitions" component={TuitionsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
*/
