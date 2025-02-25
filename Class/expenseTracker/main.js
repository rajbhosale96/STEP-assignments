import { Expense } from "./src/abc.js";

const data = [12.34, 32.43, 32.57, 5.1, 2.6];

const main = () => {
  // const expense1 = Expense.parse(12.34);
  // return expense1.add(Expense.parse(32.43)).toString();
  const expenses = data.map(Expense.parse);
  const totalExpense = expenses.reduce((acc, expense) => acc.add(expense));

  return totalExpense.toString();
};

console.log(main());
