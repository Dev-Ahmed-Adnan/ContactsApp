import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { COLORS } from "../common/styles";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../Redux/actions/Types/AuthAction";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const singInHandle = () => {
    dispatch(signInAction(username, password));
  };

  const singInloading = useSelector((state) => state.authReducer.loading);
  const singInSuccess = useSelector((state) => state.authReducer.success);
  const singInEmail = useSelector((state) => state.authReducer.email);
  const singInPassword = useSelector((state) => state.authReducer.password);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.scrollView}
    >
      <ScrollView>
        <View style={styles.screenContainer}>
          <Text style={styles.title}>Sign In</Text>
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
            onPress={() => singInHandle()}
            // onPress={() => navigation.navigate("Contacts")}
          >
            <Text style={styles.authButtonTitle}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subTitle}>Don't Have Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
              <Text style={styles.subTitleButton}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  subtitleContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  subTitle: {
    color: "white",
    fontSize: WINDOW_WIDTH / 30,
    fontWeight: "400",
  },
  subTitleButton: {
    color: "rgba(29, 126, 191,1)",
    fontSize: WINDOW_WIDTH / 30,
    fontWeight: "400",
    marginLeft: 10,
  },
});
