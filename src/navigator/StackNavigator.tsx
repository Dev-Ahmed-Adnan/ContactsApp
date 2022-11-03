import React from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../Redux/store/useTypeSelector";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactsScreen from "../screens/ContactsScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const singUpSuccess = useTypedSelector((state) => state.authReducer.success);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      {!singUpSuccess ? (
        <>
          <Stack.Screen name="Sign In" component={SignInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
        </>
      ) : (
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
