import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Store from "./src/Redux/store/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactsScreen from "./src/screens/ContactsScreen";
import SignInScreen from "./src/screens/SignInScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Sign In" component={SignInScreen} />
          <Stack.Screen name="Contacts" component={ContactsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
