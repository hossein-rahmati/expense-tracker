const TransActions = ({ transactions }) => {
  return (
    <>
      {transactions.map((transaction) => {
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
