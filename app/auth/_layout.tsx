import { Stack } from "expo-router";

export default function AuthStackLayout() {
  return (
    <Stack>
      <Stack.Screen
      name="LoginScreen"
      options={{ title: "Iniciar Sesión", headerShown: false }}
      />
      <Stack.Screen
      name="SignUpScreen"
      options={{ title: "Registrarse", headerShown: false }}
      />
    </Stack>
  );
}