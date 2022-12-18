import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomButton = ({ btnTitle, handlePress }) => {
  return <Button title={btnTitle} onPress={handlePress} />;
};

export default CustomButton;

const styles = StyleSheet.create({});
