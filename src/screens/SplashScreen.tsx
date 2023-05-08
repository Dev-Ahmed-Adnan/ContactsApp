import React, { useEffect } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../Redux/store/useTypeSelector";
import { Dispatch } from "redux";
import { checkUserAction } from "../Redux/actions/Types/AuthAction";
import { COLORS } from "../common/styles";

const SplashScreen = ({ navigation }) => {
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(checkUserAction());
  }, []);

  const checkUserSuccess = useTypedSelector(
    (state) => state.authReducer.success
  );

  useEffect(() => {
    if (checkUserAction) {
      navigation.navigate("Stack");
    }
  }, [checkUserSuccess]);

  return (
    <View style={styles.screenContainer}>
      <ActivityIndicator size={"large"} color="white" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },
});
