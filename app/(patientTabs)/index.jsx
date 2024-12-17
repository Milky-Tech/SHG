import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { amblance, doctor, pharmacy } from "../../constants/icons";
const PatientDashboard = () => {
  const userData = {
    name: "John Doe",
    age: 30,
    gender: "Male",
  };

  const appointments = [
    { id: 1, date: "2024-11-28", time: "10:00 AM", doctor: "Dr. Sarah Smith" },
    { id: 2, date: "2024-12-05", time: "02:30 PM", doctor: "Dr. Alex Brown" },
  ];

  const icons = [
    { id: "1", label: "Medicine", icon: pharmacy },
    { id: "2", label: "Consultant", icon: doctor },
    {
      id: "3",
      label: "Amblance",
      icon: amblance,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Replace with a real image URL
          style={styles.avatar}
        />
        <Text style={styles.name}>Welcome! {userData.name}</Text>
      </View>

      {/* {Ecare services} */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ecare Services</Text>

        <FlatList
          data={icons}
          numColumns={3}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "column",
                width: "30%",
                alignItems: "center",
              }}
            >
              <TouchableOpacity style={styles.card1}>
                <Image
                  style={styles.ico}
                  source={item.icon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.label}>{item.label}</Text>
            </View>
          )}
        />
      </View>

      {/* Appointments Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Appointment</Text>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <View key={appointment.id} style={styles.card}>
              <Text style={styles.cardTitle}>Dr. {appointment.doctor}</Text>
              <Text style={styles.cardDetails}>
                Date: {appointment.date} | Time: {appointment.time}
              </Text>
            </View>
          ))
        ) : (
          <View
            style={{
              width: "100%",
              height: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#8b8888" }}>
              You have no upcoming appointment
            </Text>
          </View>
        )}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request New Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0D8F83",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  info: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  userDetails: {
    fontSize: 14,
    color: "#fff",
  },

  ico: {
    width: "90%",
    height: "75",
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  card1: {
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff", // Card background color
    padding: 16, // Inner padding for card content
    borderRadius: 100, // Slightly curved edges
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Shadow blur
    elevation: 3, // Shadow for Android
  },

  card: {
    backgroundColor: "#fff",

    padding: 15,
    marginBottom: 10,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardDetails: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#0B0B38",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default PatientDashboard;
