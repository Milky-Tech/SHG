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
import {
  appointment,
  bloodBank,
  icon,
  opdPatient,
  pathology,
  radiology,
} from "../../constants/icons";
import { Ionicons } from "@expo/vector-icons";

const Billing = () => {
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
          Billing
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          borderColor: "#0B0B38",
          borderWidth: 1,
          marginHorizontal: 7,
        }}
      >
        <Text
          style={{
            fontSize: 21,
            fontWeight: 500,
            marginTop: 20,
            marginBottom: 10,
            borderBottomColor: "#0B0B38",
            borderBottomWidth: 1,
          }}
        >
          Single Module Billing
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity style={styles.card}>
            <Image
              resizeMode="contain"
              style={{ width: "60%" }}
              source={appointment}
            ></Image>
            <Text style={{ fontSize: 14, fontWeight: 500 }}>Appointments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              resizeMode="contain"
              style={{ width: "60%" }}
              source={opdPatient}
            ></Image>
            <Text style={{ fontSize: 14, fontWeight: 500 }}>OPD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="flask" size={70} color={"green"} />
            <Text style={{ fontSize: 14, fontWeight: 500 }}>pathology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              resizeMode="contain"
              style={{ width: "60%" }}
              source={radiology}
            ></Image>
            <Text style={{ fontSize: 14, fontWeight: 500 }}>Radiology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="water" size={70} color={"red"} />
            <Text style={{ fontSize: 14, fontWeight: 500 }}>Blood Issue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="water-outline" size={70} color={"red"} />
            <Text style={{ fontSize: 14, fontWeight: 500 }}>
              Blood Component Issues
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          borderColor: "#0B0B38",
          borderWidth: 1,
          marginHorizontal: 7,
        }}
      >
        <Text
          style={{
            fontSize: 21,
            fontWeight: 500,
            marginTop: 20,
            marginBottom: 10,
            borderBottomColor: "#0B0B38",
            borderBottomWidth: 1,
          }}
        >
          OPD/IPD Billing Through Case Id
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            height: 400,
          }}
        ></View>
      </View>
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
  card: {
    marginBottom: 20,
    width: "31%",
    alignItems: "center",
    backgroundColor: "#fff", // Card background color
    padding: 10, // Inner padding for card content
    borderRadius: 10, // Slightly curved edges
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Shadow blur
    elevation: 3, // Shadow for Android
  },
});

export default Billing;
