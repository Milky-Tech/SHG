import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="signInAdmin" options={{ headerShown: false }} />
      <Stack.Screen name="signInDoctor" options={{ headerShown: false }} />
      <Stack.Screen name="signInPatient" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
