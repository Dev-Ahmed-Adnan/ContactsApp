import React, { useState, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useTypedSelector } from "../Redux/store/useTypeSelector";
import { signUpAction } from "../Redux/actions/Types/AuthAction";
import Input from "../components/Input";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState<string | undefined | null>("");
  const [password, setPassword] = useState<string | undefined | null>("");
  const dispatch: Dispatch<any> = useDispatch();

  const singInHandle = () => {
    dispatch(signUpAction(username, password));
  };

  const singUploading = useTypedSelector((state) => state.authReducer.loading);
  const singUpSuccess = useTypedSelector((state) => state.authReducer.success);
  const singUpEmail = useTypedSelector((state) => state.authReducer.email);

  useEffect(() => {
    if (singUpSuccess) {
      navigation.navigate("Contacts");
    }
  }, [singUploading, singUpSuccess]);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Register</Text>
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
          <Text style={styles.authButtonTitle}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subTitle}>Already Have Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
            <Text style={styles.subTitleButton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

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
