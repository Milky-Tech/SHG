import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock API to simulate fetching patient data
  const fetchUserData = async () => {
    try {
      setLoading(true);
      // Simulate API call
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              name: "John Doe",
              age: 35,
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
            }),
          2000
        )
      );
      setUserData(response);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const handleLogout = () => {
    Alert.alert("Logged Out", "You have been successfully logged out.");
    // Perform logout logic here (e.g., clear session, navigate to login screen)
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Loading Profile...</Text>
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Failed to load user data. Please try again later.
        </Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={{ fontWeight: 500, color: "#fff" }}>
            {userData.name}
          </Text>
          <Text style={{ fontWeight: 500, color: "#fff" }}>
            {userData.age} years, {userData.gender}
          </Text>
          <Text style={{ fontWeight: 500, color: "#fff" }}>
            {userData.email}
          </Text>
          <Text style={{ fontWeight: 500, color: "#fff" }}>
            {userData.phone}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Text style={styles.sectionItem}>Age: {userData.age}</Text>
        <Text style={styles.sectionItem}>Gender: {userData.gender}</Text>
        <Text style={styles.sectionItem}>
          Blood Group: {userData.bloodGroup}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medical History</Text>
        <Ionicons name="arrow" />
      </View>

      <View style={styles.gridContainer}>
        {/* Access Health Information */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleFeaturePress("Health Information")}
        >
          <Text style={styles.cardText}>Health Information</Text>
          <Ionicons name="arrow-forward-circle" size={30} color="#7777f5" />
        </TouchableOpacity>

        {/* Schedule Appointments */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleFeaturePress("Schedule Appointments")}
        >
          <Text style={styles.cardText}>Schedule Appointments</Text>
          <Ionicons name="arrow-forward-circle" size={30} color="#7777f5" />
        </TouchableOpacity>

        {/* Request Prescription Refills */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleFeaturePress("Prescription Refills")}
        >
          <Text style={styles.cardText}>Prescription Refills</Text>
          <Ionicons name="arrow-forward-circle" size={30} color="#7777f5" />
        </TouchableOpacity>

        {/* Communicate with Providers */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleFeaturePress("Communicate with Providers")}
        >
          <Text style={styles.cardText}>Communicate with Providers</Text>
          <Ionicons name="arrow-forward-circle" size={30} color="#7777f5" />
        </TouchableOpacity>

        {/* View Lab Results */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleFeaturePress("Lab Results")}
        >
          <Text style={styles.cardText}>View Lab Results</Text>
          <Ionicons name="arrow-forward-circle" size={30} color="#7777f5" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D8F83",
    padding: 20,
  },
  card: {
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff", // Card background color
    padding: 16, // Inner padding for card content
    borderRadius: 10, // Slightly curved edges
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Shadow blur
    elevation: 3, // Shadow for Android
  },
  cardText: {
    fontSize: 20,
    fontWeight: 500,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#fff",
    marginHorizontal: 10,
  },
  section: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  sectionItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
  },

  logoutButton: {
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 8,
    margin: 20,
    alignItems: "center",
  },
  gridContainer: {
    paddingVertical: 20,
    padding: 10,
    backgroundColor: "#d8d8eb",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },

  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#FF3B30",
    textAlign: "center",
  },
});

export default ProfilePage;
