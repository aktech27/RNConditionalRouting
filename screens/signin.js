import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Signin = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>This is Signin</Text>
      <Button
        title="Signup"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
      <Button
        title="Log me"
        onPress={() => {
          route.params.setState(true);
        }}
      />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
