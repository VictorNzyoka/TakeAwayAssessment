import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const AssessmentCard = ({ assessment }) => {
  const performanceData = {
    belowExpectations: { value: 5, color: "#FF4B4B", icon: "sad-outline" },
    approachingExpectations: { value: 25, color: "#FFD93D", icon: "happy-outline" },
    meetingExpectations: { value: 20, color: "#4CAF50", icon: "happy-outline" },
    exceedingExpectations: { value: 50, color: "#0000FF", icon: "happy-outline" },
  };

  return (
    <View style={styles.cardWrapper}>
    <LinearGradient colors={["#4A6EDB", "#3249A6"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.card}>
      {/* Overlay Soft Circular Patterns */}
      <View style={[styles.circle, styles.mainCircle1]} />
      <View style={[styles.circle, styles.outerCircle1]} />
      <View style={[styles.circle, styles.outerCircle2]} />
      
      <View style={[styles.circle, styles.mainCircle2]} />
      <View style={[styles.circle, styles.outerCircle3]} />
      <View style={[styles.circle, styles.outerCircle4]} />
      <View style={styles.content}>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Name: </Text>
          {assessment.title}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.label}>Strand: </Text>
          {assessment.strand}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.label}>Sub Strand: </Text>
          {assessment.subStrand}
        </Text>

        <View style={styles.completionRow}>
          <Text style={[styles.infoText, styles.label, { marginBottom: 0 }]}>Completion:</Text>
          <View style={styles.completionBadge}>
            <Text style={styles.completionText}>{assessment.completion}</Text>
          </View>
        </View>

        <Text style={styles.infoText}>
          <Text style={styles.label}>Date: </Text>
          {assessment.date}
        </Text>

        {/* Circular Performance Indicators */}
        <View style={styles.performanceCirclesContainer}>
          {Object.values(performanceData).map((item, index) => (
            <View key={index} style={[styles.performanceCircle(item.value), { backgroundColor: item.color, marginHorizontal: 2 }]}>
              <Text style={styles.circleText}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Performance Labels */}
        <View style={styles.performanceLabels}>
          <Text style={styles.performanceLabel}>Below{"\n"}expectations</Text>
          <Text style={styles.performanceLabel}>Approaching{"\n"}Expectations</Text>
          <Text style={styles.performanceLabel}>Meeting{"\n"}Expectations</Text>
          <Text style={styles.performanceLabel}>Exceeding{"\n"}Expectations</Text>
        </View>

        {/* Performance Icons with Values */}
        <View style={styles.emojiContainer}>
          {Object.values(performanceData).map((item, index) => (
            <View key={index} style={styles.emojiItem}>
              <Ionicons name={item.icon} size={24} color={item.color} style={{ marginRight: 8 }} />
              <Text style={styles.emojiText}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    cardWrapper: {
        position: "relative",
      },
      card: {
        borderRadius: 20,
        marginVertical: 8,
        overflow: "hidden",
        padding: 20,
      },
      circle: {
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 100,
      },
      mainCircle1: {
        width: 80,
        height: 80,
        top: -20,
        left: -20,
      },
      outerCircle1: {
        width: 110,
        height: 110,
        top: -35,
        left: -35,
      },
      outerCircle2: {
        width: 140,
        height: 140,
        top: -50,
        left: -50,
      },
      mainCircle2: {
        width: 90,
        height: 110,
        top: 30,
        right: -30,
      },
      outerCircle3: {
        width: 160,
        height: 180,
        top: 10,
        right: -50,
      },
      outerCircle4: {
        width: 200,
        height: 220,
        top: -10,
        right: -70,
      },
      content: {
        zIndex: 1,
      },
  infoText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
  },
  completionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  completionBadge: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 25,
  },
  completionText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  /** Circular Performance Indicators **/
  performanceCirclesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  performanceCircle: (width) => ({
    width: width + 45, // Dynamic width based on value
    height: 40, // Fixed height
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  }),
  circleText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  /** Labels Below Performance Circles **/
  performanceLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  performanceLabel: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
    width: "24%",
  },

  /** Performance Icons with Values **/
  emojiContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emojiItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  emojiText: {
    color: "#000000",
    fontWeight: "bold",
  },
});

export default AssessmentCard;
