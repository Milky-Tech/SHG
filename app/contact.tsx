import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Mock API call for sending the message
    // Alert.alert(
    //   'Message Sent',
    //   Thank you for contacting us, ${name}. We will get back to you soon.
    // );
    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Us</Text>
        <Text style={styles.headerDescription}>
          We'd love to hear from you! Please reach out with any questions or
          concerns.
        </Text>
      </View>

      <View style={styles.form}>
        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          placeholderTextColor="#888"
          value={phoneNo}
          onChangeText={(text) => setPhoneNo(text)}
          autoCapitalize="none"
        />

        {/* Message Input */}
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          placeholderTextColor="#888"
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
          numberOfLines={4}
        />

        {/* Send Message Button */}
        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Contact Information</Text>
        <Text style={styles.footerText} numberOfLines={2}>
          Phone: +(555-777-444-222) +666-432-879-004
        </Text>
        <Text style={styles.footerText} numberOfLines={2}>
          Email: info@sthhospital.com contact@sthhospital.com
        </Text>
        <Text style={styles.footerText} numberOfLines={2}>
          Address: Hot Junction, Ulakwo Owerri North, Imo State, Nigeria.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#0B0B38",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    paddingTop: 100,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  headerDescription: {
    marginTop: 10,
    fontSize: 16,
    color: "#eee",
    textAlign: "center",
  },
  form: {
    padding: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    color: "#333",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top", // For multiline input
  },
  button: {
    backgroundColor: "#0D8F83",
    padding: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  footer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    textAlign: "center",
    width: "60%",
    marginVertical: 5,
  },
});

export default ContactUsPage;
