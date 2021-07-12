import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthNavigator from "./routes/authStack";
import MainNavigator from "./routes/mainStack";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return isAuthenticated ? (
    <MainNavigator setState={setIsAuthenticated} />
  ) : (
    <AuthNavigator setState={setIsAuthenticated} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
