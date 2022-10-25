import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const SelectedContactItem = ({ item, deselectAction = () => {} }) => {
  return (
    <View style={styles.selectedItemContainer}>
      <Image source={item.image} style={styles.contactImage} />
      <View style={{ height: "5%" }} />
      <Text style={styles.contactName} numberOfLines={1}>
        {item.name}
      </Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => deselectAction(item)}
      >
        <Ionicons name="close" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SelectedContactItem;

const styles = StyleSheet.create({
  selectedItemContainer: {
    width: WINDOW_WIDTH / 5,
    height: "100%",
    paddingHorizontal: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  contactImage: {
    width: WINDOW_WIDTH / 6.5,
    height: WINDOW_WIDTH / 6.5,
    resizeMode: "cover",
    borderRadius: "80%",
  },
  contactName: {
    color: "white",
    fontSize: WINDOW_WIDTH / 35,
    fontWeight: "400",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    right: "11%",
    top: "11%",
    backgroundColor: "grey",
    borderRadius: WINDOW_WIDTH / 5,
    width: WINDOW_WIDTH / 18,
    height: WINDOW_WIDTH / 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
