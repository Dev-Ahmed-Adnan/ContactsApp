import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import { COLORS } from "../common/styles";
import ContactItem from "../components/ContactItem";
import SelectedContactItem from "../components/SelectedContactItem";
import { Ionicons } from "@expo/vector-icons";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const ContactsScreen = () => {
  const [selectedList, setSelectedList] = useState([]);
  const [filteredContactList, setFilteredContactList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const data = [
    {
      id: 1,
      name: "Ahmed",
      status: "Hi There!",
      image: require("../../assets/images/profile1.jpg"),
    },
    {
      id: 2,
      name: "Adnan",
      status: "Hi There!",
      image: require("../../assets/images/profile1.jpg"),
    },
    {
      id: 3,
      name: "Saeed",
      status: "Hi There!",
      image: require("../../assets/images/profile1.jpg"),
    },
    {
      id: 4,
      name: "Ibrahim",
      status: "Hi There!",
      image: require("../../assets/images/profile1.jpg"),
    },
    {
      id: 5,
      name: "Ahmed Adnan",
      status: "",
      image: require("../../assets/images/profile1.jpg"),
    },
    {
      id: 6,
      name: "Adnan Ahmed",
      status: "Hi There Hi There!",
      image: require("../../assets/images/profile1.jpg"),
    },
  ];

  //* rendering the contact list items
  const renderContactItem = ({ item }) => {
    return (
      <ContactItem
        item={item}
        selectAction={(item) => {
          var temp = [...selectedList, item];
          setSelectedList(temp);
        }}
        deselectAction={(item) => {
          var temp = [...selectedList];
          var index = temp.indexOf(item);
          temp.splice(index, 1);
          setSelectedList(temp);
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
          var temp = [...selectedList];
          var index = temp.indexOf(item);
          temp.splice(index, 1);
          setSelectedList(temp);
        }}
      />
    );
  };

  //* Search Handling
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = data.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredContactList(newData);
      setSearchValue(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredContactList(data);
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
      </View>

      {/* Selected Contacts Section */}
      <View
        style={{
          ...styles.selectedContactsContainer,
          height: selectedList == "" ? 0 : "13%",
        }}
      >
        <FlatList
          data={selectedList}
          keyExtractor={(i) => i.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderSelectedContactItem}
        />
      </View>

      {/* Contacts List Section */}
      <View
        style={{
          ...styles.contactsContainer,
          height: selectedList == "" ? "85%" : "72%",
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
});
