import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { phone, email, location } from "../constants/icons";

const emergency = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Emergency?</Text>
      <View style={styles.card}>
        <View style={styles.ccard}>
          <Text style={{ fontWeight: "300", fontSize: "16", color: "#fff" }}>
            Email Address
          </Text>{" "}
          <Image source={email} style={styles.img} />
        </View>
        <Text style={{ fontWeight: "400", fontSize: "24", color: "#fff" }}>
          info@sthhospital.com
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.ccard}>
          <Text style={{ fontWeight: "300", fontSize: "16", color: "#fff" }}>
            Ulakwo Hot Junction
          </Text>

          <Image source={location} style={styles.img} />
        </View>

        <Text style={{ fontWeight: "400", fontSize: "24", color: "#fff" }}>
          Owerri North Local Government Area of Imo State.
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.ccard}>
          <Text style={{ fontWeight: "300", fontSize: "16", color: "#fff" }}>
            Phone No
          </Text>

          <Image source={phone} style={styles.img} />
        </View>
        <Text style={{ fontWeight: "400", fontSize: "24", color: "#fff" }}>
          +2348123456789
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 50,
    fontWeight: 600,
    shadowColor: "#0B0B38", // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow transparency
    shadowRadius: 6, // Shadow blur
  },
  ccard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  img: {
    width: 50,
    height: 50,
  },
  card: {
    borderRadius: 10,
    borderWidth: 0.5,
    width: "80%",
    height: "22%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow transparency
    shadowRadius: 6, // Shadow blur
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#0B0B38",
  },
});

export default emergency;
