import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { COLORS } from "../common/styles";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { signInAction } from "../Redux/actions/Types/AuthAction";
import Input from "../components/Input";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState<string | null | undefined>("");
  const [password, setPassword] = useState<string | null | undefined>("");
  const dispatch: Dispatch<any> = useDispatch();

  const singInHandle = () => {
    dispatch(signInAction(username, password));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.scrollView}
    >
      <ScrollView>
        <View style={styles.screenContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Input
            onChangeText={setUsername}
            placeholder="Username"
            value={username}
          />
          <Input
            onChangeText={setPassword}
            placeholder="Password"
            value={password}
            isPassword
          />
          <TouchableOpacity
            style={styles.authButton}
            onPress={() => singInHandle()}
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
