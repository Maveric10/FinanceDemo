import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import DatePicker from "../components/Datepicker";
import LabelInput from "../components/LabelInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Expense = () => {
  // const [showCalendar, setShowCalendar] = useState(false);
  // const openCalendar = () => {
  //   setShowCalendar(true);
  // };
  // const closeCalendar = () => {
  //   setShowCalendar(false);
  // };
  // console.log(showCalendar);

  const [formValue, setFormValue] = useState("");
  // const [list, setList] = useState([]);
  const [formData, setFormData] = useState("");

  // function submitForm() {
  //   setList([...list, formValue]);
  //   setFormValue(formValue);
  //   console.log(formValue);
  //   console.log(list);
  //   Keyboard.dismiss();
  //   setFormValue("");
  // }

  const submitData = async () => {
    try {
      await AsyncStorage.setItem("inputValueKey", formValue);
      setFormValue("");
      alert("Value added");
      // await viewData();
    } catch (error) {
      console.log(error);
    }
  };

  const viewData = async () => {
    try {
      const data = await AsyncStorage.getItem("inputValueKey");
      // setList([data, ...list]);
      setFormData(data);
      // console.log(list);
      // console.log(formData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    viewData();
  }, []);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text>Expense</Text>

      {/* <LabelInput
        labeledInputValue={formValue}
        setChangeText={(value) => setFormValue(value)}
      />
      <CustomButton btnTitle="submit" handlePress={submitForm} /> */}

      <TextInput
        placeholder="Enter data to add"
        style={styles.inputContainer}
        value={formValue}
        onChangeText={(value) => setFormValue(value)}
      />
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => submitData()}
      >
        <Text>Add Data</Text>
      </TouchableOpacity>
      {/* <View>
        {list.map((items, index) => {
          return <Text key={index}>{items}</Text>;
        })}
      </View> */}
      <Text>Added value is {formData}</Text>
    </View>
  );
};

export default Expense;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "blue",
    borderWidth: 2,
    width: 300,
    padding: 10,
  },
  btnContainer: {
    backgroundColor: "green",
    width: 300,
    color: "white",
    padding: 5,
    marginVertical: 10,
    alignItems: "center",
  },
});

{
  /* <CustomButton btnTitle="open calendar" handlePress={openCalendar} /> */
}
{
  /* <DatePicker isVisible={showCalendar} onCancel={closeCalendar} /> */
}
