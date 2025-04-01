import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker"; // For image upload
import { Link } from "expo-router";

const RegisterScreen = () => {
  // States
  const [email, setEmail] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [gname, setGname] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(new Date());
  const [showDobPicker, setShowDobPicker] = useState(false);
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [marital, setMarital] = useState("");
  const [allergies, setAllergies] = useState("");
  const [nin, setNin] = useState("");
  const [tpaId, setTpaId] = useState("");
  const [tpaValid, setTpaValid] = useState(new Date());
  const [remark, setRemark] = useState("");

  // Handle Date Change
  const onChangeDob = (event, selectedDate) => {
    setShowDobPicker(false);
    if (selectedDate) {
      setDob(selectedDate);
    }
  };
  const onChangeTpaValid = (event, selectedDate) => {
    setShowDobPicker(false);
    if (selectedDate) {
      setTpaValid(selectedDate);
    }
  };

  // Handle Image Upload
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Handle Form Submission
  const handleRegister = async () => {
    if (!email || !guardianName || !gname || !gender || !dob || !phone) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    const userData = {
      email,
      guardianName,
      gname,
      gender,
      dob: dob.toISOString(),
      phone,
      image,
      address,
      bloodGroup,
      marital,
      allergies,
      nin,
      tpaId,
      tpaValid,
      remark,
    };

    try {
      const response = await fetch(
        "https://your-backend-url.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        Alert.alert("Success", "Registration successful!");
      } else {
        const data = await response.json();
        Alert.alert("Error", data.message || "Registration failed.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Register Patient</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Guardian Name"
        placeholderTextColor="#888"
        secureTextEntry
        value={guardianName}
        onChangeText={setGuardianName}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#888"
        value={gname}
        onChangeText={setGname}
      />

      <TextInput
        style={styles.input}
        placeholder="Gender"
        placeholderTextColor="#888"
        value={gender}
        onChangeText={setGender}
      />

      <TouchableOpacity
        onPress={() => setShowDobPicker(true)}
        style={styles.dateButton}
      >
        <Text style={styles.dateText}>Date of Birth: {dob.toDateString()}</Text>
      </TouchableOpacity>

      {showDobPicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={onChangeDob}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
        <Text style={styles.imageText}>Cick to Select Profile Image</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#888"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Blood Group"
        placeholderTextColor="#888"
        value={bloodGroup}
        onChangeText={setBloodGroup}
      />
      <TextInput
        style={styles.input}
        placeholder="Marital Status"
        placeholderTextColor="#888"
        value={marital}
        onChangeText={setMarital}
      />
      <TextInput
        style={styles.input}
        placeholder="Allergies"
        placeholderTextColor="#888"
        value={allergies}
        onChangeText={setAllergies}
      />
      <TextInput
        style={styles.input}
        placeholder="National Identity Number"
        placeholderTextColor="#888"
        value={nin}
        onChangeText={setNin}
      />
      <TextInput
        style={styles.input}
        placeholder="TPA ID"
        placeholderTextColor="#888"
        value={tpaId}
        onChangeText={setTpaId}
      />

      <TouchableOpacity
        onPress={() => setShowDobPicker(true)}
        style={styles.dateButton}
      >
        <Text style={styles.dateText}>
          TPA Validity: {tpaValid.toDateString()}
        </Text>
      </TouchableOpacity>

      {showDobPicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={onChangeTpaValid}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Remark"
        placeholderTextColor="#888"
        value={remark}
        onChangeText={setRemark}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Link href={"/signInPatient"}>
          <Text style={styles.linkText}>Sign In</Text>
        </Link>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  dateButton: {
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    marginBottom: 20,
  },
  dateText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  imageButton: {
    padding: 15,
    backgroundColor: "#28a745",
    borderRadius: 5,
    marginBottom: 20,
  },
  imageText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
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
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: "#666",
    marginBottom: 50,
  },
  linkText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
