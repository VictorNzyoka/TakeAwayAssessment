import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SingleSelectDropdown = ({
  label,
  options,
  selectedItem,
  onSelectionChange,
  placeholder = 'Select an item'
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const selectItem = (item) => {
    onSelectionChange(item);
    setModalVisible(false);
  };

  const displayText = selectedItem || placeholder;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      
      <TouchableOpacity 
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text 
          style={[
            styles.dropdownText, 
            !selectedItem && styles.placeholderText
          ]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {displayText}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#fff" />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Select {label}</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Ionicons name="close" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
                
                <FlatList
                  data={options}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() => selectItem(item)}
                    >
                      <Text style={styles.optionText}>{item}</Text>
                      {selectedItem === item ? (
                        <Ionicons name="radio-button-on" size={24} color="#22C55E" />
                      ) : (
                        <Ionicons name="radio-button-off" size={24} color="#94A3B8" />
                      )}
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#94A3B8',
    marginBottom: 8,
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: '#252A5B',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  placeholderText: {
    color: '#6B7280',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#1A1B4B',
    borderRadius: 12,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#252A5B',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#252A5B',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SingleSelectDropdown;