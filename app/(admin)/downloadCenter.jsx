import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { download, icon } from "../../constants/icons";

const DownloadCenter = () => {
  // Sample data
  const tableData = [
    {
      "Content Title": "Adebayo Michael",
      Type: "col2: ",
      Date: "col3:",
      Description: "col3:",

      Action: "fgd",
    },
    {
      col1: "A2",
      col2: "B2",
      col3: "C2",
      col4: "Dfghjkl2",
      col5: "E2",
    },
    {
      col1: "A3",
      col2: "B3",
      col3: "C3",
      col4: "D3",
      col5: "E3",
    },
    // Add more rows as needed
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleFormSubmit = () => {
    console.log("Form Data:", formData);
    setModalVisible(false); // Close the modal after submission
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Image style={styles.img} source={icon} resizeMode="contain" />
      </View>
      {/* Horizontal Scroll for wide table */}
      <View
        style={{
          padding: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Content List
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              backgroundColor: "#0D8F83",
              color: "#fff",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
          >
            + Add
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} // Handle back button press
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Create Appoointment</Text>

              {/* Form Fields */}
              <TextInput
                style={styles.input}
                placeholder="Doctor"
                value={formData.name}
                onChangeText={(text) =>
                  setFormData({ ...formData, Doctor: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Doctor Fees"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, "appointment date": text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Appointment Date"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, "appointment date": text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Priority"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, "appointment date": text })
                }
              />

              {/* Submit Button */}
              <Button title="Submit" onPress={handleFormSubmit} />

              {/* Close Modal */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Image
          source={download}
          resizeMode="contain"
          style={{
            width: "8%",
            height: "65%",
          }}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <View>
          {/* Header Row */}
          <View style={[styles.row, styles.headerRow]}>
            {Object.keys(tableData[0]).map((key, index) => (
              <Text key={index} style={[styles.cell, styles.headerCell]}>
                {key.toUpperCase()}
              </Text>
            ))}
          </View>

          {/* Data Rows */}
          {tableData.map((row, rowIndex) => (
            <View key={row[Date]} style={styles.row}>
              {Object.values(row).map((value, colIndex) => (
                <Text key={colIndex} style={styles.cell}>
                  {value}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  topBar: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 80,
    borderBottomWidth: 0.1,
    borderBottomColor: "#000",
    padding: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Shadow blur
    elevation: 3, // Shadow for Android
  },
  img: {
    width: "60%",
    height: "90%",
    marginTop: "5",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerRow: {
    backgroundColor: "#007AFF",
  },
  cell: {
    width: 100, // Adjust width based on content
    padding: 10,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#ddd",
  },
  headerCell: {
    fontWeight: "bold",
    color: "#fff",
  },
  openButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim background
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim background
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#FF3B30",
    padding: 10,
    borderRadius: 5,
  },
});

export default DownloadCenter;
