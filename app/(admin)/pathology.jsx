import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { icon } from "../../constants/icons";
import { Ionicons } from "@expo/vector-icons";

const Pathology = () => {
  // Sample data
  const tableData = [
    {
      "Bill No": "Adebayo Michael",
      "Case Id": "col2: ",
      "Reporting Date": "jf",
      "Patient Name": "col3:",
      "Reference Doctor": "col3:",
      "Amount (#)": "fgd",
      "PAid amount (#)": "nf",
      "Balance Amount(#)": "12",
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
    },
    // Add more rows as needed
  ];

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
          Pathology Bill
        </Text>
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
            <View key={row["Case Id"]} style={styles.row}>
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

export default Pathology;
