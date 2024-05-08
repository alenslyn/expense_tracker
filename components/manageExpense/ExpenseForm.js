import { View, TextInput, StyleSheet } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {}
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false, //def is true
          //   autoCapitalize: none
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({});
