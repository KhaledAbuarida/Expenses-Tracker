import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesTable from "./ExpensesTable";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { expensesSample } from "../utils/data";
import ExpensesForm from "./ExpensesForm";
import Expense from "../types/ExpenseType";

const ExpensesTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expenses, setExpenses] = useState(expensesSample);

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

  const handleAddExpense = (data: Expense) => {
    setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
  };

  return (
    <Container>
      <ExpensesForm onAddExpense={(data) => handleAddExpense(data)} />
      <Box mb={2} mt={2}>
        <ExpensesFilter
          onSelectedCategory={(category) => handleSelectedCategory(category)}
        />
      </Box>
      <ExpensesTable
        expenses={visibleExpenses}
        onDelete={(id) => handleDelete(id)}
      />
    </Container>
  );
};

export default ExpensesTracker;
