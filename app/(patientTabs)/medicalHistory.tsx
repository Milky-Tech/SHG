import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const medicalHistory = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    age: 35,

    gender: "Male",
    bloodGroup: "B+",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    medicalHistory: [
      {
        date: "2023-12-10",
        condition: "Fever",
        prescription: "Paracetamol",
      },
      {
        date: "2024-02-14",
        condition: "Headache",
        prescription: "Ibuprofen",
      },
    ],
  });
  return (
    <View style={styles.container}>
      <View style={styles.recordContainer}>
        {userData.medicalHistory.map((record, index) => (
          <View key={index} style={styles.recordItem}>
            <Text style={styles.recordText}>Date: {record.date}</Text>
            <Text style={styles.recordText}>Condition: {record.condition}</Text>
            <Text style={styles.recordText}>
              Prescription: {record.prescription}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  recordContainer: {
    backgroundColor: "#f9f5ff",
  },
  recordItem: {
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  recordText: {
    fontSize: 16,
  },
});

export default medicalHistory;
