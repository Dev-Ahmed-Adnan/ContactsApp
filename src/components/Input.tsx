import React, { FC } from "react";
import { StyleSheet, TextInput, Dimensions } from "react-native";
import { COLORS } from "../common/styles";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
}

const Input: FC<Props> = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      style={styles.authInput}
      placeholderTextColor={COLORS.subtitleColor}
      autoCorrect={false}
      secureTextEntry={props.isPassword ? true : false}
      autoCapitalize={props.isPassword ? "none" : "sentences"}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
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
});
