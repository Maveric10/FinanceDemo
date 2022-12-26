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
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/FontAwesome";

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
  const expenseVar = ["Execute Expense", "Plan Expense"];
  const expenseType = ["Pure Expense", "Investment", "Lump Sum"];
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

      <SelectDropdown
        data={expenseVar}
        // defaultButtonText={"Execute Expense"}
        defaultValueByIndex={0}
        defaultValue={"Execute Expense"}
        renderDropdownIcon={(isOpened) => {
          return (
            <Icon
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#444"}
              size={18}
            />
          );
        }}
        buttonStyle={styles.dropdownForm}
        buttonTextStyle={styles.dropdownFormTextStyle}
        dropdownStyle={styles.formDropdown}
        rowTextStyle={styles.formDropdownRowText}
        dropdownOverlayColor={"transparent"}
      />
      <SelectDropdown
        data={expenseType}
        defaultButtonText={"Pure Expense"}
        defaultValue={"Pure Expense"}
        // onSelect={(selectedItem, index) => {
        //   console.log(selectedItem, index);
        // }}
        // buttonTextAfterSelection={(selectedItem, index) => {
        //   return selectedItem;
        // }}
        // rowTextForSelection={(item, index) => {
        //   return item;
        // }}
        renderDropdownIcon={(isOpened) => {
          return (
            <Icon
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#444"}
              size={18}
            />
          );
        }}
        buttonStyle={styles.dropdownForm}
        buttonTextStyle={styles.dropdownFormTextStyle}
        dropdownStyle={styles.formDropdown}
        rowTextStyle={styles.formDropdownRowText}
        dropdownOverlayColor={"transparent"}
      />
      <TextInput
        placeholder="Date"
        style={styles.inputContainer}
        value={formValue}
        onChangeText={(value) => setFormValue(value)}
      />
      <TextInput
        placeholder="Expense Purpose"
        style={styles.inputContainer}
        value={formValue}
        onChangeText={(value) => setFormValue(value)}
      />
      <TextInput
        placeholder="Cost Assosciated"
        style={styles.inputContainer}
        value={formValue}
        onChangeText={(value) => setFormValue(value)}
      />
      <TextInput
        placeholder="Date"
        style={styles.inputContainer}
        value={formValue}
        onChangeText={(value) => setFormValue(value)}
      />
      <TextInput
        placeholder="For self"
        style={styles.inputContainer}
        value={formValue}
        onChangeText={(value) => setFormValue(value)}
      />
      <TextInput
        placeholder="Important and urgent"
        style={styles.inputContainer}
        value={formValue}
        onChangeText={(value) => setFormValue(value)}
      />
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => submitData()}
      >
        <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
          Submit
        </Text>
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
    marginVertical: 5,
  },
  btnContainer: {
    backgroundColor: "#007bff",
    width: 300,
    color: "white",
    padding: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  dropdownForm: {
    borderWidth: 2,
    borderColor: "blue",
    width: 300,
    marginVertical: 5,
  },
  dropdownFormTextStyle: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "200",
  },
  formDropdown: {
    width: 300,
    borderRadius: 5,
  },
  formDropdownRowText: {
    textAlign: "left",
  },
});

{
  /* <CustomButton btnTitle="open calendar" handlePress={openCalendar} /> */
}
{
  /* <DatePicker isVisible={showCalendar} onCancel={closeCalendar} /> */
}
