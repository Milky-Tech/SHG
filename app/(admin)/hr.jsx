import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";

const HumanResource = () => {
  const [searchText, setSearchText] = useState("");
  const [staffData, setStaffData] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get("https://your-api.com/staff");
        setStaffData(response.data);
        setFilteredStaff(response.data);
      } catch (error) {
        console.error("Error fetching staff data:", error);
        Alert.alert("Error", "Failed to fetch staff data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStaffData();
  }, []);

  // Handle search filtering
  const handleSearch = (text) => {
    setSearchText(text);
    const lowerText = text.toLowerCase();

    const filtered = staffData.filter(
      (staff) =>
        staff.name.toLowerCase().includes(lowerText) ||
        staff.id.toLowerCase().includes(lowerText) ||
        staff.role.toLowerCase().includes(lowerText)
    );

    setFilteredStaff(filtered);
  };

  // Toggle expand/collapse for staff details
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Send message (simple alert for demonstration)
  const sendMessage = (name) => {
    Alert.alert("Message", `Sending message to ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Staff</Text>

      <TextInput
        style={styles.input}
        placeholder="Search by name, ID, or role..."
        value={searchText}
        onChangeText={handleSearch}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredStaff}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSubtitle}>
                  ID: {item.id} | Role: {item.role}
                </Text>
              </TouchableOpacity>

              {expandedId === item.id && (
                <View style={styles.details}>
                  <Text>Email: {item.email}</Text>
                  <Text>Phone: {item.phone}</Text>
                  <Button
                    title="Message"
                    onPress={() => sendMessage(item.name)}
                  />
                </View>
              )}
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.noResults}>No staff found.</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#555",
  },
  details: {
    marginTop: 10,
  },
  noResults: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 20,
  },
});

export default HumanResource;
