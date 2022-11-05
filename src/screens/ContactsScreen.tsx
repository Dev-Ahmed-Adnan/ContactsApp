import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../common/styles";
import ContactItem from "../components/ContactItem";
import SelectedContactItem from "../components/SelectedContactItem";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useTypedSelector } from "../Redux/store/useTypeSelector";
import { getContactsAction } from "../Redux/actions/Types/contacts/getContactsAction";
import { selectedContactsAction } from "../Redux/actions/Types/contacts/selectedContactsAction";
import { logoutAction } from "../Redux/actions/Types/AuthAction";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const ContactsScreen = () => {
  const [filteredContactList, setFilteredContactList] = useState<
    Contact[] | null
  >([]);
  const [contacts, setContacts] = useState<Contact[] | null | undefined>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(getContactsAction());
  }, []);

  const getContactsLoading: boolean = useTypedSelector(
    (state) => state.getContactsReducer.loading
  );
  const getContactsSuccess: Contact[] = useTypedSelector(
    (state) => state.getContactsReducer.success
  );

  const selectedContactList: Contact[] = useTypedSelector(
    (state) => state.selectedContactsReducer.success
  );

  // useEffect(() => {
  //   console.log("selectedItemsRedux ===>", selectedContactList[0]);
  // }, [selectedContactList]);

  useEffect(() => {
    if (getContactsSuccess.length > 0) {
      setFilteredContactList(getContactsSuccess);
      setContacts(getContactsSuccess);
    }
  }, [getContactsSuccess]);

  //* rendering the contact list items
  const renderContactItem = ({ item }) => {
    return (
      <ContactItem
        item={item}
        selectAction={(item) => {
          dispatch(selectedContactsAction(item, "add"));
        }}
        deselectAction={(item) => {
          dispatch(selectedContactsAction(item, "remove"));
        }}
      />
    );
  };

  //* rendering the selected contact list items in the top section
  const renderSelectedContactItem = ({ item }) => {
    return (
      <SelectedContactItem
        item={item}
        deselectAction={(item) => {
          dispatch(selectedContactsAction(item, "remove"));
        }}
      />
    );
  };

  //* Search Handling
  const searchFilterFunction = (text: string) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the contacts and update filteredContactList
      const newData = contacts.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredContactList(newData);
      setSearchValue(text);
    } else {
      // Inserted text is blank
      // Update filteredContactList with data
      setFilteredContactList(contacts);
      setSearchValue(text);
    }
  };

  return (
    <View style={styles.screenContainer}>
      {/* Search Bar Section */}
      <View style={styles.upperSectionContainer}>
        <View style={styles.searchBarContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color={COLORS.subtitleColor}
            style={{ marginHorizontal: 5 }}
          />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            value={searchValue}
            onChangeText={searchFilterFunction}
            placeholderTextColor={COLORS.subtitleColor}
          />
        </View>
        <TouchableOpacity
          style={styles.logoutContainer}
          onPress={() => dispatch(logoutAction())}
        >
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Selected Contacts Section */}
      <View
        style={{
          ...styles.selectedContactsContainer,
          height: selectedContactList.length < 1 ? 0 : "13%",
        }}
      >
        <FlatList
          data={selectedContactList}
          keyExtractor={(i) => i.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderSelectedContactItem}
        />
      </View>

      {/* Contacts List Section */}
      {getContactsLoading ? (
        <View style={styles.container}>
          <ActivityIndicator size={"large"} color="white" />
        </View>
      ) : getContactsSuccess ? (
        <View
          style={{
            ...styles.contactsContainer,
            height: selectedContactList.length < 1 ? "85%" : "72%",
          }}
        >
          <FlatList
            data={filteredContactList}
            keyExtractor={(i) => i.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={renderContactItem}
            ListHeaderComponent={() => (
              <View style={styles.listHeaderComponent}>
                <Text style={styles.listHeaderText}>A</Text>
              </View>
            )}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "white" }}>
            Something Went Wrong!
          </Text>
        </View>
      )}
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryColor,
  },
  upperSectionContainer: {
    height: "15%",
    width: "100%",
    backgroundColor: COLORS.secondaryColor,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "5%",
  },
  searchBarContainer: {
    width: "90%",
    height: WINDOW_HEIGHT / 24,
    borderRadius: 10,
    backgroundColor: "rgba(79,74,80,1)",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchInput: {
    color: "white",
    fontSize: WINDOW_WIDTH / 25,
    flex: 1,
  },
  logoutContainer: {
    position: "absolute",
    bottom: WINDOW_HEIGHT / 14,
    right: 20,
  },
  logoutButton: {
    color: "rgba(29, 126, 191,1)",
    fontSize: WINDOW_WIDTH / 28,
    fontWeight: "500",
  },
  selectedContactsContainer: {
    width: "100%",
  },
  contactsContainer: {
    width: "100%",
  },
  listHeaderComponent: {
    height: WINDOW_HEIGHT / 25,
    width: "100%",
    backgroundColor: COLORS.secondaryColor,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: "5%",
  },
  listHeaderText: {
    color: "white",
    fontSize: WINDOW_WIDTH / 22,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
