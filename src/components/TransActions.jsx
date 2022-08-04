import { useEffect, useState } from "react";

const TransActions = ({ transactions }) => {
  const [value, setValue] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const filterTransactions = (search) => {
    if (search === "" || !search) {
      setFilteredTransactions(transactions);
      return;
    } else {
      const filter = transactions.filter((transaction) => {
        return transaction.description
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilteredTransactions(filter);
    }
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(value);
  }, [transactions]);

  return (
    <>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        className="w-96 h-8 rounded-md mb-4 p-3"
        placeholder="Search for..."
      />

      {filteredTransactions.map((transaction) => {
        return (
          <div
            className={`flex justify-between w-96 p-4 bg-slate-300 rounded-lg border-r-8 mb-2 ${
              transaction.type === "income"
                ? "border-green-600"
                : "border-red-600"
            }`}
          >
            <p>{transaction.description}</p>
            <p>${transaction.amount}</p>
          </div>
        );
      })}
    </>
  );
};

export default TransActions;
