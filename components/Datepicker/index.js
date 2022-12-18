import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ isVisible, onConfirm, onCancel }) => {
  return (
    <RNDateTimePicker
      isVisible={isVisible}
      value={new Date()}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default DatePicker;

const styles = StyleSheet.create({});
