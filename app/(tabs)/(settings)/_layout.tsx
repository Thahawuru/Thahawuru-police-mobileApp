import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        contentStyle: { backgroundColor: "#EBF5FF" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          // Hide the header for all other routes.
          title: "Settings",
          headerShown: false,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
