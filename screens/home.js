import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
      <Button
        title="Another"
        onPress={() => {
          navigation.navigate("Another");
        }}
      />
      <Button
        title="Log out"
        onPress={() => {
          route.params.setState(false);
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
