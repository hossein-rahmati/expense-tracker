import { useState } from "react";

const TransactionForm = ({ isShow, setIsShow, addToTransactions }) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: null,
    description: "",
  });

  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addToTransactions(formValue);
    setIsShow(!isShow);
    formValue.amount = null;
    formValue.description = "";
  };

  return (
    <>
      {isShow && (
        <form className="w-full flex flex-col" onSubmit={submitHandler}>
          <label>description</label>
          <input
            onChange={changeHandler}
            value={formValue.description}
            name="description"
            type="text"
            placeholder="description..."
            className="w-full bg-slate-200 rounded-md h-8 p-2 mb-6"
          />
          <label>amount</label>
          <input
            onChange={changeHandler}
            value={formValue.amount}
            name="amount"
            type="number"
            placeholder="amount..."
            className="w-full bg-slate-200 rounded-md h-8 p-2 mb-6"
          />
          <div>
            <input
              onChange={changeHandler}
              checked={formValue.type === "expense"}
              type="radio"
              className="mr-1"
              name="type"
              value="expense"
            />
            <label className="mr-8">Expense</label>

            <input
              onChange={changeHandler}
              checked={formValue.type === "income"}
              type="radio"
              className="mr-1"
              name="type"
              value="income"
            />
            <label className="mr-8">Income</label>
          </div>
          <button
            type="submit"
            className="bg-slate-900 text-white rounded-md px-3 py-1 mt-4"
          >
            Add Transaction
          </button>
        </form>
      )}
    </>
  );
};

export default TransactionForm;
