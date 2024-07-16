import { useState } from "react";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", category: "Utilities", amount: 10 },
    { id: 2, description: "bbb", category: "Utilities", amount: 10 },
    { id: 3, description: "ccc", category: "Utilities", amount: 10 },
    { id: 4, description: "ddd", category: "Utilities", amount: 10 },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <ExpenseTable expenses={expenses} onDelete={(id) => handleDelete(id)} />
    </>
  );
}

export default App;
