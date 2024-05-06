import { Text } from "react-native";
import { useLayoutEffect } from "react";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEdititng = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdititng ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEdititng]);

  return <Text> Manage Expense screen</Text>;
}

export default ManageExpense;
