import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../common/styles";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>SignInScreen</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.authInput}
          placeholderTextColor={COLORS.subtitleColor}
          autoCorrect={false}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.authInput}
          placeholderTextColor={COLORS.subtitleColor}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize={false}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => navigation.navigate("Contacts")}
        >
          <Text style={styles.authButtonTitle}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },

  screenContainer: {
    height: WINDOW_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: WINDOW_WIDTH / 15,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
  authInput: {
    width: "85%",
    height: WINDOW_HEIGHT / 20,
    backgroundColor: "rgba(79,74,80,1)",
    borderRadius: WINDOW_WIDTH / 50,
    marginTop: WINDOW_HEIGHT / 50,
    fontSize: WINDOW_WIDTH / 24,
    paddingHorizontal: "5%",
    color: "white",
  },
  authButton: {
    width: WINDOW_WIDTH / 4,
    height: WINDOW_HEIGHT / 20,
    backgroundColor: COLORS.secondaryColor,
    borderRadius: WINDOW_WIDTH / 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: WINDOW_HEIGHT / 20,
  },
  authButtonTitle: {
    color: "white",
    fontSize: WINDOW_WIDTH / 24,
    fontWeight: "600",
  },
});
