import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Expense from "../../screens/Expense.js";
import Income from "../../screens/Income.js";
import Report from "../../screens/Report.js";
import User from "../../screens/User.js";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

const NavContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="User">
        <Tab.Screen
          name="Expense"
          component={Expense}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="math-integral"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Income"
          component={Income}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="matrix" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Report"
          component={Report}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="adjust" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="face-agent"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavContainer;

const styles = StyleSheet.create({});
