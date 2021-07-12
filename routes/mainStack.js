import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Another from "../screens/another";

const Stack = createStackNavigator();

const MainNavigator = ({ setState }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} initialParams={{ setState }} />
        <Stack.Screen name="Another" component={Another} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
