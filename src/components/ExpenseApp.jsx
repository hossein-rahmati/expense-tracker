import { useState } from "react";
import Balance from "./Balance";
import TransActions from "./TransActions";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addToTransactions = (formValue) => {
    setTransactions([...transactions, { ...formValue, id: Date.now() }]);

    if (formValue.type === "income") {
      setIncome(parseInt(income) + parseInt(formValue.amount));
    } else {
      setExpense(parseInt(expense) + parseInt(formValue.amount));
    }
  };

  return (
    <>
      <Balance
        income={income}
        expense={expense}
        addToTransactions={addToTransactions}
      />
      <TransActions transactions={transactions} />
    </>
  );
};

export default ExpenseApp;
