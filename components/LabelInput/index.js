import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const LabelInput = ({ labeledInputValue, setChangeText }) => {
  return (
    <TextInput
      placeholder="Enter something"
      value={labeledInputValue}
      onChangeText={setChangeText}
    />
  );
};

export default LabelInput;

const styles = StyleSheet.create({});
