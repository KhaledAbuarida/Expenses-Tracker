import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesTable from "./ExpensesTable";
import Container from "@mui/material/Container";

const ExpensesTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", category: "Utilities", amount: 10 },
    { id: 2, description: "bbb", category: "Groceries", amount: 10 },
    { id: 3, description: "ccc", category: "Utilities", amount: 10 },
    { id: 4, description: "ddd", category: "Entertainments", amount: 10 },
  ]);

  const filterExpenses = () => {
    if (selectedCategory) {
      if (selectedCategory === "All Categories") {
        return expenses;
      }

      return expenses.filter(
        (expense) => expense.category === selectedCategory
      );
    }

    return expenses;
  };

  const visibleExpenses = filterExpenses();

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <ExpensesFilter
        onSelectedCategory={(category) => handleSelectedCategory(category)}
      />
      <ExpensesTable
        expenses={visibleExpenses}
        onDelete={(id) => handleDelete(id)}
      />
    </Container>
  );
};

export default ExpensesTracker;
