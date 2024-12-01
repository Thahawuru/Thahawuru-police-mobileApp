import { Stack } from "expo-router";

export default function searchLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        contentStyle: { backgroundColor: "#EBF5FF" },
      }}
    >
      <Stack.Screen
        name="searchPersons"
        options={{
          // Hide the header for all other routes.
          title: "searchPersons",
          //   headerShown: false,
          //   presentation: "modal",
        }}
      />
      <Stack.Screen
        name="searchVehicles"
        options={{
          title: "searchVehicles",
          // Set the presentation mode to modal for our modal route.
          //   presentation: "modal",
        }}
      />
    </Stack>
  );
}
