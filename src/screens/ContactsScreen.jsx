import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ContactsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>ContactsScreen</Text>
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
