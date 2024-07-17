import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesTable from "./ExpensesTable";
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
    <section className="bg-gray-100 grid grid-rows-12 h-auto min-h-screen">
      <div className="flex justify-center items-center row-span-1">
        <h1 className="text-2xl font-bold">Expense Tracker App</h1>
      </div>
      <div className=" grid grid-cols-2 w-full row-span-11">
        <div className="flex justify-center items-baseline mt-40">
          <ExpensesForm onAddExpense={(data) => handleAddExpense(data)} />
        </div>
        <div className="flex flex-col justify-center pr-4">
          <ExpensesFilter
            onSelectedCategory={(category) => handleSelectedCategory(category)}
          />
          <ExpensesTable
            expenses={visibleExpenses}
            onDelete={(id) => handleDelete(id)}
          />
        </div>
      </div>
    </section>
  );
};

export default ExpensesTracker;
