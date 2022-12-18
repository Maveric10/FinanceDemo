import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { IncomeDetailsAtom } from "../components/helper/formInputs.atom";

const Income = () => {
  const [formValues, setFormValues] = useRecoilState(IncomeDetailsAtom);

  const handleFormInput = (e, name) => {
    // console.log(e, name);
    setFormValues((prev) => ({ ...prev, [name]: e }));
  };

  // useEffect(() => {
  //   console.log(formValues);
  // }, [formValues]);

  const handleSubmit = () => {
    console.log(formValues);
  };

  return (
    <SafeAreaView
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <TextInput
        style={styles.inputContainer}
        value={formValues.incomeType}
        name="incomeType"
        placeholder="Pure Income"
        onChangeText={(e) => handleFormInput(e, "incomeType")}
      />
      <TextInput
        style={styles.inputContainer}
        value={formValues.incomeStatus}
        name="incomeStatus"
        placeholder="Income Done"
        onChangeText={(e) => handleFormInput(e, "incomeStatus")}
      />
      <TextInput
        style={styles.inputContainer}
        value={formValues.providerName}
        name="providerName"
        placeholder="Provider Name"
        onChangeText={(e) => handleFormInput(e, "providerName")}
      />
      <TextInput
        style={styles.inputContainer}
        value={formValues.accountRecieved}
        name="accountRecieved"
        placeholder="Income Recieved"
        onChangeText={(e) => handleFormInput(e, "accountRecieved")}
      />
      <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit}>
        <Text>Add Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Income;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "blue",
    borderWidth: 2,
    marginVertical: 10,
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
