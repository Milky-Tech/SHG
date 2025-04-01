import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Notifications = () => {
  const [expanded, setExpanded] = useState(false);
  const heightAnimation = useState(new Animated.Value(70))[0];

  const toggleHeight = () => {
    Animated.timing(heightAnimation, {
      toValue: expanded ? 70 : 400, // Toggle between 150 (reduced) and 400 (full) height
      duration: 300, // Animation duration in milliseconds
      useNativeDriver: false, // Native driver doesn't support height animations
    }).start();

    setExpanded(!expanded); // Toggle the state
  };

  // Chats

  const [modalVisible, setModalVisible] = useState(false);

  const chats = [
    { id: "1", name: "Alice", lastMessage: "Hey, how are you?" },
    { id: "2", name: "Bob", lastMessage: "Meeting at 3 PM?" },
    { id: "3", name: "Charlie", lastMessage: "See you soon!" },
  ];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.toggleBox, { height: heightAnimation }]}>
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {expanded ? (
            <Text style={{ fontSize: 25, fontWeight: 700 }}>
              Notification Log
            </Text>
          ) : (
            <Text style={{ fontSize: 18, fontWeight: 600 }}>
              Notification Log
            </Text>
          )}
          <TouchableOpacity onPress={toggleHeight}>
            {expanded ? (
              <Ionicons
                name="arrow-down-circle-outline"
                size={30}
                color="#7777f5"
              />
            ) : (
              <Ionicons
                name="arrow-up-circle-outline"
                size={30}
                color="#7777f5"
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>Notification Log</Text>
        </View>
      </Animated.View>
      <View style={styles.chat}>
        <Text style={{ fontSize: 25, fontWeight: 600, fontFamily: "cursive" }}>
          Chats
        </Text>
      </View>
      <View style={styles.chatList}>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatItem}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </TouchableOpacity>
          )}
        />
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} // Handle back button press
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View styles={{ flexDirection: "row" }}>
                {" "}
                <Text style={styles.modalTitle}>Create Appoointment</Text>
                <Ionicons
                  name="close-outline"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  color="red"
                  size={50}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e7eff7",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  toggleBox: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  button: {
    position: "absolute",
    top: 5,
    right: 10,
    backgroundColor: "#007bff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    marginTop: 40,
  },
  chat: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  chatList: {
    width: "100%",
    backgroundColor: "#c0e2ef",
    paddingVertical: 20,
    padding: 10,
  },
  chatItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chatName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 14,
    color: "#666",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim background
  },
  modalContent: {
    width: "95%",
    height: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default Notifications;
