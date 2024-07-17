import { categories } from "../utils/data";

interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpensesFilter = ({ onSelectedCategory }: Props) => {
  const handleChange = (event: any) => {
    onSelectedCategory(event.target.value);
  };

  return (
    <section className="flex flex-col justify-start items-start p-4 ">
      <label className="font-medium text-gray-800">Filter Categories</label>
      <select
        onChange={(event) => handleChange(event)}
        className="bg-gray-50 w-full border border-gray-300 rounded-lg mt-0.5 py-2 px-2 placeholder:text-gray-200 focus:outline-blue-600 focus:ring-blue-300 focus:ring-4"
      >
        <option value={"All Categories"}>All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </section>
  );
};

export default ExpensesFilter;
