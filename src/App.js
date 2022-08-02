import "./App.css";
import ExpenseApp from "./components/ExpenseApp";

const App = () => {
  return (
    <div className="App">
      <header className="mb-8">
        <h1>Expense Tracker</h1>
      </header>

      <ExpenseApp />
    </div>
  );
};

export default App;
