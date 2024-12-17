import { Stack } from "expo-router";

const AdminLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="admin"
        options={{
          headerTitle: "Admin Page",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="dashboard"
        options={{
          headerTitle: "Dashboard",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="ambulance"
        options={{
          headerTitle: "Ambulance",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="appointment"
        options={{
          headerTitle: "Appointment",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="billing"
        options={{
          headerTitle: "Billing",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="bloodBank"
        options={{
          headerTitle: "Blood Bank",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="bndRecords"
        options={{
          headerTitle: "Birth and Death Records",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="certificates"
        options={{
          headerTitle: "Certificates",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="downloadCenter"
        options={{
          headerTitle: "Download Center",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="finance"
        options={{
          headerTitle: "Finance",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="frontCMS"
        options={{
          headerTitle: "Front CMS",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="frontOffice"
        options={{
          headerTitle: "Front Office",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="hr"
        options={{
          headerTitle: "Human Resources",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="inventory"
        options={{
          headerTitle: "Inventory",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="ipdPatient"
        options={{
          headerTitle: "IPD Patient",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="opdPatients"
        options={{
          headerTitle: "OPD Patients",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="pathology"
        options={{
          headerTitle: "Pathology",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="pharmacy"
        options={{
          headerTitle: "Pharmacy",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="radiology"
        options={{
          headerTitle: "Radiology",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="referral"
        options={{
          headerTitle: "Referral",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="reports"
        options={{
          headerTitle: "Reports",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="setup"
        options={{
          headerTitle: "Setup",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
      <Stack.Screen
        name="tpa"
        options={{
          headerTitle: "TPA",
          headerStyle: { backgroundColor: "#0B0B38" },
        }}
      />
    </Stack>
  );
};

export default AdminLayout;
