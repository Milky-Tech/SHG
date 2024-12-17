import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Platform,
  TouchableOpacity,
  Pressable,
} from "react-native";

import {
  dashboard,
  billing,
  opdPatient,
  ipdPatient,
  pharmacy,
  amblance,
  pathology,
  radiology,
  bloodBank,
  office,
  bnd,
  appointment,
  hr,
  referral,
  tpa,
  finance,
  messaging,
  inventory,
  download,
  Certificate,
  cms,
  reports,
  setup,
  live,
  icon,
} from "../../constants/icons";
import { router } from "expo-router";

const icons = [
  { id: "1", label: "Dashboard", icon: dashboard, link: "dashboard" },
  { id: "2", label: "Billing", icon: billing, link: "billing" },
  {
    id: "3",
    label: "Appointment",
    icon: appointment,
    link: "appointment",
  },
  { id: "4", label: "OPD - Out Patient", icon: opdPatient, link: "opdPatient" },
  { id: "5", label: "IPD - In Patient", icon: ipdPatient, link: "ipdPatient" },
  { id: "6", label: "Pharmacy", icon: pharmacy, link: "pharmacy" },
  { id: "7", label: "Pathology", icon: pathology, link: "pathology" },
  { id: "8", label: "Radiology", icon: radiology, link: "radiology" },
  { id: "9", label: "Blood Bank", icon: bloodBank, link: "bloodBank" },
  { id: "10", label: "Ambulance", icon: amblance, link: "ambulance" },
  { id: "11", label: "Front Office", icon: office, link: "frontOffice" },
  { id: "12", label: "Birth and Death Records", icon: bnd, link: "bndRecords" },
  { id: "13", label: "Human Resources", icon: hr, link: "hr" },
  { id: "14", label: "Referral", icon: referral, link: "referral" },
  { id: "15", label: "TPA Management", icon: tpa, link: "tpa" },
  { id: "16", label: "Finance", icon: finance, link: "finance" },
  { id: "17", label: "Messaging", icon: messaging, link: "messaging" },
  { id: "18", label: "Inventory", icon: inventory, link: "inventory" },
  {
    id: "19",
    label: "Download Center",
    icon: download,
    link: "downloadCenter",
  },
  { id: "20", label: "Certificate", icon: Certificate, link: "certificates" },
  { id: "21", label: "Front CMS", icon: cms, link: "frontCMS" },
  { id: "22", label: "Live Consultation", icon: live, link: "liveConsult" },
  { id: "23", label: "Reports", icon: reports, link: "reports" },
  { id: "24", label: "Setup", icon: setup, link: "setup" },
];

export default function Home() {
  const handleLogout = () => {
    Alert.alert("Logged Out", "You have been successfully logged out.");
    // Perform logout logic here (e.g., clear session, navigate to login screen)
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topBar}>
          <Image style={styles.img} source={icon} resizeMode="contain" />
        </View>
        <View style={styles.d1}>
          <View style={styles.slider}>
            <FlatList
              key={(item: any) => item.link}
              data={icons}
              numColumns={3}
              keyExtractor={(item) => item.link}
              columnWrapperStyle={{ justifyContent: "space-around" }}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => router.push(`/(admin)/${item.link}`)}
                  style={styles.card}
                  key={item.link}
                >
                  <Image
                    style={styles.ico}
                    source={item.icon}
                    resizeMode="contain"
                  />

                  <Text key={item.link} style={styles.label}>
                    {item.label}
                  </Text>
                </Pressable>
              )}
            />
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
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
  d1: { justifyContent: "center", alignItems: "center", width: "100%" },

  slider: {
    backgroundColor: "#7777f5",
    marginLeft: 3,
    width: "110%",
    height: "auto",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 8,
    margin: 20,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
