import { Link } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Platform,
} from "react-native";

const SignInAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        resizeMode="contain"
        fadeDuration={1500}
        source={{
          uri: "https://sthhospital.com/wp-content/uploads/2024/07/SHH-LOGO.jpg",
        }}
      />
      <Text style={styles.txt}>HOSPITAL</Text>
      <Text style={styles.title}>AUTOMANAGER</Text>
      <Text style={{ fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
        Admin Login
      </Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Admin Sign In</Text>
      </TouchableOpacity>
      <Link href={"/(admin)/admin"}>
        <Text style={styles.buttonText}>Patient Sign In</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginTop: Platform.OS === "android" ? 30 : "",
    paddingHorizontal: Platform.OS === "ios" ? 25 : "",
  },
  img: {
    width: "100%",

    height: Platform.OS === "ios" ? 110 : 100,
  },

  title: {
    fontSize: 15,
    fontWeight: "light",
    color: "#333",
    marginBottom: 30,
    letterSpacing: 15,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    width: "100%",
    backgroundColor: "#0D8F83",
    padding: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  txt: {
    fontSize: 58,
    fontWeight: 700,
    lineHeight: 70,
    marginVertical: 5,
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: "#666",
  },
  linkText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});

export default SignInAdmin;
