import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Icon library
import { Slot, Link, useSegments } from "expo-router"; // File-based routing utilities

export default function RootLayout() {
  const segments = useSegments(); // if route is /menu/settings, u get ["menu", "settings"]

  // Define the routes where the bottom navigation bar should be visible
  const routesWithNavbar = ["reminders", "home"];

  // Determine if the current route should display the navbar
  const shouldShowNavbar = routesWithNavbar.includes(segments[0]);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Stack Navigator */}
        <Stack       
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="home"/>
          <Stack.Screen name="reminders" />
          <Slot />
        </Stack>

        {/* Conditionally Render Bottom Navigation Bar */}
        {shouldShowNavbar && (
          <View style={styles.navbar}>
            
            {/* Menu Button */}
            <Link href="/reminders" style={styles.navButton}>
              <Ionicons
                name={segments[0] === "reminders" ? "list" : "list-outline"}
                size={24}
                color={segments[0] === "reminders" ? "tomato" : "gray"}
              />
              <Text
                style={[
                  styles.navText,
                  segments[0] === "reminders" && styles.activeText,
                ]}
              >
                Reminders
              </Text>
            </Link>
            {/* Home Button */}
            <Link href="/home" style={styles.navButton}>
              <Ionicons
                name={segments[0] === "home" ? "home" : "home-outline"}
                size={24}
                color={segments[0] === "home" ? "tomato" : "gray"}
              />
              <Text
                style={[
                  styles.navText,
                  segments[0] === "home" && styles.activeText,
                ]}
              >
                Home
              </Text>
            </Link>
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 12,
    color: "gray",
  },
  activeText: {
    color: "tomato",
  },
  content: {
    flex: 1,
    paddingBottom: 60, // Reserve space for the navbar
  },
});