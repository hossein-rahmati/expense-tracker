import { useState } from "react";
import Balance from "./Balance";
import TransActions from "./TransActions";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <Balance income={income} expense={expense} />
      <TransActions transactions={transactions} />
    </>
  );
};

export default ExpenseApp;
