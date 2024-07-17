import Expense from "../types/ExpenseType";

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpensesTable = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) {
    return null;
  }

  return (
    <section className="p-4 w-full flex justify-center items-center">
      <table className="table-auto w-full rounded-lg p-2">
        <thead className="text-lg font-medium border-b-2 border-gray-400">
          <tr>
            <td className="p-1">Description</td>
            <td>Amount</td>
            <td>Category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="p-3">{expense.description}</td>
              <td className="p-3">{expense.amount}</td>
              <td className="p-3">{expense.category}</td>
              <td>
                <button
                  onClick={() => onDelete(expense.id!)}
                  className="bg-red-400 text-white py-1 px-2 rounded-lg hover:bg-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="py-2">Total Amount</td>
            <td>
              $
              {expenses
                .reduce((acc, expenses) => expenses.amount + acc, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ExpensesTable;
