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
import { icon } from "../../constants/icons";
// import { Picker } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";

const Appointment = () => {
  // Sample data
  const tableData = [
    {
      "Patient Name": "1jf",
      "Appointment No": "col2: ",
      "Appointment Date": "col3:",
      Phone: "col3:",
      Gender: "jf",
      Doctor: "fgd",
      Source: "nf",
      Priority: "jkf",
      "Live Consultant": "col3:",
      Fees: "col3:",
      status: "col3:",
    },
    {
      col1: "A2",
      col2: "B2",
      col3: "C2",
      col4: "Dfghjkl2",
      col5: "E2",
      col6: "F2",
      col7: "G2",
      col8: "H2",
      col9: "I2",
      col10: "J2",
      col11: "K2",
    },
    {
      col1: "A3",
      col2: "B3",
      col3: "C3",
      col4: "D3",
      col5: "E3",
      col6: "F3",
      col7: "G3",
      col8: "H3",
      col9: "I3",
      col10: "J3",
      col11: "K3",
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
    <ScrollView vertical style={styles.container}>
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
          Appointment Details
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
                placeholderTextColor="#888"
                placeholder="Doctor"
                value={formData.name}
                onChangeText={(text) =>
                  setFormData({ ...formData, Doctor: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#888"
                placeholder="Doctor Fees"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, "appointment date": text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Appointment Date"
                placeholderTextColor="#888"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, "appointment date": text })
                }
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#888"
                placeholder="Priority"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, "appointment date": text })
                }
              />
              <View>
                {/* <Picker
                  selectedValue={formData.Priority}
                  onValueChange={(itemValue) =>
                    setFormData({ ...formData, Priority: itemValue })
                  }
                >
                  <Picker.Item label="Normal" value="normal" />
                  <Picker.Item label="Urgent" value="urgent" />
                  <Picker.Item label="Very Urgent" value="very Urgent" />
                  <Picker.Item label="Low" value="Low" />
                </Picker> */}
              </View>

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

        <Ionicons name="download-outline" size={25} color="blue" />
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
            <View key={row["Appointment No"]} style={styles.row}>
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
});

export default Appointment;
