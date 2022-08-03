import { useState } from "react";
import TransactionForm from "./TransactionForm";

const Balance = ({ income, expense, addToTransactions }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <section className="flex flex-col w-96 bg-white p-3 rounded-md gap-y-8 pt-8 mb-4">
      <div className="flex justify-between">
        <p
          className={`font-semibold ${
            income - expense >= 0 ? "text-green-700" : "text-red-500"
          }`}
        >
          Balance: {income - expense}
        </p>
        <button
          title={!isShow && "Add Transaction"}
          onClick={() => setIsShow(!isShow)}
          className="bg-slate-900 text-white rounded-md px-3 py-1"
        >
          {isShow ? "cancel" : "Add"}
        </button>
      </div>

      <TransactionForm
        isShow={isShow}
        setIsShow={setIsShow}
        addToTransactions={addToTransactions}
      />

      <div className="flex justify-center items-center gap-x-1">
        <div className="flex items-start flex-col ring-1 ring-slate-400 p-8 flex-1 rounded-md">
          <p>Expence</p>
          <p className="text-red-500 text-xl">${expense}</p>
        </div>
        <div className="flex items-start flex-col ring-1 ring-slate-400 p-8 flex-1 rounded-md">
          <p>Income</p>
          <p className="text-green-700 text-xl">${income}</p>
        </div>
      </div>
    </section>
  );
};

export default Balance;
