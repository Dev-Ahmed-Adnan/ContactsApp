import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Store from "./src/Redux/store/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from "./src/navigator/StackNavigator";
import SplashScreen from "./src/screens/SplashScreen";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  ]);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Splash"
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Stack" component={StackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
