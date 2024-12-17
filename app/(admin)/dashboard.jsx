import {
  View,
  Text,
  Platform,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { profile } from "../../constants/icons";
import {
  icon,
  dashboard,
  billing,
  appointment,
  opdPatient,
  ipdPatient,
  pharmacy,
  pathology,
  radiology,
  bloodBank,
} from "../../constants/icons";
import { useState } from "react";

const Dashboard = () => {
  const icons = [
    { id: "1", label: "General Income", icon: dashboard },
    { id: "2", label: "Ambulance Income", icon: billing },

    {
      id: "4",
      label: "OPD - Out Patient",
      icon: opdPatient,
    },
    {
      id: "5",
      label: "IPD - In Patient",
      icon: ipdPatient,
    },
    { id: "6", label: "Pharmacy", icon: pharmacy },
    { id: "7", label: "Pathology", icon: pathology },
    { id: "8", label: "Radiology", icon: radiology },
    { id: "9", label: "Blood Bank", icon: bloodBank },
    {
      id: "3",
      label: "Expenses",
      icon: appointment,
    },
  ];

  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels
    datasets: [
      {
        data: [1200, 1500, 1800, 1000, 2100, 2500], // Income values
        strokeWidth: 2, // Line thickness
      },
    ],
  };

  //Income cat tab
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

  //Workers Data
  const workers = [
    { label: "Accountant", icon: dashboard },
    { label: "Doctor", icon: billing },

    {
      label: "Pharmacist",
      icon: opdPatient,
    },
    {
      label: "Pathologist",
      icon: ipdPatient,
    },
    { label: "Radiologist", icon: pharmacy },
    { label: "Super Admin", icon: pathology },
    { label: "Receptionist", icon: radiology },
    { label: "Nurse", icon: bloodBank },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Image style={styles.img} source={icon} resizeMode="contain" />
      </View>
      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: "#f69606",
          borderBottomWidth: 2,
          marginBottom: 50,
        }}
      >
        <FlatList
          data={icons}
          numColumns={3}
          keyExtractor={(item) => item.label}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "column",
                marginBottom: 20,
                width: "30%",
                alignItems: "center",
                backgroundColor: "#fff", // Card background color
                paddingTop: 10,
              }}
            >
              <View style={styles.card}>
                {" "}
                <Image
                  style={styles.ico}
                  source={item.icon}
                  resizeMode="contain"
                />
                <Text style={styles.label}>{item.label}</Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  padding: 10,
                  width: "100%",
                  backgroundColor: "#276b03",
                  color: "#fff",
                  borderRadius: 10,
                }}
              >
                #0
              </Text>
            </View>
          )}
        />
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 700,
          padding: 10,
          width: "100%",
          backgroundColor: "#fff",
          color: "#0B0B38",
        }}
      >
        Yearly Income & Exenses
      </Text>
      <LineChart
        data={data}
        width={screenWidth - 10} // Width of the chart
        height={220} // Height of the chart
        yAxisSuffix="$" // Add dollar sign to Y-axis values
        chartConfig={chartConfig}
        bezier // Smooth curve
        style={styles.chart}
      />
      <Animated.View style={[styles.toggleBox, { height: heightAnimation }]}>
        <View
          style={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700 }}>
            Monthly Income Overview
          </Text>
          <TouchableOpacity onPress={toggleHeight} style={styles.button}>
            <Text style={styles.buttonText}>{expanded ? "-" : "+"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>Monthly Income Overview</Text>
        </View>
      </Animated.View>

      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            paddingTop: 20,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopColor: "#f69606",
            borderTopWidth: 3,
            marginVertical: 5,
          }}
        >
          <FlatList
            data={workers}
            numColumns={2}
            keyExtractor={(item) => item.label}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <View style={styles.card1}>
                <Image
                  style={styles.imgCard}
                  source={profile}
                  resizeMode="contain"
                />
                <View style={{ display: "block", height: "100%" }}>
                  <Text style={{ color: "#0B0B38", fontSize: 14, padding: 10 }}>
                    {item.label}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      padding: 10,
                      width: "100%",
                      backgroundColor: "#fff",
                      color: "#0B0B38",
                    }}
                  >
                    10
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#f1f1f1",
  backgroundGradientTo: "#ffffff",
  decimalPlaces: 0, // No decimal points in Y-axis values
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, // Line color
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "6", // Dot radius
    strokeWidth: "2",
    stroke: "#007aff",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 20 : "",
    marginBottom: 70,
  },
  img: {
    width: "60%",
    height: "90%",
    marginTop: "5",
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
  card: {
    marginBottom: 5,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff", // Card background color
    paddingVertical: 5, // Inner padding for card content
    borderRadius: 10, // Slightly curved edges
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Shadow blur
    elevation: 3, // Shadow for Android
  },
  card1: {
    marginBottom: 20,
    width: "45%",
    flexDirection: "row",
    backgroundColor: "#fff", // Card background color
    paddingTop: 3, // Inner padding for card content
    borderRadius: 10, // Slightly curved edges
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Shadow blur
    elevation: 3, // Shadow for Android
  },
  ico: {
    width: "100%",
    height: "50",
    marginTop: "20",
  },
  imgCard: {
    width: "25%",
    marginRight: 2,
    borderRightColor: "#f69606",
    borderRightWidth: 2,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
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
});
export default Dashboard;
