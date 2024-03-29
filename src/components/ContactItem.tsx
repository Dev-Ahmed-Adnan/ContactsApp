import React, { useState, FC, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { COLORS } from "../common/styles";
import { AntDesign } from "@expo/vector-icons";
import { useTypedSelector } from "../Redux/store/useTypeSelector";
import { selectedContactsAction } from "../Redux/actions/Types/contacts/selectedContactsAction";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

interface Props {
  item: Contact;
  selectAction: (item: Contact) => void;
  deselectAction: (item: Contact) => void;
}

const ContactItem: FC<Props> = ({ item, selectAction, deselectAction }) => {
  const [selected, setSelected] = useState(false);
  const dispatch: Dispatch<any> = useDispatch();

  const selectionTriger = () => {
    if (!selected) {
      // selectAction(item);
      dispatch(selectedContactsAction(item, "add"));
    } else {
      // deselectAction(item);
      dispatch(selectedContactsAction(item, "remove"));
    }
  };

  const selectedContactList: Contact[] = useTypedSelector(
    (state) => state.selectedContactsReducer.success
  );

  useEffect(() => {
    const newItem = selectedContactList.find((i) => i.id == item.id);
    newItem ? setSelected(true) : setSelected(false);
  }, [selectedContactList]);

  return (
    <View style={styles.contactItemContainer}>
      <Image
        source={require("../../assets/images/profile.jpg")}
        style={styles.contactImage}
      />
      <View style={styles.contactData}>
        <Text style={styles.contactName}>{item.name}</Text>
        {item.status ? (
          <Text style={styles.contactStatus}>{item.status}</Text>
        ) : null}
      </View>
      <TouchableOpacity style={styles.checkMark} onPress={selectionTriger}>
        {selected ? (
          <AntDesign
            name="checkcircle"
            size={WINDOW_WIDTH / 18.5}
            color="rgba(18, 133, 204,1)"
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  contactItemContainer: {
    height: WINDOW_HEIGHT / 13,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  contactImage: {
    height: WINDOW_HEIGHT / 17,
    resizeMode: "cover",
    width: WINDOW_HEIGHT / 17,
    borderRadius: WINDOW_HEIGHT / 17,
  },
  contactData: {
    borderBottomWidth: 1,
    borderColor: COLORS.secondaryColor,
    height: "100%",
    flex: 1,
    marginLeft: "5%",
    justifyContent: "center",
  },
  contactName: {
    color: "white",
    fontSize: WINDOW_WIDTH / 21,
    fontWeight: "500",
  },
  contactStatus: {
    color: COLORS.subtitleColor,
    fontSize: WINDOW_WIDTH / 28,
    fontWeight: "400",
  },
  checkMark: {
    position: "absolute",
    right: "5%",
    alignSelf: "center",
    height: WINDOW_WIDTH / 18,
    width: WINDOW_WIDTH / 18,
    borderRadius: WINDOW_WIDTH / 18,
    borderWidth: 0.5,
    borderColor: "rgba(250,250,250, .4)",
  },
});
