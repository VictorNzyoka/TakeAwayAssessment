import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AlertCircle } from "lucide-react-native"; // Import from lucide-react-native

const NotImplemented = ({ feature }) => {
  return (
    <View style={styles.container}>
      <AlertCircle size={48} color="#6B7280" style={styles.icon} />
      <Text style={styles.title}>{feature} is not available yet</Text>
      <Text style={styles.subtitle}>We're working on it. Stay tuned!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1B4B",
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#374151",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
});

export default NotImplemented;
