import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Switch, 
  StyleSheet, 
  Text, 
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { useAddAssessmentMutation } from '../redux/features/assessmentApi';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SingleSelectDropdown from '../components/SingleSelectDropdown';

const CreateAssessment = () => {
  const [title, setTitle] = useState('');
  const [strand, setStrand] = useState('Letter Naming Uppercase');
  const [subStrand, setSubStrand] = useState('A B C D E');
  const [allDay, setAllDay] = useState(false);
  const [alert, setAlert] = useState(false);

  const navigation = useNavigation();
  const [addAssessment, { isLoading }] = useAddAssessmentMutation();

  // Sample options for dropdowns
  const strandOptions = [
    'Letter Naming Uppercase',
    'Letter Naming Lowercase',
    'Letter Sound Recognition',
    'Phonological Awareness',
    'Vocabulary Development',
    'Reading Comprehension'
  ];

  const subStrandOptions = [
    'A B C D E',
    'F G H I J',
    'K L M N O',
    'P Q R S T',
    'U V W X Y Z',
    'Short Vowel Sounds',
    'Long Vowel Sounds'
  ];

  const handleSave = async () => {
    if (!title) {
      Alert.alert("Error", "Please enter a title");
      return;
    }

    if (!strand) {
      Alert.alert("Error", "Please select a strand");
      return;
    }

    if (!subStrand) {
      Alert.alert("Error", "Please select a sub strand");
      return;
    }

    const assessment = {
      title,
      strand,
      subStrand,
      allDay,
      alert,
      completion: "85%",
      date: new Date("2025-11-03").toISOString()
    };

    try {
      await addAssessment(assessment).unwrap();
      navigation.goBack();
    } catch (err) {
      console.error('Error saving assessment:', err);
      Alert.alert("Error", "Failed to save assessment");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingContainer}
      >
        {/* Fixed Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>New Assessment</Text>
        </View>
        
        {/* Scrollable Content */}
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Title</Text>
            <TextInput 
              placeholder="Eg. Read Book" 
              placeholderTextColor="#6B7280"
              value={title} 
              onChangeText={setTitle} 
              style={styles.input} 
            />
          </View>

          <View style={styles.inputGroup}>
            <SingleSelectDropdown
              label="Strand"
              options={strandOptions}
              selectedItem={strand}
              onSelectionChange={setStrand}
              placeholder="Select a strand"
            />
          </View>

          <View style={styles.inputGroup}>
            <SingleSelectDropdown
              label="Sub strand"
              options={subStrandOptions}
              selectedItem={subStrand}
              onSelectionChange={setSubStrand}
              placeholder="Select a sub strand"
            />
          </View>

          <View style={styles.toggleGroup}>
            <View>
              <Text style={styles.toggleLabel}>All day</Text>
              {allDay && <Text style={styles.toggleSubText}>Monday, 18th Oct</Text>}
            </View>
            <Switch
              value={allDay}
              onValueChange={setAllDay}
              trackColor={{ false: '#3F3F46', true: '#22C55E' }}
              thumbColor="#fff"
            />
          </View>

          <View style={styles.toggleGroup}>
            <View>
              <Text style={styles.toggleLabel}>Alert</Text>
              {alert && <Text style={styles.toggleSubText}>1 day before class</Text>}
            </View>
            <Switch
              value={alert}
              onValueChange={setAlert}
              trackColor={{ false: '#3F3F46', true: '#22C55E' }}
              thumbColor="#fff"
            />
          </View>
          
          {/* Add extra space at the bottom for better scrolling */}
          <View style={styles.bottomPadding} />
        </ScrollView>
        
        {/* Fixed Save Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.saveButton} 
            onPress={handleSave}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <Text style={styles.saveButtonText}>Save</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B4B',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    color: '#94A3B8',
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#252A5B',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    fontSize: 16,
  },
  toggleGroup: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  toggleLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
  toggleSubText: {
    color: '#0000ff',
    fontSize: 14,
  },
  bottomPadding: {
    height: 20,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#1A1B4B',
  },
  saveButton: {
    backgroundColor: '#FFD93D',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateAssessment;