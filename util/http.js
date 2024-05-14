import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-expense-app-980a1-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
