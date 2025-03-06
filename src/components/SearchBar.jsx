import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { BlurView } from "expo-blur"

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <BlurView intensity={20} style={styles.blurContainer}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="#FFFFFF" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search Assessment"
            placeholderTextColor="#FFFFFF80"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </BlurView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  blurContainer: {
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
  },
  filterButton: {
    padding: 4,
  },
})

export default SearchBar

