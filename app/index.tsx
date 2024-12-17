import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  Animated,
  Platform,
  TextInput,
  Pressable,
} from "react-native";

import React, { useEffect, useRef, useState } from "react";

import {
  laboratory,
  Dialysis,
  Antenatal,
  nursing,
  pharmacy,
  amblance,
  emergency,
  radiology,
  profile,
  icon,
  appointment,
  medicalHealth1,
  medicalHealth2,
  medicalHealth3,
} from "../constants/icons";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const slides = [
  {
    image: medicalHealth1, // Replace with your image URL
    caption: "Take The World Best Quality Treatment..",
  },
  {
    image: medicalHealth2,
    caption: "Your Health, One Click Away..",
  },
  {
    image: medicalHealth3,
    caption: "Seamlessly manage your healthcare needs..",
  },
];

const icons = [
  { id: "1", label: "Emergency", icon: emergency },
  { id: "2", label: "Antenatal Care", icon: Antenatal },
  {
    id: "3",
    label: "Amblance",
    icon: amblance,
  },
  { id: "4", label: "Radiology", icon: radiology },
  { id: "5", label: "Laboratory", icon: laboratory },
  { id: "6", label: "Appointment", icon: appointment },
  { id: "7", label: "Dialysis", icon: Dialysis },
  { id: "8", label: "Pharmacy", icon: pharmacy },
  { id: "9", label: "Nursing", icon: nursing },
];
const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const loggedIn = 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const fadeAnim = useRef(new Animated.Value(1)).current; // Animated value for fade-in/out

  useEffect(() => {
    // Set a timer to transition from splash screen to landing page
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  // Automatically switch cards with fade animation
  useEffect(() => {
    const interval = setInterval(() => {
      animateFadeOut(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Loop through cards
        animateFadeIn();
      });
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  // Fade-out animation
  const animateFadeOut = (onComplete: () => void) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => onComplete());
  };

  // Fade-in animation
  const animateFadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Contact icon/button function

  const handleContactPress = () => {
    console.log("Contact button pressed!");
    // Add your navigation or action logic here
  };

  if (showSplash) {
    // Splash Screen
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image
          fadeDuration={1500}
          resizeMode="contain"
          source={{
            width: "80%",
            height: 100,
            uri: "https://sthhospital.com/wp-content/uploads/2024/07/SHH-LOGO.jpg",
          }}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topBar}>
          <Image style={styles.img} source={icon} resizeMode="contain" />

          {loggedIn ? (
            <Image source={profile} style={styles.profile} />
          ) : (
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.d1}>
          <View style={styles.slider} scrollEventThrottle={16}>
            {slides.map((slide, index) => (
              <View style={styles.slideCard} key={index}>
                <ImageBackground
                  source={slides[currentIndex].image}
                  style={styles.slideImage}
                >
                  <View style={styles.captionContainer}>
                    <Text style={styles.caption}>
                      {slides[currentIndex].caption}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </View>
        </View>
        <Pressable
          onPress={() => router.push("/(auth)/signInPatient")}
          style={styles.c2aCard}
        >
          <Text style={{ color: "#fff", fontSize: 25, fontWeight: "800" }}>
            Patient Portal
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(auth)/signInDoctor")}
          style={styles.c2aCard}
        >
          <Text style={{ color: "#fff", fontSize: 25, fontWeight: "800" }}>
            Doctor Login
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(auth)/signInAdmin")}
          style={styles.c2aCard}
        >
          <Text style={{ color: "#fff", fontSize: 25, fontWeight: "800" }}>
            Admin Login
          </Text>
        </Pressable>
        <View style={styles.d2}>
          <Text
            style={{
              color: "#0B0B38",
              fontSize: 22,
              fontWeight: "700",
              marginVertical: 40,
            }}
          >
            Emergency?
          </Text>
          <View
            style={{
              width: "50%",
              height: "50",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "#0B0B38", fontSize: 20, fontWeight: "700" }}>
              Our Services
            </Text>
          </View>
          <FlatList
            data={icons}
            numColumns={3}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{ justifyContent: "space-around" }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  style={styles.ico}
                  source={item.icon}
                  resizeMode="contain"
                />
                <Text style={styles.label}>{item.label}</Text>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate("Contact")}
        >
          <Ionicons name="chatbubbles" size={24} color="#fff" />
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.footer}>
            <Text
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                marginVertical: 10,
              }}
            >
              Join our newsletter
            </Text>{" "}
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#fff"
              value={email}
              onChangeText={(text) => setEmail(text)}
              secureTextEntry
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 20 : "",
    marginBottom: 70,
  },
  profile: {
    height: 35,
    width: 35,
  },
  img: {
    width: "60%",
    height: "90%",
    marginTop: "5",
  },

  //icon styles
  ico: {
    width: "100%",
    height: "50",
    marginTop: "20",
  },
  label: {
    fontSize: 12,
  },
  c2aCard: {
    margin: "auto",
    width: "80%",
    height: "70",
    alignItems: "center",
    backgroundColor: "#0CA496", // Card background color
    padding: 16, // Inner padding for card content
    borderRadius: 20, // Slightly curved edges
    shadowColor: "#0B0B38", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.8, // Shadow transparency
    shadowRadius: 5, // Shadow blur
    elevation: 3, // Shadow for Android
    marginVertical: "3",
  },
  card: {
    marginBottom: 20,
    width: "30%",
    alignItems: "center",
    backgroundColor: "#fff", // Card background color
    padding: 16, // Inner padding for card content
    borderRadius: 10, // Slightly curved edges
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Shadow blur
    elevation: 3, // Shadow for Android
  },
  text: {
    color: "#fff",
  },
  btn: {
    flex: 2,
  },
  topBar: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "8%",
    borderBottomWidth: 0.1,
    borderBottomColor: "#000",
    marginBottom: 10,
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
  d1: { justifyContent: "center", alignItems: "center", marginVertical: "20" },
  d2: { justifyContent: "space-around", padding: "10" },
  slider: {
    backgroundColor: "#0B0B38",
    marginLeft: 3,
    width: "90%",
    height: 300,
    marginBottom: 2,
    padding: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#5E5EEE",
    padding: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  //Slider

  slideCard: {
    width: "100%", // Card width is 80% of the screen
    height: "100%", // Fixed height for cards
    marginHorizontal: 10, // Space between cards
    borderRadius: 10,
    overflow: "hidden", // Ensure content stays within rounded edges
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
    flexDirection: "row",
  },
  slideImage: {
    flex: 1,
    opacity: 0.7,
    justifyContent: "center", // Align caption to the bottom
  },
  captionContainer: {
    backgroundColor: "#0B0B38", // Semi-transparent background for caption
    padding: 10,
  },
  caption: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  // contact button

  floatingButton: {
    position: "absolute", // Absolute positioning for floating effect
    bottom: 20, // Distance from the bottom of the screen
    right: 20, // Distance from the right side of the screen
    backgroundColor: "#0B0B38", // Button color
    width: 60, // Fixed button width
    height: 60, // Fixed button height
    borderRadius: 30, // Circular shape
    justifyContent: "center", // Center icon horizontally
    alignItems: "center", // Center icon vertically
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
    zIndex: 1,
    marginRight: "5%",
    marginBottom: "5%",
    margin: "auto",
  },
  footer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#5E5EEE",
  },
  input: {
    width: "100%",
    backgroundColor: "#5E5EEE",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
