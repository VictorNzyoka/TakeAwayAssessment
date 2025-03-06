import React, { useState } from "react";
import { 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  Text, 
  ActivityIndicator ,
  SafeAreaView
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AssessmentCard from "../components/AssessmentCard";
import SearchBar from "../components/SearchBar";
import { useGetAllAssessmentsQuery } from "../redux/features/assessmentApi";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  
  // The refetch function will be called when the screen comes into focus
  const { data: responseData, isLoading, isError, refetch } = useGetAllAssessmentsQuery();

  // This will refetch data when the screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      refetch();
      return () => {};
    }, [refetch])
  );

  // Format date function to handle "Invalid Date"
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "Not specified";
      }
      return date.toLocaleDateString();
    } catch (error) {
      return "Not specified";
    }
  };

  // Get assessments from the response data
  const assessments = responseData?.success && responseData?.data ? responseData.data : [];

  // Filter assessments based on search query
  const filteredAssessments = assessments.filter((assessment) =>
    assessment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorText}>Failed to load assessments</Text>
        <TouchableOpacity onPress={refetch} style={styles.retryButton}>
          <Text style={styles.retryText}>Tap to retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredAssessments.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="document-outline" size={64} color="#FFFFFF50" />
          <Text style={styles.emptyText}>No assessments found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredAssessments}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <AssessmentCard 
              assessment={{
                ...item,
                date: formatDate(item.date)
              }} 
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("CreateAssessment")}
      >
        <Ionicons name="add" size={24} color="#000000" />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

// Styles remain the same
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#1A1B4B",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1A1B4B",
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 16,
  },
  retryButton: {
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
  },
  retryText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "#FFFFFF80",
    fontSize: 16,
    marginTop: 16,
  },
  listContent: {
    paddingBottom: 80, // Add padding to avoid the add button
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#FFD93D",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});