import { categories } from "../utils/data";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Expense from "../types/ExpenseType";

interface Props {
  onAddExpense: (expense: Expense) => void;
}

const ExpensesForm = ({ onAddExpense }: Props) => {
  const schema = yup
    .object({
      description: yup.string().required("Description is required").max(20),
      amount: yup
        .number()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value
        )
        .typeError("Amount must be number")
        .positive("Amount must be a positive number")
        .required("Amount is required"),
      category: yup.string().required("Category is required"),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Expense) => {
    onAddExpense(data);
    reset();
  };

  return (
    <section className="bg-white border border-gray-50 shadow p-3 rounded-lg w-8/12">
      <form onSubmit={handleSubmit(onSubmit)} action="#" className="space-y-6">
        <div>
          <label className="block text-gray-800 font-medium">Description</label>
          <input
            type="text"
            {...register("description")}
            placeholder="e.g, eggs"
            className="bg-gray-50 w-full border border-gray-300 rounded-lg mt-0.5 py-2 px-2 placeholder:text-gray-200 focus:outline-blue-600 focus:ring-blue-300 focus:ring-4"
          />
          <p className="text-red-500">{errors.description?.message}</p>
        </div>
        <div>
          <label className="block text-gray-800 font-medium">Amount</label>
          <input
            {...register("amount")}
            placeholder="$7.99"
            type="decimal"
            className="bg-gray-50 w-full border border-gray-300 rounded-lg mt-0.5 py-2 px-2 placeholder:text-gray-200 focus:outline-blue-600 focus:ring-blue-300 focus:ring-4"
          />
          <p className="text-red-500">{errors.amount?.message}</p>
        </div>
        <div>
          <label className="block text-gray-800 font-medium">Category</label>
          <select
            {...register("category")}
            defaultValue={""}
            className="bg-gray-50 w-full border border-gray-300 rounded-lg mt-0.5 py-2 px-2 placeholder:text-gray-200 focus:outline-blue-600 focus:ring-blue-300 focus:ring-4"
          >
            <option hidden></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <p className="text-red-500">{errors.category?.message}</p>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ExpensesForm;
