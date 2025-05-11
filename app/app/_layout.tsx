import { Tabs } from "expo-router";

export default function AppTabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="HomeScreen"
        options={{ title: "Inicio", headerShown: false }}
      />
      <Tabs.Screen
        name="ProgressScreen"
        options={{ title: "Mi Progreso", headerShown: false }}
      />
      <Tabs.Screen
        name="AddHabitScreen"
        options={{ title: "Agregar Hábito", headerShown: false }}
      />
      <Tabs.Screen
        name="SettingsScreen"
        options={{ title: "Configuración", headerShown: false }}
      />
    </Tabs>
  );
}